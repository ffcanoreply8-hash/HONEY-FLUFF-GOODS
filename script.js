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
treats.push(...[
  {
    "id": "ice-1",
    "name": "Pistachio Velvet",
    "category": "ice cream",
    "art": "ice",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "A little joy in every bite.",
    "description": "Pistachio Velvet is a ice cream flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "ice-2",
    "name": "Salted Caramel Drift",
    "category": "ice cream",
    "art": "ice",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "Your next sweet daydream.",
    "description": "Salted Caramel Drift is a ice cream flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "ice-3",
    "name": "Midnight Cocoa",
    "category": "ice cream",
    "art": "ice",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "Made for a colourful escape.",
    "description": "Midnight Cocoa is a ice cream flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "ice-4",
    "name": "Mango Solstice",
    "category": "ice cream",
    "art": "ice",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "A soft spot for something sweet.",
    "description": "Mango Solstice is a ice cream flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "ice-5",
    "name": "Mint Moon",
    "category": "ice cream",
    "art": "ice",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A little twist on a favourite.",
    "description": "Mint Moon is a ice cream flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "ice-6",
    "name": "Coffee Cloud",
    "category": "ice cream",
    "art": "ice",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "Sweet moments start here.",
    "description": "Coffee Cloud is a ice cream flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "chocolate-1",
    "name": "Midnight Truffle",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "A little joy in every bite.",
    "description": "Midnight Truffle is a chocolate flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "chocolate-2",
    "name": "Pistachio Silk",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "Your next sweet daydream.",
    "description": "Pistachio Silk is a chocolate flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "chocolate-3",
    "name": "Caramel Gleam",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "Made for a colourful escape.",
    "description": "Caramel Gleam is a chocolate flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "chocolate-4",
    "name": "Hazelnut Halo",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A soft spot for something sweet.",
    "description": "Hazelnut Halo is a chocolate flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "chocolate-5",
    "name": "Orange Afterglow",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "A little twist on a favourite.",
    "description": "Orange Afterglow is a chocolate flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "chocolate-6",
    "name": "Coconut Kiss",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "Sweet moments start here.",
    "description": "Coconut Kiss is a chocolate flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "chocolate-7",
    "name": "Raspberry Romance",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "A bright idea for your treat break.",
    "description": "Raspberry Romance is a chocolate flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-1",
    "name": "Brown Butter Bliss",
    "category": "cookies",
    "art": "cookie",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "A little joy in every bite.",
    "description": "Brown Butter Bliss is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-2",
    "name": "Double Cocoa Crush",
    "category": "cookies",
    "art": "cookie",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "Your next sweet daydream.",
    "description": "Double Cocoa Crush is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-3",
    "name": "White Chocolate Raspberry",
    "category": "cookies",
    "art": "cookie",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "Made for a colourful escape.",
    "description": "White Chocolate Raspberry is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-4",
    "name": "Pistachio Crumble",
    "category": "cookies",
    "art": "cookie",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "A soft spot for something sweet.",
    "description": "Pistachio Crumble is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-5",
    "name": "Salted Caramel Cookie",
    "category": "cookies",
    "art": "cookie",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "A little twist on a favourite.",
    "description": "Salted Caramel Cookie is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-6",
    "name": "Birthday Confetti",
    "category": "cookies",
    "art": "cookie",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "Sweet moments start here.",
    "description": "Birthday Confetti is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-7",
    "name": "Cinnamon Sugar Hug",
    "category": "cookies",
    "art": "cookie",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "A bright idea for your treat break.",
    "description": "Cinnamon Sugar Hug is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "cookie-8",
    "name": "Cookies & Cream Dream",
    "category": "cookies",
    "art": "cookie",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "Meet your new happy thought.",
    "description": "Cookies & Cream Dream is a cookies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-1",
    "name": "Peachy Clouds",
    "category": "gummies",
    "art": "gummy",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "A little joy in every bite.",
    "description": "Peachy Clouds is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-2",
    "name": "Strawberry Skies",
    "category": "gummies",
    "art": "gummy",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "Your next sweet daydream.",
    "description": "Strawberry Skies is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-3",
    "name": "Watermelon Waves",
    "category": "gummies",
    "art": "gummy",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "Made for a colourful escape.",
    "description": "Watermelon Waves is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-4",
    "name": "Mango Tango",
    "category": "gummies",
    "art": "gummy",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "A soft spot for something sweet.",
    "description": "Mango Tango is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-5",
    "name": "Blueberry Bliss",
    "category": "gummies",
    "art": "gummy",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "A little twist on a favourite.",
    "description": "Blueberry Bliss is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-6",
    "name": "Sour Cherry Pop",
    "category": "gummies",
    "art": "gummy",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "Sweet moments start here.",
    "description": "Sour Cherry Pop is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-7",
    "name": "Pineapple Paradise",
    "category": "gummies",
    "art": "gummy",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "A bright idea for your treat break.",
    "description": "Pineapple Paradise is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-8",
    "name": "Pink Lemonade Drops",
    "category": "gummies",
    "art": "gummy",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "Meet your new happy thought.",
    "description": "Pink Lemonade Drops is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "gummy-9",
    "name": "Rainbow Daydream",
    "category": "gummies",
    "art": "gummy",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "A flavour worth dreaming about.",
    "description": "Rainbow Daydream is a gummies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-1",
    "name": "Classic Fudge",
    "category": "brownies",
    "art": "brownie",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A little joy in every bite.",
    "description": "Classic Fudge is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-2",
    "name": "Salted Caramel Swirl",
    "category": "brownies",
    "art": "brownie",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "Your next sweet daydream.",
    "description": "Salted Caramel Swirl is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-3",
    "name": "Raspberry Truffle",
    "category": "brownies",
    "art": "brownie",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "Made for a colourful escape.",
    "description": "Raspberry Truffle is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-4",
    "name": "Walnut Wonder",
    "category": "brownies",
    "art": "brownie",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "A soft spot for something sweet.",
    "description": "Walnut Wonder is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-5",
    "name": "Cookies & Cream Brownie",
    "category": "brownies",
    "art": "brownie",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "A little twist on a favourite.",
    "description": "Cookies & Cream Brownie is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-6",
    "name": "Peanut Butter Ripple",
    "category": "brownies",
    "art": "brownie",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "Sweet moments start here.",
    "description": "Peanut Butter Ripple is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-7",
    "name": "Espresso Midnight",
    "category": "brownies",
    "art": "brownie",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "A bright idea for your treat break.",
    "description": "Espresso Midnight is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-8",
    "name": "White Chocolate Marble",
    "category": "brownies",
    "art": "brownie",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "Meet your new happy thought.",
    "description": "White Chocolate Marble is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "brownie-9",
    "name": "Pistachio Fudge",
    "category": "brownies",
    "art": "brownie",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "A flavour worth dreaming about.",
    "description": "Pistachio Fudge is a brownies flavour concept for the Honey Fluff collection. Imagined as a playful addition to your next sweet moment. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-1",
    "name": "Strawberry Cloud Soda",
    "category": "drinks",
    "art": "drink",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "A little joy in every sip.",
    "description": "Strawberry Cloud Soda is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-2",
    "name": "Peach Sunset Fizz",
    "category": "drinks",
    "art": "drink",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "Your next sweet daydream.",
    "description": "Peach Sunset Fizz is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-3",
    "name": "Blue Raspberry Breeze",
    "category": "drinks",
    "art": "drink",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "Made for a colourful escape.",
    "description": "Blue Raspberry Breeze is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-4",
    "name": "Mango Cream Dream",
    "category": "drinks",
    "art": "drink",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "A soft spot for something sweet.",
    "description": "Mango Cream Dream is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-5",
    "name": "Pink Lemonade Spark",
    "category": "drinks",
    "art": "drink",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "A little twist on a favourite.",
    "description": "Pink Lemonade Spark is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-6",
    "name": "Vanilla Cream Float",
    "category": "drinks",
    "art": "drink",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "Sweet moments start here.",
    "description": "Vanilla Cream Float is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-7",
    "name": "Cherry Moon Soda",
    "category": "drinks",
    "art": "drink",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "A bright idea for your treat break.",
    "description": "Cherry Moon Soda is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-8",
    "name": "Pineapple Coconut Cooler",
    "category": "drinks",
    "art": "drink",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "Meet your new happy thought.",
    "description": "Pineapple Coconut Cooler is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  },
  {
    "id": "drink-9",
    "name": "Lavender Lemon Fizz",
    "category": "drinks",
    "art": "drink",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A flavour worth dreaming about.",
    "description": "Lavender Lemon Fizz is a drinks flavour concept for the Honey Fluff collection. Imagined as a refreshing, colourful drink. Final recipe, ingredients, allergens, packaging, and availability are still to be confirmed."
  }
]);
const $ = s => document.querySelector(s);
let saved = new Set();
try { const stored=JSON.parse(localStorage.getItem('honeyfluff-favourites')||'[]'); if(Array.isArray(stored)) saved=new Set(stored.filter(id=>treats.some(t=>t.id===id))); } catch (_) { /* Favourites still work for this visit. */ }
let category='all',savedOnly=false,current=null,opener=null;
const art = t => `<span class="treat ${t.art}" style="--flavour:${t.accent||'#f9c7de'}" aria-hidden="true"></span>`;
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

/* Expanded collection: six categories, nine concepts per category. */
['gummies','brownies','drinks'].forEach(value=>{
 if(!document.querySelector('[data-filter="'+value+'"]')){
  const button=document.createElement('button');
  button.type='button';button.dataset.filter=value;
  button.setAttribute('aria-pressed','false');
  button.textContent=value.charAt(0).toUpperCase()+value.slice(1);
  $('.filters').appendChild(button);
 }
});
const collectionStyle=document.createElement('style');
collectionStyle.textContent=`
.collection-tools{flex-wrap:wrap;align-items:center}.filters{flex:1 1 650px}.search{flex:0 1 190px}
.ice:not(.berry):not(.vanilla){background:repeating-radial-gradient(ellipse at 25% 30%,var(--flavour) 0 13px,#fff1df 17px,#c3e5f7 25px,var(--flavour) 34px,#f7e0ed 40px)}
.chocolate:after{background:linear-gradient(110deg,#fff8ed,var(--flavour))}
.cookie{border:4px solid color-mix(in srgb,var(--flavour) 65%,transparent)}
.gummy{width:105px;height:135px;border-radius:42% 42% 38% 38%;background:var(--flavour);box-shadow:inset 12px 9px 15px #ffffff90,inset -10px -10px 16px #6b245b35,55px 22px 0 -8px var(--flavour),-50px 30px 0 -12px var(--flavour);transform:rotate(-10deg)}
.gummy:before{content:'';position:absolute;inset:18px 20px;border-radius:50%;background:linear-gradient(120deg,#ffffff70,transparent 60%)}
.gummy:after{content:'HONEY FLUFF';position:absolute;bottom:36px;left:4px;right:4px;font:bold 9px Georgia;letter-spacing:1px;text-align:center;color:#4b174b}
.brownie{width:163px;height:135px;border-radius:13px;background:repeating-linear-gradient(135deg,transparent 0 25px,var(--flavour) 26px 32px,transparent 33px 49px),linear-gradient(130deg,#714436,#3b201e);box-shadow:0 17px 0 #38201e,inset 0 0 0 5px #966047;transform:rotate(-9deg)}
.brownie:after{content:'';position:absolute;inset:14px;background:radial-gradient(circle at 20% 20%,#e0b78d 0 4px,transparent 5px),radial-gradient(circle at 75% 60%,#e0b78d 0 5px,transparent 6px),radial-gradient(circle at 30% 80%,#e0b78d 0 4px,transparent 5px)}
.drink{width:103px;height:186px;border-radius:20px 20px 24px 24px;background:linear-gradient(90deg,#fff8,var(--flavour) 25%,var(--flavour) 70%,#57365644);border-top:8px solid #d3c9d2;border-bottom:7px solid #c9bdc8;transform:rotate(9deg)}
.drink:before{content:'';position:absolute;top:-9px;left:0;right:0;height:8px;border-radius:50%;background:#e6dde5;border:1px solid #b5a9b3}
.drink:after{content:'HONEY FLUFF';position:absolute;left:0;right:0;top:60px;padding:22px 6px;background:#fcf8efe6;color:var(--plum);font:bold 11px Georgia;text-align:center;letter-spacing:1.5px}
@media(max-width:720px){.filters{flex-basis:100%}.filters button{padding:9px 15px}.search{flex-basis:100%;max-width:100%}.search input{width:100%}}
`;
document.head.appendChild(collectionStyle);
document.querySelectorAll('.faq-list details').forEach(detail=>{
 const summary=detail.querySelector('summary');
 if(summary&&summary.textContent.includes('What kinds of treats'))detail.querySelector('p').textContent='We’re exploring ice cream, chocolate, cookies, gummies, brownies, and drinks. Browse nine flavour concepts in every category and save your favourites.';
});

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
