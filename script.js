'use strict';
// Edit these illustrative dessert concepts when your real collection is ready.
const treats = [
 {id:'cloud',name:'Cotton Cloud',category:'ice cream',art:'ice',tone:'#e1d3ed',line:'Pink skies. Blue swirls. Pure daydream.',description:'An ice cream concept inspired by the pink-and-blue swirls at the heart of Honey Fluff. A playful centrepiece for the collection.'},
 {id:'milk',name:'Golden Hour',category:'chocolate',art:'chocolate',tone:'#e8d7c0',line:'A chocolate moment, beautifully unhurried.',description:'A milk chocolate bar concept with a warm, golden visual identity. Designed for a small moment of everyday indulgence.'},
 {id:'cookie',name:'The Cookie Crush',category:'cookies',art:'cookie',tone:'#f1d4da',line:'The familiar favourite, with a little fluff.',description:'A chocolate-chip cookie concept built around the simple joy of a classic bakery treat. Size and packaging are still being explored.'},
 {id:'berry',name:'Berry Daydream',category:'ice cream',art:'ice berry',tone:'#f2d8e1',line:'A little berry. A little daydream.',description:'A berry-inspired ice cream concept with soft pink tones and a bright, cheerful personality.'},
 {id:'rose',name:'Rose-Tinted',category:'chocolate',art:'chocolate rose',tone:'#e1d4e8',line:'Chocolate, dressed for a sweeter occasion.',description:'A chocolate bar concept with blush-pink packaging. A complementary colour story for the Honey Fluff chocolate collection.'},
 {id:'vanilla',name:'Vanilla Reverie',category:'ice cream',art:'ice vanilla',tone:'#e9e0ca',line:'Soft, simple, and wonderfully timeless.',description:'A vanilla-inspired ice cream concept for the days when a familiar favourite is exactly what you’re looking for.'}
];
const $ = s => document.querySelector(s);
let saved = new Set();
try { const stored=JSON.parse(localStorage.getItem('honeyfluff-favourites')||'[]'); if(Array.isArray(stored)) saved=new Set(stored.filter(id=>treats.some(t=>t.id===id))); } catch (_) { /* Favourites still work for this visit. */ }
let category='all',savedOnly=false,current=null,opener=null;
const art = t => `<span class="treat ${t.art}" aria-hidden="true"></span>`;
function persist(){try{localStorage.setItem('honeyfluff-favourites',JSON.stringify([...saved]));}catch(_){} $('#savedCount').textContent=saved.size;}
function render(){
 const query=$('#search').value.trim().toLowerCase();
 const items=treats.filter(t=>(category==='all'||t.category===category)&&(!savedOnly||saved.has(t.id))&&`${t.name} ${t.category} ${t.line}`.toLowerCase().includes(query));
 $('#products').innerHTML=items.map(t=>`<article class="card"><div class="art-wrap"><button class="art-open" data-open="${t.id}" aria-label="Explore ${t.name}"><span class="product-art" style="--tone:${t.tone}">${art(t)}</span></button><button class="save" data-save="${t.id}" aria-pressed="${saved.has(t.id)}" aria-label="${saved.has(t.id)?'Unsave':'Save'} ${t.name}">${saved.has(t.id)?'♥':'♡'}</button></div><p class="card-meta">${t.category} · flavour concept</p><div class="card-title"><h3>${t.name}</h3><button class="detail-link" data-open="${t.id}" aria-label="Read about ${t.name}">↗</button></div><p>${t.line}</p></article>`).join('');
 $('#empty').hidden=items.length>0;$('#count').textContent=`${items.length} ${savedOnly?'saved ':''}flavour concepts shown`;persist();
}
function save(id){saved.has(id)?saved.delete(id):saved.add(id);persist();render();if(current)updateDialogSave();}
function updateDialogSave(){const yes=saved.has(current.id);$('#dialogSave').textContent=yes?'Saved to favourites ♥':'Save favourite ♡';$('#dialogSave').setAttribute('aria-pressed',String(yes));}
$('#products').addEventListener('click',event=>{const heart=event.target.closest('[data-save]');if(heart){const id=heart.dataset.save;save(id);const replacement=document.querySelector(`[data-save="${id}"]`);if(replacement)replacement.focus();else $('#savedToggle').focus();return;}const button=event.target.closest('[data-open]');if(!button)return;current=treats.find(t=>t.id===button.dataset.open);opener={id:current.id,element:button};$('#dialogTitle').textContent=current.name;$('#dialogCategory').textContent=current.category+' / FLAVOUR CONCEPT';$('#dialogDescription').textContent=current.description;$('#dialogArt').style.setProperty('--tone',current.tone);$('#dialogArt').innerHTML=art(current);updateDialogSave();$('#productDialog').showModal();document.body.classList.add('modal-open');});
$('#dialogSave').addEventListener('click',()=>save(current.id));
$('.dialog-close').addEventListener('click',()=>$('#productDialog').close());
$('#productDialog').addEventListener('click',e=>{if(e.target!==e.currentTarget)return;const rect=e.currentTarget.getBoundingClientRect();if(e.clientX<rect.left||e.clientX>rect.right||e.clientY<rect.top||e.clientY>rect.bottom)e.currentTarget.close();});
$('#productDialog').addEventListener('close',()=>{document.body.classList.remove('modal-open');if(opener){const target=opener.element.isConnected?opener.element:document.querySelector(`[data-open="${opener.id}"]`);(target||$('#savedToggle')).focus();}current=null;});
function syncFilters(){document.querySelectorAll('[data-filter]').forEach(b=>{const selected=b.dataset.filter===category;b.classList.toggle('active',selected);b.setAttribute('aria-pressed',String(selected));});}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{category=button.dataset.filter;savedOnly=false;$('#savedToggle').setAttribute('aria-pressed','false');$('#savedStatus').textContent='';syncFilters();render();}));
$('#search').addEventListener('input',render);
$('#savedToggle').setAttribute('aria-pressed','false');
$('#savedToggle').addEventListener('click',()=>{savedOnly=!savedOnly;category='all';$('#search').value='';syncFilters();$('#savedToggle').setAttribute('aria-pressed',String(savedOnly));$('#savedStatus').textContent=savedOnly?(saved.size?'Showing your saved treats in the collection.':'No favourites yet. Tap a heart in the collection to save a treat.'):'Showing the full collection.';render();$('#collection').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});});
function closeMenu(){$('#navigation').classList.remove('open');$('#menu').setAttribute('aria-expanded','false');}
$('#menu').addEventListener('click',()=>{const open=$('#navigation').classList.toggle('open');$('#menu').setAttribute('aria-expanded',String(open));});
$('#navigation').addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&$('#navigation').classList.contains('open')){closeMenu();$('#menu').focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('header'))closeMenu();});
matchMedia('(min-width: 721px)').addEventListener('change',closeMenu);
$('#year').textContent=new Date().getFullYear();render();
