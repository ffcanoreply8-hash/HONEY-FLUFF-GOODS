'use strict';
/* Honey Fluff Goods — GitHub Pages edition. No payment or form backend required.
   All enquiries use a customer-reviewed email draft. Nothing sends automatically. */
const HF_CONFIG = {
  email: 'sonnyzadeh219@gmail.com',
  popupDismissDays: 7,
  featuredIds: ['cloud', 'cookie', 'chocolate-2', 'brownie-2'],
  // Publish only authentic reviews, with permission. Example shape:
  // {name:'First name', text:'Customer-approved words', image:'images/review-1.webp', imageAlt:'Description'}
  reviews: []
};
const treats = window.HF_PRODUCTS || [];
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const money = cents => new Intl.NumberFormat('en-CA',{style:'currency',currency:'CAD'}).format(cents / 100);
const escapeHTML = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeRead = (key,fallback) => {try {return JSON.parse(localStorage.getItem(key)) ?? fallback;} catch {return fallback;}};
const safeWrite = (key,value) => {try {localStorage.setItem(key,JSON.stringify(value));} catch {/* State remains available for this visit. */}};
const validIds = new Set(treats.map(t=>t.id));
const storedSaved = safeRead('honeyfluff-favourites',[]);
let saved = new Set(Array.isArray(storedSaved) ? storedSaved.filter(id=>validIds.has(id)) : []);
const storedBag = safeRead('honeyfluff-bag-v1',{});
let bag = Object.fromEntries(Object.entries(storedBag && typeof storedBag==='object' && !Array.isArray(storedBag) ? storedBag : {}).filter(([id,n])=>validIds.has(id)&&Number.isInteger(n)&&n>0&&n<=99));
let category='all', savedOnly=false, current=null, toastTimer;
const getTreat = id => treats.find(t=>t.id===id);
const subtotal = () => Object.entries(bag).reduce((sum,[id,n])=>sum+getTreat(id).price*n,0);
function art(t){
  // Supply a relative image path in products.js to replace an illustration.
  const imagePath=String(t.image||'');
  if(imagePath && /^(?:images\/|\.\/images\/)/.test(imagePath) && !imagePath.includes('..')) return `<img class="review-image" src="${escapeHTML(imagePath)}" alt="${escapeHTML(t.imageAlt||t.name)}" loading="lazy">`;
  return `<span class="treat ${escapeHTML(t.art)}" style="--flavour:${escapeHTML(t.accent||'#f9c7de')}" aria-hidden="true"></span>`;
}
function toast(message){const el=$('#toast');if(!el)return;el.textContent=message;el.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('visible'),2600);}
function card(t,featured=false){return `<article class="card">${featured?'<span class="feature-tag">Fluff pick · launch concept</span>':''}<div class="art-wrap"><button type="button" class="art-open" data-open="${t.id}" aria-label="Explore ${escapeHTML(t.name)}"><span class="product-art" style="--tone:${t.tone}">${art(t)}</span></button><button type="button" class="save" data-save="${t.id}" aria-pressed="${saved.has(t.id)}" aria-label="${saved.has(t.id)?'Unsave':'Save'} ${escapeHTML(t.name)}">${saved.has(t.id)?'♥':'♡'}</button></div><p class="card-meta">${escapeHTML(t.category)} · flavour concept</p><div class="card-title"><h3>${escapeHTML(t.name)}</h3><button type="button" class="detail-link" data-open="${t.id}" aria-label="Product details for ${escapeHTML(t.name)}">↗</button></div><p class="card-description">${escapeHTML(t.description)}</p><div class="product-price-row"><div><span class="product-price">${money(t.price)}</span><span class="pack-size">${escapeHTML(t.size)}</span></div><div class="card-actions"><button type="button" class="add-button" data-add="${t.id}" aria-label="Add ${escapeHTML(t.name)} to bag">Add to bag +</button></div></div><p class="card-note">Suggested launch price · CAD</p></article>`;}
function render(){
 const host=$('#products');if(!host)return;
 const query=($('#search')?.value||'').trim().toLowerCase();
 const items=treats.filter(t=>(category==='all'||t.category===category)&&(!savedOnly||saved.has(t.id))&&`${t.name} ${t.category} ${t.description}`.toLowerCase().includes(query));
 host.innerHTML=items.map(t=>card(t)).join('');
 if($('#empty'))$('#empty').hidden=items.length>0;
 if($('#count'))$('#count').textContent=`${items.length} ${savedOnly?'saved ':''}flavour concepts shown`;
}
function renderFeatured(){if($('#featuredProducts'))$('#featuredProducts').innerHTML=HF_CONFIG.featuredIds.map(getTreat).filter(Boolean).map(t=>card(t,true)).join('');}
function updateSaved(){
 safeWrite('honeyfluff-favourites',[...saved]);if($('#savedCount'))$('#savedCount').textContent=saved.size;
 $$('[data-save]').forEach(b=>{const yes=saved.has(b.dataset.save);b.setAttribute('aria-pressed',String(yes));b.setAttribute('aria-label',`${yes?'Unsave':'Save'} ${getTreat(b.dataset.save).name}`);b.textContent=yes?'♥':'♡';});
 if(current&&$('#dialogSave')){$('#dialogSave').textContent=saved.has(current.id)?'Saved favourite ♥':'Save favourite ♡';$('#dialogSave').setAttribute('aria-pressed',String(saved.has(current.id)));}
}
function toggleSave(id){if(!validIds.has(id))return;saved.has(id)?saved.delete(id):saved.add(id);updateSaved();if(savedOnly)render();}
function syncFilters(){$$('[data-filter]').forEach(b=>{const on=b.dataset.filter===category;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});}
function cartLines(){return Object.entries(bag).map(([id,n])=>({t:getTreat(id),n}));}
function renderBag(){
 safeWrite('honeyfluff-bag-v1',bag);
 const quantity=Object.values(bag).reduce((a,b)=>a+b,0);$$('[data-cart-count]').forEach(el=>el.textContent=quantity);
 const host=$('#cartItems');
 if(host)host.innerHTML=quantity?cartLines().map(({t,n})=>`<div class="cart-item"><div class="cart-item-top"><h3>${escapeHTML(t.name)}</h3><strong>${money(t.price*n)}</strong></div><small>${escapeHTML(t.size)} · ${money(t.price)} each</small><div class="quantity-controls"><button type="button" data-quantity="${t.id}" data-delta="-1" aria-label="Remove one ${escapeHTML(t.name)}">−</button><span aria-label="Quantity ${n}">${n}</span><button type="button" data-quantity="${t.id}" data-delta="1" aria-label="Add one ${escapeHTML(t.name)}" ${n>=99?'disabled':''}>+</button><button type="button" class="remove-item" data-remove="${t.id}">Remove</button></div></div>`).join(''):'<p class="empty-bag">Your bag is waiting for a little wonder. Add a treat to start your shortlist.</p>';
 if($('#cartSubtotal'))$('#cartSubtotal').textContent=money(subtotal());
 if($('#checkoutButton'))$('#checkoutButton').disabled=quantity===0;
 if($('#clearCart'))$('#clearCart').hidden=quantity===0;
 if($('#checkoutSummary'))$('#checkoutSummary').innerHTML=cartLines().map(({t,n})=>`<div class="summary-line"><span>${n} × ${escapeHTML(t.name)}<small>${escapeHTML(t.size)}</small></span><strong>${money(t.price*n)}</strong></div>`).join('')+`<div class="summary-line"><strong>Product subtotal (CAD)</strong><strong>${money(subtotal())}</strong></div><p class="small-note">Taxes and delivery, if applicable, are confirmed separately. Suggested prices only.</p>`;
 if(!quantity&&$('#checkout'))$('#checkout').hidden=true;
 // An already-prepared draft must never silently represent a changed basket.
 if($('#emailFallback'))$('#emailFallback').hidden=true;
 if($('#checkoutStatus'))$('#checkoutStatus').textContent='';
}
function add(id){if(!validIds.has(id))return;if((bag[id]||0)>=99){toast('Maximum 99 per flavour in an enquiry.');return;}bag[id]=(bag[id]||0)+1;renderBag();toast(`${getTreat(id).name} added to your bag`);}
function openProduct(id){
 const t=getTreat(id);const dialog=$('#productDialog');if(!t||!dialog)return;current=t;
 $('#dialogTitle').textContent=t.name;$('#dialogCategory').textContent=t.category+' / FLAVOUR CONCEPT';$('#dialogDescription').textContent=t.description;$('#dialogPrice').textContent=money(t.price)+' CAD · suggested';$('#dialogSize').textContent=t.size;$('#dialogStorage').textContent=t.storage;$('#dialogArt').style.setProperty('--tone',t.tone);$('#dialogArt').innerHTML=art(t);updateSaved();dialog.showModal();document.body.classList.add('modal-open');
}
document.addEventListener('click',event=>{
 const addButton=event.target.closest('[data-add]');if(addButton){add(addButton.dataset.add);return;}
 const heart=event.target.closest('[data-save]');if(heart){const id=heart.dataset.save;toggleSave(id);if(!heart.isConnected)$('#savedToggle')?.focus();return;}
 const open=event.target.closest('[data-open]');if(open){openProduct(open.dataset.open);return;}
 const close=event.target.closest('[data-close]');if(close){document.getElementById(close.dataset.close)?.close();return;}
 const quantity=event.target.closest('[data-quantity]');if(quantity){const id=quantity.dataset.quantity;if(!validIds.has(id))return;bag[id]=Math.min(99,Math.max(0,(bag[id]||0)+Number(quantity.dataset.delta)));if(!bag[id])delete bag[id];renderBag();const next=$$('[data-quantity]').find(b=>b.dataset.quantity===id&&b.dataset.delta===quantity.dataset.delta);(next||$('#checkoutButton')||$('#cartItems'))?.focus();return;}
 const remove=event.target.closest('[data-remove]');if(remove){delete bag[remove.dataset.remove];renderBag();$('#clearCart')?.focus();return;}
 if(event.target.closest('[data-launch-open]')){$('#launchDialog')?.showModal();document.body.classList.add('modal-open');return;}
});
$$('[data-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;savedOnly=false;$('#savedToggle')?.setAttribute('aria-pressed','false');if($('#savedStatus'))$('#savedStatus').textContent='';syncFilters();render();}));
$('#search')?.addEventListener('input',render);
$('#dialogAdd')?.addEventListener('click',()=>{if(current)add(current.id);});
$('#dialogSave')?.addEventListener('click',()=>{if(current)toggleSave(current.id);});
$('#savedToggle')?.setAttribute('aria-pressed','false');
$('#savedToggle')?.addEventListener('click',()=>{savedOnly=!savedOnly;category='all';if($('#search'))$('#search').value='';syncFilters();$('#savedToggle').setAttribute('aria-pressed',String(savedOnly));$('#savedStatus').textContent=savedOnly?'Showing your saved treats.':'Showing the full collection.';render();$('#collection')?.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
function closeMenu(){$('#navigation')?.classList.remove('open');$('#menu')?.setAttribute('aria-expanded','false');}
$('#menu')?.addEventListener('click',()=>{const open=$('#navigation').classList.toggle('open');$('#menu').setAttribute('aria-expanded',String(open));});
$('#navigation')?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#navigation')?.classList.contains('open')){closeMenu();$('#menu').focus();}});
matchMedia('(min-width: 721px)').addEventListener('change',closeMenu);
$$('dialog').forEach(dialog=>{
 dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('modal-open');if(dialog.id==='productDialog')current=null;if(dialog.id==='launchDialog')safeWrite('honeyfluff-launch-dismissed',Date.now());});
 dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();});
});
function emailDraft(subject,body){return `mailto:${HF_CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;}
$('#launchEmail')?.addEventListener('input',()=>{if($('#launchEmailLink'))$('#launchEmailLink').hidden=true;if($('#launchStatus'))$('#launchStatus').textContent='';});
$('#launchForm')?.addEventListener('submit',event=>{
 event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const email=form.elements.email.value.trim();
 $('#launchStatus').textContent='Your request is ready. Open your email app below, then review and send it. No subscription has been submitted here.';
 $('#launchEmailLink').hidden=false;$('#launchEmailLink').href=emailDraft('Honey Fluff launch updates request',`Please send Honey Fluff launch updates to: ${email}\n\nI consent to launch updates by email and understand I can ask to stop at any time. Please confirm my request.\n`);
});
$('#checkoutButton')?.addEventListener('click',()=>{if(!Object.keys(bag).length)return;$('#checkout').hidden=false;renderBag();$('#checkout').scrollIntoView({behavior:'instant'});$('#customerName').focus({preventScroll:true});});
$('#clearCart')?.addEventListener('click',()=>{bag={};renderBag();toast('Your bag has been cleared.');});
$$('input[name=fulfilment]').forEach(choice=>choice.addEventListener('change',()=>{const delivery=$('input[name=fulfilment]:checked').value==='Delivery';$('#deliveryAreaField').hidden=!delivery;$('#deliveryArea').required=delivery;if($('#emailFallback'))$('#emailFallback').hidden=true;}));
if($('#preferredDate')){const d=new Date();$('#preferredDate').min=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
$('#checkoutForm')?.addEventListener('input',()=>{if($('#emailFallback'))$('#emailFallback').hidden=true;if($('#checkoutStatus'))$('#checkoutStatus').textContent='';});
$('#checkoutForm')?.addEventListener('submit',event=>{
 event.preventDefault();const form=event.currentTarget;if(!Object.keys(bag).length){toast('Add a treat to your bag first.');return;}if(!form.reportValidity())return;
 const values=new FormData(form);const body=[`Hello Honey Fluff! I'd like to enquire about:`,...cartLines().map(({t,n})=>`${n} × ${t.name} (${t.size}) — ${money(t.price*n)} CAD`),'',`Suggested product subtotal: ${money(subtotal())} CAD`,'Applicable taxes and delivery fees are not included. Please confirm the final total.','',`Name: ${values.get('customerName')}`,`Email: ${values.get('customerEmail')}`,`Phone: ${values.get('customerPhone')||'Not provided'}`,`Preferred fulfilment: ${values.get('fulfilment')}`,values.get('fulfilment')==='Delivery'?`Area/postal code: ${values.get('deliveryArea')}`:'',`Preferred date: ${values.get('preferredDate')||'Flexible'}`,`Notes: ${values.get('orderNotes')||'None'}`,'','I understand this is an enquiry, not a confirmed order. Please confirm availability, ingredients/allergens, pack sizes, pricing, pickup/delivery, and payment arrangements.'].filter(v=>v!==null).join('\n');
 $('#enquiryText').value=body;$('#emailFallback').hidden=false;$('#checkoutStatus').textContent='Your enquiry is ready below. Open your email app or copy the request, then review and send it. Nothing has been sent or charged by this website.';
 $('#orderEmailLink').href=emailDraft('Honey Fluff order enquiry',body);
});
$('#copyEnquiry')?.addEventListener('click',async()=>{try{await navigator.clipboard.writeText($('#enquiryText').value);toast('Enquiry copied. Paste it into your email.');}catch{$('#enquiryText').focus();$('#enquiryText').select();toast('Select and copy the enquiry text.');}});
function renderReviews(){const host=$('#reviewGrid');if(!host)return;
 if(HF_CONFIG.reviews.length){host.innerHTML=HF_CONFIG.reviews.map(r=>{const path=String(r.image||'');const valid=/^(?:images\/|\.\/images\/)/.test(path)&&!path.includes('..');return `<article class="review-card">${valid?`<img class="review-image" src="${escapeHTML(path)}" alt="${escapeHTML(r.imageAlt||'Customer photo shared with permission')}" loading="lazy">`:'<div class="review-placeholder" aria-hidden="true"><span>✧</span></div>'}<div class="review-copy"><blockquote>${escapeHTML(r.text)}</blockquote><cite>${escapeHTML(r.name)}</cite></div></article>`;}).join('');return;}
 host.innerHTML=[['First taste.','A place for your first-scoop photo and honest words.'],['Little celebrations.','A place for the treats that make an ordinary day feel special.'],['Shared sweetness.','A place for your Honey Fluff memories with your favourite people.']].map(([title,text])=>`<article class="review-card"><div class="review-placeholder" role="img" aria-label="Reserved space for a future customer photo"><span aria-hidden="true">✧</span><small>YOUR PHOTO HERE</small></div><div class="review-copy"><p class="eyebrow">FUTURE CUSTOMER STORY</p><h3>${title}</h3><p>${text}</p><p class="small-note">Awaiting a real customer review.</p></div></article>`).join('');
}
if($('#year'))$('#year').textContent=new Date().getFullYear();
$$('nav a').forEach(a=>{if(a.getAttribute('href')===(document.body.dataset.page==='order'?'order.html':document.body.dataset.page==='reviews'?'reviews.html':'index.html'))a.setAttribute('aria-current','page');});
render();renderFeatured();renderBag();updateSaved();renderReviews();
if(!document.body.dataset.page&&$('#launchDialog')){
 const dismissed=Number(safeRead('honeyfluff-launch-dismissed',0));
 if(!Number.isFinite(dismissed)||Date.now()-dismissed>HF_CONFIG.popupDismissDays*86400000)setTimeout(()=>{if(!document.querySelector('dialog[open]')){$('#launchDialog').showModal();document.body.classList.add('modal-open');}},900);
}
