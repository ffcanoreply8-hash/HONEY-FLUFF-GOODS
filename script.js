'use strict';
(() => {
const config = {email:'sonnyzadeh219@gmail.com',featured:['cloud','cookie','cookie-4','brownie-2']};
const treats = Array.isArray(window.HF_PRODUCTS) ? window.HF_PRODUCTS : [];
const chocolateWrapperImages = {
  milk: 'golden-hour.png',
  rose: 'rose-tinted.png',
  'chocolate-1': 'midnight-truffle.png',
  'chocolate-2': 'pistachio-silk.png',
  'chocolate-3': 'caramel-gleam.png',
  'chocolate-4': 'hazelnut-halo.png',
  'chocolate-5': 'orange-afterglow.png',
  'chocolate-6': 'coconut-kiss.png',
  'chocolate-7': 'raspberry-romance.png'
};

for (const treat of treats) {
  if (treat.category !== 'chocolate') continue;

  const filename = chocolateWrapperImages[treat.id];
  if (filename) {
    treat.image = 'images/' + filename;
    treat.imageAlt = treat.name + ' chocolate wrapper';
  }
}

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const money = n => new Intl.NumberFormat('en-CA',{style:'currency',currency:'CAD'}).format(n/100);
const read = (k,d) => {try{return JSON.parse(localStorage.getItem(k))??d;}catch{return d;}};
const write = (k,v) => {try{localStorage.setItem(k,JSON.stringify(v));}catch{/* Browsing still works without persistence. */}};
const get = id => treats.find(t=>t.id===id);
const valid = new Set(treats.map(t=>t.id));
const bagKey = 'honeyfluff-bag-v1';
const savedKey = 'honeyfluff-favourites';
function readSaved() {
  const items = read(savedKey, []);
  return new Set(Array.isArray(items) ? items.filter(id => valid.has(id)) : []);
}
function readBag() {
  const items = read(bagKey, {});
  const entries = items && typeof items === 'object' && !Array.isArray(items) ? Object.entries(items) : [];
  return Object.fromEntries(entries.filter(([id, n]) => valid.has(id) && Number.isInteger(n) && n > 0 && n <= 99));
}
let saved = readSaved();
let bag = readBag();
const categories=new Set(treats.map(t=>t.category));
const requested=new URLSearchParams(location.search).get('category');
let category=categories.has(requested)?requested:'all',savedOnly=false,limit=12,current=null,toastTimer,initialFocus=null;
const subtotal=()=>Object.entries(bag).reduce((sum,[id,n])=>sum+get(id).price*n,0);
const imagePath=t=>/^(?:\.\/)?images\/[a-zA-Z0-9._/-]+$/.test(t.image||'')&&!t.image.includes('..')?t.image:'';
function visual(t,lazy=true){const path=imagePath(t);return `<span class="image-fallback" ${path?'hidden':''}><span>${esc(t.name)}</span><small>Honey Fluff Goods</small></span>${path?`<img class="product-img" src="${esc(path)}" alt="${esc(t.imageAlt||t.name+' packaging')}" ${lazy?'loading="lazy"':''} decoding="async" data-product-image>`:''}`;}
function toast(message){const el=$('#toast');if(!el)return;el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2800);}
function showDialog(id){const d=document.getElementById(id);if(!d)return;initialFocus=document.activeElement;$$('dialog[open]').forEach(other=>{if(other!==d)other.close();});if(!d.open)d.showModal();document.body.classList.add('modal-open');}
function card(t,featured=false){return `<article class="card"><div class="card-visual"><button class="art-open" data-open="${esc(t.id)}" aria-label="Explore ${esc(t.name)}">${visual(t)}</button>${featured?'<span class="card-tag">Fluff favourite</span>':''}<button class="save" data-save="${esc(t.id)}" aria-pressed="${saved.has(t.id)}" aria-label="${saved.has(t.id)?'Unsave':'Save'} ${esc(t.name)}">${saved.has(t.id)?'♥':'♡'}</button></div><p class="card-meta">${esc(t.category)}</p><div class="card-title"><h3><a href="#product-${esc(t.id)}" data-open="${esc(t.id)}">${esc(t.name)}</a></h3><button data-open="${esc(t.id)}" aria-label="Details for ${esc(t.name)}">↗</button></div><p class="card-description">${esc(t.description)}</p><div class="product-price-row"><div><span class="product-price">${money(t.price)}</span><span class="pack-size">${esc(t.size.replace(' · proposed',' ·'))}</span></div><button class="add-button" data-add="${esc(t.id)}">Add to bag +</button></div></article>`;}
function filtered(){const query=($('#search')?.value||'').trim().toLowerCase();const sort=$('#sort')?.value;let a=treats.filter(t=>(category==='all'||t.category===category)&&(!savedOnly||saved.has(t.id))&&`${t.name} ${t.category} ${t.description}`.toLowerCase().includes(query));if(sort==='price-low')a.sort((a,b)=>a.price-b.price);if(sort==='price-high')a.sort((a,b)=>b.price-a.price);if(sort==='name')a.sort((a,b)=>a.name.localeCompare(b.name));return a;}
function render(){const host=$('#products');if(!host)return;const items=filtered();host.innerHTML=items.slice(0,limit).map(t=>card(t)).join('');$('#empty').hidden=items.length>0;$('#count').textContent=`${Math.min(limit,items.length)} of ${items.length} ${savedOnly?'saved ':''}treats`;$('#loadMore').hidden=limit>=items.length;$$('[data-filter]').forEach(el=>{const on=el.dataset.filter===category;el.classList.toggle('active',on);el.setAttribute('aria-pressed',String(on));});}
function renderFeatured(){const el=$('#featuredProducts');if(el)el.innerHTML=config.featured.map(get).filter(Boolean).map(t=>card(t,true)).join('');}
function updateSaved(){if($('#savedCount'))$('#savedCount').textContent=saved.size;$$('[data-save]').forEach(el=>{const on=saved.has(el.dataset.save);el.setAttribute('aria-pressed',String(on));el.setAttribute('aria-label',`${on?'Unsave':'Save'} ${get(el.dataset.save)?.name||'product'}`);el.textContent=on?'♥':'♡';});if($('#savedToggle'))$('#savedToggle').setAttribute('aria-pressed',String(savedOnly));if(current&&$('#dialogSave')){$('#dialogSave').setAttribute('aria-pressed',String(saved.has(current.id)));$('#dialogSave').setAttribute('aria-label',(saved.has(current.id)?'Unsave ':'Save ')+current.name);$('#dialogSave').textContent=saved.has(current.id)?'♥':'♡';}}
function toggleSave(id){if(!valid.has(id))return;saved.has(id)?saved.delete(id):saved.add(id);write(savedKey,[...saved]);updateSaved();if(savedOnly)render();}
function invalidateDraft(){if($('#emailFallback'))$('#emailFallback').hidden=true;if($('#checkoutStatus'))$('#checkoutStatus').textContent='';}
function line(t,n){return `<article class="cart-item">${imagePath(t)?`<img src="${esc(imagePath(t))}" alt="${esc(t.name)}" data-product-image>`:'<span aria-hidden="true">✧</span>'}<div><div class="cart-item-top"><h3>${esc(t.name)}</h3><strong>${money(t.price*n)}</strong></div><small>${money(t.price)} each</small><div class="quantity-controls"><button data-quantity="${esc(t.id)}" data-delta="-1" aria-label="Remove one ${esc(t.name)}">−</button><span aria-label="Quantity">${n}</span><button data-quantity="${esc(t.id)}" data-delta="1" aria-label="Add one ${esc(t.name)}" ${n===99?'disabled':''}>+</button><button class="remove-item" data-remove="${esc(t.id)}" aria-label="Remove ${esc(t.name)} from bag">Remove</button></div></div></article>`;}
function renderBag(){const rows=Object.entries(bag),qty=rows.reduce((n,[id,q])=>n+q,0);$$('[data-cart-count]').forEach(el=>el.textContent=qty);const content=qty?rows.map(([id,n])=>line(get(id),n)).join(''):'<p class="empty-bag">Your bag is waiting for a little wonder.<br>Explore the collection and add something lovely.</p>';['#cartItems','#drawerItems'].forEach(sel=>{if($(sel))$(sel).innerHTML=content;});$$('[data-subtotal]').forEach(el=>el.textContent=money(subtotal()));if($('#checkoutButton'))$('#checkoutButton').disabled=!qty;if($('#clearCart'))$('#clearCart').hidden=!qty;if($('#drawerContinue')){$('#drawerContinue').textContent=qty?'Review your enquiry ↗':'Explore the collection ↗';$('#drawerContinue').href=qty?'order.html#basket':'order.html#shop';}if($('#checkoutSummary'))$('#checkoutSummary').innerHTML=rows.map(([id,n])=>`<div class="summary-line"><span>${n} × ${esc(get(id).name)}<small>${esc(get(id).size)}</small></span><strong>${money(get(id).price*n)}</strong></div>`).join('')+`<div class="summary-line"><strong>Product subtotal (CAD)</strong><strong>${money(subtotal())}</strong></div><p class="small-note">Estimate only. Taxes and delivery confirmed separately.</p>`;if(!qty&&$('#checkout'))$('#checkout').hidden=true;invalidateDraft();}
function saveBag(){write(bagKey,bag);renderBag();}
function add(id,n=1){if(!valid.has(id))return;const old=bag[id]||0;if(old>=99){toast('Maximum 99 per flavour.');return;}bag[id]=Math.min(99,old+n);saveBag();toast(`${get(id).name} added · ${bag[id]} in your bag`);}
function openProduct(id){const t=get(id);if(!t)return;current=t;$('#dialogTitle').textContent=t.name;$('#dialogCategory').textContent=t.category;$('#dialogDescription').textContent=t.description;$('#dialogNotes').textContent=t.line+' '+t.description;$('#dialogPrice').textContent=money(t.price)+' CAD';$('#dialogSize').textContent=t.size.replace(' · proposed',' ·');$('#dialogStorage').textContent=t.storage;$('#dialogArt').classList.remove('zoomed');$('#dialogArt').innerHTML=visual(t,false);$('#dialogQty').value=1;$('#galleryControls').innerHTML='<button data-gallery="full" aria-pressed="true">Full packaging</button><button data-gallery="detail" aria-pressed="false">Close-up</button>';const related=treats.filter(x=>x.category===t.category&&x.id!==t.id).slice(0,3);$('#relatedProducts').innerHTML=related.map(x=>`<button class="related-product" data-open="${esc(x.id)}">${imagePath(x)?`<img src="${esc(imagePath(x))}" alt="" loading="lazy" data-product-image>`:'<span aria-hidden="true">✧</span>'}<span>${esc(x.name)}<small>${money(x.price)}</small></span></button>`).join('');updateSaved();if(!$('#productDialog').open)showDialog('productDialog');else $('#productDialog').scrollTop=0;}
// Missing PNGs try other common extensions once, then show a deliberate brand placeholder.
document.addEventListener('error',event=>{const img=event.target;if(!(img instanceof HTMLImageElement)||!img.hasAttribute('data-product-image'))return;const original=img.dataset.originalSrc||img.getAttribute('src');img.dataset.originalSrc=original;const candidates=['jpg','webp','jpeg'];const attempt=Number(img.dataset.attempt||0);if(attempt<candidates.length){img.dataset.attempt=attempt+1;img.src=original.replace(/\.[^.\/]+$/,'.'+candidates[attempt]);return;}img.hidden=true;const placeholder=img.parentElement.querySelector('.image-fallback');if(placeholder)placeholder.hidden=false;},true);
document.addEventListener('click',event=>{const el=event.target.closest('button,a');if(!el)return;
 if(el.hasAttribute('data-open')){event.preventDefault();openProduct(el.dataset.open);return;}
 if(el.hasAttribute('data-add')){add(el.dataset.add);return;}
 if(el.hasAttribute('data-save')){toggleSave(el.dataset.save);return;}
 if(el.hasAttribute('data-bag-open')){showDialog('bagDialog');return;}
 if(el.hasAttribute('data-close')){document.getElementById(el.dataset.close)?.close();return;}
 if(el.hasAttribute('data-launch-open')){showDialog('launchDialog');return;}
 if(el.hasAttribute('data-gallery')){const zoom=el.dataset.gallery==='detail';$('#dialogArt').classList.toggle('zoomed',zoom);$$('[data-gallery]').forEach(x=>x.setAttribute('aria-pressed',String(x===el)));return;}
 if(el.hasAttribute('data-quantity')){const id=el.dataset.quantity;if(!valid.has(id))return;bag[id]=Math.min(99,Math.max(0,(bag[id]||0)+Number(el.dataset.delta)));if(!bag[id])delete bag[id];const drawer=!!el.closest('#bagDialog');saveBag();const root=drawer?$('#drawerItems'):$('#cartItems');const next=[...root.querySelectorAll('[data-quantity]')].find(x=>x.dataset.quantity===id&&x.dataset.delta===el.dataset.delta&&!x.disabled);(next|| (drawer?$('#bagDialog .dialog-close'):$('#checkoutButton')))?.focus();return;}
 if(el.hasAttribute('data-remove')){const drawer=!!el.closest('#bagDialog');delete bag[el.dataset.remove];saveBag();(drawer?$('#bagDialog .dialog-close'):$('#checkoutButton'))?.focus();return;}
 if(el.hasAttribute('data-filter')){category=el.dataset.filter;savedOnly=false;limit=12;updateSaved();render();return;}
});
$('#search')?.addEventListener('input',()=>{limit=12;render();});$('#sort')?.addEventListener('change',()=>{limit=12;render();});$('#loadMore')?.addEventListener('click',()=>{const firstNew=limit;limit+=12;render();$('#products')?.children[firstNew]?.querySelector('button')?.focus({preventScroll:true});});
$('#savedToggle')?.addEventListener('click',()=>{savedOnly=!savedOnly;category='all';limit=12;$('#search').value='';updateSaved();render();});
$('#dialogAdd')?.addEventListener('click',()=>{const quantity=$('#dialogQty');if(current&&quantity.reportValidity())add(current.id,quantity.valueAsNumber);});$('#dialogSave')?.addEventListener('click',()=>{if(current)toggleSave(current.id);});
$$('dialog').forEach(d=>{d.addEventListener('close',()=>{if(!document.querySelector('dialog[open]')){document.body.classList.remove('modal-open');if(initialFocus?.isConnected)initialFocus.focus();}if(d.id==='launchDialog')write('honeyfluff-launch-dismissed',Date.now());});d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close();});});
function closeMenu(){$('#navigation')?.classList.remove('open');$('#menu')?.setAttribute('aria-expanded','false');}
$('#menu')?.addEventListener('click',()=>{const on=$('#navigation').classList.toggle('open');$('#menu').setAttribute('aria-expanded',String(on));});$('#navigation')?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});matchMedia('(min-width:761px)').addEventListener('change',closeMenu);
window.addEventListener('storage', event => {
  if (event.key === bagKey || event.key === null) {
    bag = readBag();
    renderBag();
  }
  if (event.key === savedKey || event.key === null) {
    saved = readSaved();
    updateSaved();
    if (savedOnly) render();
  }
});
function draft(subject,body){return `mailto:${config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;}
$('#launchForm')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;$('#launchEmailLink').href=draft('Honey Fluff launch updates',`Please send launch updates to ${f.elements.email.value.trim()}.\nI consent to launch updates by email and understand I can ask to stop. Please confirm my request.`);$('#launchEmailLink').hidden=false;$('#launchStatus').textContent='Your draft is ready. Open your email app, review and send it.';});$('#launchForm')?.addEventListener('input',()=>{$('#launchEmailLink').hidden=true;$('#launchStatus').textContent='';});
// Wait for real browsing, then offer launch updates once. No interruption on arrival.
if(document.body.dataset.page==='index'){const started=Date.now();let offered=false;window.addEventListener('scroll',()=>{const dismissed=Number(read('honeyfluff-launch-dismissed',0));if(!offered&&Date.now()-started>45000&&window.scrollY>document.documentElement.scrollHeight*.35&&Date.now()-dismissed>7*86400000&&!document.querySelector('dialog[open]')){offered=true;showDialog('launchDialog');}},{passive:true});}
$('#checkoutButton')?.addEventListener('click',()=>{if(!Object.keys(bag).length)return;renderBag();$('#checkout').hidden=false;$('#checkout').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'instant':'smooth'});$('#customerName')?.focus({preventScroll:true});});$('#clearCart')?.addEventListener('click',()=>{bag={};saveBag();toast('Your bag has been cleared.');});
$$('input[name=fulfilment]').forEach(input=>input.addEventListener('change',()=>{const delivery=$('input[name=fulfilment]:checked')?.value==='Delivery';$('#deliveryAreaField').hidden=!delivery;$('#deliveryArea').required=delivery;$('#deliveryArea').setCustomValidity('');invalidateDraft();}));
function requireText(field, message) {
  field.setCustomValidity(field.value.trim() ? '' : message);
  field.reportValidity();
  return field.validity.valid;
}
function clearFieldError(event) {
  event.target.setCustomValidity?.('');
}
if($('#preferredDate')){const d=new Date();$('#preferredDate').min=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
$('#checkoutForm')?.addEventListener('input', event => {clearFieldError(event);invalidateDraft();});
$('#checkoutForm')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(!Object.keys(bag).length){toast('Add a treat first.');return;}if(!f.reportValidity() || !requireText(f.elements.customerName,'Enter your name.'))return;if(f.elements.fulfilment.value==='Delivery' && !requireText(f.elements.deliveryArea,'Enter your neighbourhood or postal code.'))return;const v=new FormData(f);const lines=['Hello Honey Fluff! I would like to enquire about:',...Object.entries(bag).map(([id,n])=>`${n} × ${get(id).name} (${get(id).size}) — ${money(get(id).price*n)} CAD`),'',`Estimated product subtotal: ${money(subtotal())} CAD`,'Please confirm taxes, delivery and final total.','',`Name: ${v.get('customerName')}`,`Email: ${v.get('customerEmail')}`,`Phone: ${v.get('customerPhone')||'Not provided'}`,`Fulfilment: ${v.get('fulfilment')}`,v.get('fulfilment')==='Delivery'?`Area/postal code: ${v.get('deliveryArea')}`:'',`Date: ${v.get('preferredDate')||'Flexible'}`,`Notes: ${v.get('orderNotes')||'None'}`,'','I understand this is an enquiry, not a confirmed order. Please confirm availability, ingredients/allergens, pack sizes, final pricing and pickup/delivery arrangements.'];const body=lines.join('\n');$('#enquiryText').value=body;$('#orderEmailLink').href=draft('Honey Fluff order enquiry',body);$('#emailFallback').hidden=false;$('#checkoutStatus').textContent='Your enquiry is ready. Open your email app or copy the text, then review and send it. Nothing has been sent or charged.';});
$('#copyEnquiry')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#enquiryText').value);toast('Enquiry copied. Paste it into your email.');}catch{$('#enquiryText').focus();$('#enquiryText').select();toast('Select and copy your enquiry.');}});
// Review journal uses its own gallery, so product rendering cannot overwrite it.
$$('[data-review-photo]').forEach(img=>{const extensions=['png','jpg','webp','jpeg'];let n=1;const retry=()=>{if(n<extensions.length)img.src=`images/review-${img.dataset.reviewPhoto}.${extensions[n++]}`;else img.hidden=true;};img.addEventListener('error',retry);if(img.complete&&!img.naturalWidth)retry();});
$('#srFeedback')?.addEventListener('submit',e=>{e.preventDefault();const f=e.currentTarget;if(!f.reportValidity() || !requireText(f.elements.name,'Enter your name.') || !requireText(f.elements.message,'Enter your story.'))return;const v=new FormData(f);const body=['Hello Honey Fluff!','',`Name: ${String(v.get('name')).trim()}`,`Treat: ${String(v.get('flavour')).trim()||'Not specified'}`,'',String(v.get('message')).trim(),'',v.get('permission')?'You may publish my feedback and first name on your website.':'Please keep this feedback private. I have not given permission to publish it.'].join('\n');$('#srEmail').href=draft('My Honey Fluff feedback',body);$('#srDraftText').value=body;$('#srDraft').hidden=false;$('#srStatus').textContent='Your draft is ready. Open your email app or copy the text, then review and send it.';});$('#srFeedback')?.addEventListener('input',event=>{clearFieldError(event);$('#srDraft').hidden=true;$('#srStatus').textContent='';});
if($('#year'))$('#year').textContent=new Date().getFullYear();
render();renderFeatured();renderBag();updateSaved();
})();
