'use strict';
(() => {
 const API='https://honey-fluff-sweet-reviews.valiantblimp.chatgpt.site';
 const $=id=>document.getElementById(id),form=$('publicReviewForm'),list=$('reviewList'),status=$('reviewsStatus');
 let reviews=[],cursor=null,loading=false,busy=false,photoURL=null,pending=null;
 let own={};try{own=JSON.parse(localStorage.getItem('honeyfluff-review-ownership-v1')||'{}');if(!own||typeof own!=='object'||Array.isArray(own))own={};}catch{own={};}
 function saveOwn(){try{localStorage.setItem('honeyfluff-review-ownership-v1',JSON.stringify(own));return true;}catch{return false;}}
 function node(tag,text,cls){const e=document.createElement(tag);if(text!==undefined)e.textContent=text;if(cls)e.className=cls;return e;}
 async function api(path,options={}){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),25000);
  try{const response=await fetch(API+path,{...options,signal:controller.signal,cache:'no-store'});let result;try{result=await response.json();}catch{throw new Error('The review service is temporarily unavailable. Please try again.');}if(!response.ok)throw new Error(result.error||'We could not complete that request. Please try again.');return result;}
  catch(e){if(e.name==='AbortError')throw new Error('The connection timed out. Please try again; your form is still here.');if(e instanceof TypeError)throw new Error('We couldn’t reach the review service. Check your connection and try again.');throw e;}finally{clearTimeout(timer);}
 }
 function render(){
  list.replaceChildren();reviews.sort((a,b)=>b.createdAt.localeCompare(a.createdAt));
  const rating=$('reviewFilter').value,visible=reviews.filter(r=>rating==='all'||String(r.rating)===rating);
  for(const r of visible){
   const card=node('article',undefined,'community-review');card.id='review-'+r.id;card.tabIndex=-1;
   const top=node('div',undefined,'review-card-top'),person=node('div',undefined,'review-person'),avatar=node('span',r.name.slice(0,1).toUpperCase(),'review-avatar');avatar.setAttribute('aria-hidden','true');
   const author=node('div');author.append(node('strong',r.name,'review-name'));const time=node('time',new Date(r.createdAt).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}),'review-date');time.dateTime=r.createdAt;author.append(time);person.append(avatar,author);
   const stars=node('span','★'.repeat(r.rating)+'☆'.repeat(5-r.rating),'review-stars');stars.setAttribute('aria-label',r.rating+' out of 5 stars');top.append(person,stars);card.append(top);
   if(r.title)card.append(node('h3',r.title));card.append(node('p',r.message,'review-body'));
   if(r.product)card.append(node('span',r.product,'review-product'));
   if(r.photo&&/^\/photos\/[a-f0-9-]{36}$/.test(r.photo)){const img=node('img',undefined,'review-photo');img.src=API+r.photo;img.alt='Review photo shared by '+r.name;img.loading='lazy';card.append(img);}
   if(typeof own[r.id]==='string'){const remove=node('button','Remove my review','review-own-remove');remove.type='button';remove.addEventListener('click',async()=>{
    if(!confirm('Remove your review and its photo from the public page?'))return;remove.disabled=true;
    try{await api('/reviews/'+r.id,{method:'DELETE',headers:{Authorization:'Bearer '+own[r.id]}});reviews=reviews.filter(x=>x.id!==r.id);delete own[r.id];saveOwn();render();status.textContent='Your review has been removed.';status.focus();}catch(e){status.textContent=e.message;remove.disabled=false;}
   });card.append(remove);}
   list.append(card);
  }
  $('reviewEmpty').hidden=visible.length>0||loading;
  if(!visible.length){$('reviewEmpty').querySelector('h3').textContent=rating==='all'?'The first story could be yours.':'No '+rating+'-star reviews in this set.';$('reviewEmpty').querySelector('p').textContent=rating==='all'?'No reviews yet. Share an honest experience to start the conversation.':'Choose another rating or load more community reviews.';}
  $('reviewSummary').textContent=reviews.length?(cursor?reviews.length+' reviews loaded · More stories below.':reviews.length+' '+(reviews.length===1?'community review':'community reviews')+' · Honest experiences, shared by you.'):'A space for your honest experiences.';
  $('loadReviews').hidden=!cursor;$('loadReviews').disabled=loading;
 }
 async function load(reset=false){
  if(loading)return;loading=true;status.textContent='Loading community reviews…';$('reviewEmpty').hidden=true;$('refreshReviews').disabled=true;$('loadReviews').disabled=true;
  try{const result=await api('/reviews'+(!reset&&cursor?'?cursor='+encodeURIComponent(cursor):''));reviews=reset?result.reviews:[...new Map([...reviews,...result.reviews].map(r=>[r.id,r])).values()];cursor=result.cursor;status.textContent='';}
  catch(e){status.textContent=e.message;$('reviewEmpty').hidden=true;loading=false;$('refreshReviews').disabled=false;$('loadReviews').disabled=false;return;}
  loading=false;$('refreshReviews').disabled=false;render();
 }
 function updateStars(){const n=Number(form.elements.rating.value);document.querySelectorAll('.rating-choice').forEach((el,i)=>el.classList.toggle('is-filled',i<n));$('ratingCaption').textContent=n?n+' out of 5 stars':'Select 1–5 stars';}
 function clearPhoto(){if(photoURL)URL.revokeObjectURL(photoURL);photoURL=null;$('reviewPhoto').value='';$('photoPreview').hidden=true;$('photoPreviewImage').removeAttribute('src');}
 $('reviewPhoto').addEventListener('change',()=>{const file=$('reviewPhoto').files[0];if(photoURL)URL.revokeObjectURL(photoURL);$('photoPreview').hidden=true;if(!file)return;if(file.size>3*1024*1024||!['image/jpeg','image/png','image/webp'].includes(file.type)){clearPhoto();$('reviewFormStatus').dataset.state='error';$('reviewFormStatus').textContent='Choose a JPG, PNG or WebP photo smaller than 3 MB.';return;}photoURL=URL.createObjectURL(file);$('photoPreviewImage').src=photoURL;$('photoPreview').hidden=false;$('reviewFormStatus').textContent='';});
 $('removePhoto').addEventListener('click',()=>{clearPhoto();pending=null;});
 form.addEventListener('input',event=>{pending=null;event.target.setCustomValidity?.('');$('reviewCharacters').textContent=$('reviewMessage').value.length;if(event.target.name==='rating')updateStars();});
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(busy||!form.reportValidity())return;
  for(const [id,min]of [['reviewName',1],['reviewMessage',10]]){const field=$(id);if(field.value.trim().length<min){field.setCustomValidity(min===1?'Enter your name.':'Write at least 10 characters about your experience.');field.reportValidity();return;}}
  pending??={id:crypto.randomUUID(),token:crypto.randomUUID()};const submission=pending,data=new FormData(form);data.set('id',submission.id);data.set('deleteToken',submission.token);
  busy=true;const controls=[...form.elements];controls.forEach(e=>e.disabled=true);$('reviewFormStatus').dataset.state='';$('reviewFormStatus').textContent='Posting your review…';
  try{const result=await api('/reviews',{method:'POST',body:data});own[result.review.id]=submission.token;const persisted=saveOwn();reviews=[result.review,...reviews.filter(r=>r.id!==result.review.id)];$('reviewFilter').value='all';form.reset();clearPhoto();pending=null;updateStars();$('reviewCharacters').textContent='0';render();$('reviewFormStatus').dataset.state='success';$('reviewFormStatus').textContent='Your review is live. Thank you for sharing!'+(persisted?'':' Browser storage is unavailable, so keep this page open if you need to remove your review.');const posted=$('review-'+result.review.id);posted.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'center'});posted.focus({preventScroll:true});}
  catch(e){$('reviewFormStatus').dataset.state='error';$('reviewFormStatus').textContent=e.message;}
  finally{busy=false;controls.forEach(e=>e.disabled=false);}
 });
 $('reviewFilter').addEventListener('change',render);$('refreshReviews').addEventListener('click',()=>load(true));$('loadReviews').addEventListener('click',()=>load());
 for(const product of window.HF_PRODUCTS||[]){const option=node('option');option.value=product.name;$('reviewProducts').append(option);}
 load(true);
})();
