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
// Product data is bundled here so every page works even if products.js is missing.
const treats = [
  {
    "id": "cloud",
    "name": "Cotton Cloud",
    "category": "ice cream",
    "art": "ice",
    "tone": "#e1d3ed",
    "line": "Pink skies. Blue swirls. Pure daydream.",
    "description": "Pink cotton-candy swirls meet blue vanilla daydreams.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "milk",
    "name": "Golden Hour",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#e8d7c0",
    "line": "A chocolate moment, beautifully unhurried.",
    "description": "Smooth milk chocolate inspiration with a caramel-like warmth.",
    "size": "100 g bar",
    "price": 795,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie",
    "name": "The Cookie Crush",
    "category": "cookies",
    "art": "cookie",
    "tone": "#f1d4da",
    "line": "The familiar favourite, with a little fluff.",
    "description": "A golden chocolate-chip classic with a soft-centre concept.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "berry",
    "name": "Berry Daydream",
    "category": "ice cream",
    "art": "ice berry",
    "tone": "#f2d8e1",
    "line": "A little berry. A little daydream.",
    "description": "A soft berry-inspired scoop with a creamy finish.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "rose",
    "name": "Rose-Tinted",
    "category": "chocolate",
    "art": "chocolate rose",
    "tone": "#e1d4e8",
    "line": "Chocolate, dressed for a sweeter occasion.",
    "description": "Chocolate with a delicate rose-inspired flavour story.",
    "size": "100 g bar",
    "price": 795,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "vanilla",
    "name": "Vanilla Reverie",
    "category": "ice cream",
    "art": "ice vanilla",
    "tone": "#e9e0ca",
    "line": "Soft, simple, and wonderfully timeless.",
    "description": "Classic vanilla with a mellow, creamy character.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "ice-1",
    "name": "Pistachio Velvet",
    "category": "ice cream",
    "art": "ice",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "A little joy in every bite.",
    "description": "Roasted pistachio inspiration with a softly nutty finish.",
    "size": "473 mL tub",
    "price": 1395,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "ice-2",
    "name": "Salted Caramel Drift",
    "category": "ice cream",
    "art": "ice",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "Your next sweet daydream.",
    "description": "Buttery caramel ribbons with a touch of sea salt.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "ice-3",
    "name": "Midnight Cocoa",
    "category": "ice cream",
    "art": "ice",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "Made for a colourful escape.",
    "description": "Deep cocoa inspiration for chocolate lovers.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "ice-4",
    "name": "Mango Solstice",
    "category": "ice cream",
    "art": "ice",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "A soft spot for something sweet.",
    "description": "Golden mango inspiration with a bright tropical finish.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "ice-5",
    "name": "Mint Moon",
    "category": "ice cream",
    "art": "ice",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A little twist on a favourite.",
    "description": "Cool mint inspiration with little chocolate moments.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "ice-6",
    "name": "Coffee Cloud",
    "category": "ice cream",
    "art": "ice",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "Sweet moments start here.",
    "description": "Coffee-inspired creaminess for your afternoon escape.",
    "size": "473 mL tub",
    "price": 1295,
    "storage": "Keep frozen. Follow the final package label for serving and storage.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "chocolate-1",
    "name": "Midnight Truffle",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "A little joy in every bite.",
    "description": "Dark cocoa inspiration with a rich truffle-style centre.",
    "size": "100 g bar",
    "price": 895,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "chocolate-2",
    "name": "Pistachio Silk",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "Your next sweet daydream.",
    "description": "Chocolate paired with a pistachio-inspired filling.",
    "size": "100 g bar",
    "price": 895,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "chocolate-3",
    "name": "Caramel Gleam",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "Made for a colourful escape.",
    "description": "Caramel-inspired sweetness wrapped in chocolate.",
    "size": "100 g bar",
    "price": 795,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "chocolate-4",
    "name": "Hazelnut Halo",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A soft spot for something sweet.",
    "description": "Roasted hazelnut inspiration with a silky chocolate finish.",
    "size": "100 g bar",
    "price": 895,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "chocolate-5",
    "name": "Orange Afterglow",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "A little twist on a favourite.",
    "description": "Orange-inspired brightness balanced with cocoa.",
    "size": "100 g bar",
    "price": 795,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "chocolate-6",
    "name": "Coconut Kiss",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "Sweet moments start here.",
    "description": "Coconut inspiration with a mellow chocolate finish.",
    "size": "100 g bar",
    "price": 795,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "chocolate-7",
    "name": "Raspberry Romance",
    "category": "chocolate",
    "art": "chocolate",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "A bright idea for your treat break.",
    "description": "Tart raspberry inspiration wrapped in smooth chocolate.",
    "size": "100 g bar",
    "price": 795,
    "storage": "Store sealed in a cool, dry place away from sunlight.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-1",
    "name": "Brown Butter Bliss",
    "category": "cookies",
    "art": "cookie",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "A little joy in every bite.",
    "description": "Brown-butter inspiration with a warm, toasty finish.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-2",
    "name": "Double Cocoa Crush",
    "category": "cookies",
    "art": "cookie",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "Your next sweet daydream.",
    "description": "A double-cocoa cookie concept with chocolate chunks.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-3",
    "name": "White Chocolate Raspberry",
    "category": "cookies",
    "art": "cookie",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "Made for a colourful escape.",
    "description": "Sweet white chocolate inspiration meets tangy raspberry.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-4",
    "name": "Pistachio Crumble",
    "category": "cookies",
    "art": "cookie",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "A soft spot for something sweet.",
    "description": "Pistachio inspiration with a buttery cookie crumb.",
    "size": "1 large cookie · proposed 90 g",
    "price": 550,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-5",
    "name": "Salted Caramel Cookie",
    "category": "cookies",
    "art": "cookie",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "A little twist on a favourite.",
    "description": "Caramel-inspired pockets with a little sea-salt sparkle.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-6",
    "name": "Birthday Confetti",
    "category": "cookies",
    "art": "cookie",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "Sweet moments start here.",
    "description": "Vanilla cake inspiration with colourful confetti.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-7",
    "name": "Cinnamon Sugar Hug",
    "category": "cookies",
    "art": "cookie",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "A bright idea for your treat break.",
    "description": "A cinnamon-sugar classic imagined with a soft centre.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "cookie-8",
    "name": "Cookies & Cream Dream",
    "category": "cookies",
    "art": "cookie",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "Meet your new happy thought.",
    "description": "Cocoa cookie pieces folded into a vanilla-inspired cookie.",
    "size": "1 large cookie · proposed 90 g",
    "price": 450,
    "storage": "Keep sealed in a cool, dry place. Follow the final package label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-1",
    "name": "Peachy Clouds",
    "category": "gummies",
    "art": "gummy",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "A little joy in every bite.",
    "description": "Soft peach-inspired sweetness with a bright finish.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-2",
    "name": "Strawberry Skies",
    "category": "gummies",
    "art": "gummy",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "Your next sweet daydream.",
    "description": "Strawberry-inspired fruity bites for a pink-sky mood.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-3",
    "name": "Watermelon Waves",
    "category": "gummies",
    "art": "gummy",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "Made for a colourful escape.",
    "description": "Watermelon-inspired sweetness with a summery finish.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-4",
    "name": "Mango Tango",
    "category": "gummies",
    "art": "gummy",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "A soft spot for something sweet.",
    "description": "Tropical mango-inspired bites with a sunny personality.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-5",
    "name": "Blueberry Bliss",
    "category": "gummies",
    "art": "gummy",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "A little twist on a favourite.",
    "description": "Blueberry-inspired fruity bites with a mellow sweetness.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-6",
    "name": "Sour Cherry Pop",
    "category": "gummies",
    "art": "gummy",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "Sweet moments start here.",
    "description": "Cherry-inspired gummies with a tart-sugar concept.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-7",
    "name": "Pineapple Paradise",
    "category": "gummies",
    "art": "gummy",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "A bright idea for your treat break.",
    "description": "Pineapple-inspired tropical bites with a bright finish.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-8",
    "name": "Pink Lemonade Drops",
    "category": "gummies",
    "art": "gummy",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "Meet your new happy thought.",
    "description": "Lemon-inspired tang meets soft berry sweetness.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "gummy-9",
    "name": "Rainbow Daydream",
    "category": "gummies",
    "art": "gummy",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "A flavour worth dreaming about.",
    "description": "A colourful assortment of fruit-inspired gummy concepts.",
    "size": "120 g pouch",
    "price": 695,
    "storage": "Keep sealed in a cool, dry place away from heat.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-1",
    "name": "Classic Fudge",
    "category": "brownies",
    "art": "brownie",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A little joy in every bite.",
    "description": "Rich cocoa inspiration with a dense, fudgy centre.",
    "size": "1 brownie · proposed 100 g",
    "price": 550,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-2",
    "name": "Salted Caramel Swirl",
    "category": "brownies",
    "art": "brownie",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "Your next sweet daydream.",
    "description": "Chocolate fudge inspiration with caramel-style ribbons.",
    "size": "1 brownie · proposed 100 g",
    "price": 550,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-3",
    "name": "Raspberry Truffle",
    "category": "brownies",
    "art": "brownie",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "Made for a colourful escape.",
    "description": "Raspberry-inspired brightness through a cocoa brownie.",
    "size": "1 brownie · proposed 100 g",
    "price": 650,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-4",
    "name": "Walnut Wonder",
    "category": "brownies",
    "art": "brownie",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "A soft spot for something sweet.",
    "description": "Chocolate brownie inspiration with a walnut crunch.",
    "size": "1 brownie · proposed 100 g",
    "price": 650,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-5",
    "name": "Cookies & Cream Brownie",
    "category": "brownies",
    "art": "brownie",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "A little twist on a favourite.",
    "description": "Cocoa cookie pieces meet a creamy vanilla-style swirl.",
    "size": "1 brownie · proposed 100 g",
    "price": 550,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-6",
    "name": "Peanut Butter Ripple",
    "category": "brownies",
    "art": "brownie",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "Sweet moments start here.",
    "description": "Peanut-butter-inspired ribbons through a cocoa brownie.",
    "size": "1 brownie · proposed 100 g",
    "price": 550,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-7",
    "name": "Espresso Midnight",
    "category": "brownies",
    "art": "brownie",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "A bright idea for your treat break.",
    "description": "Coffee-inspired depth with a dark cocoa finish.",
    "size": "1 brownie · proposed 100 g",
    "price": 550,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-8",
    "name": "White Chocolate Marble",
    "category": "brownies",
    "art": "brownie",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "Meet your new happy thought.",
    "description": "A marbled swirl of cocoa and white-chocolate inspiration.",
    "size": "1 brownie · proposed 100 g",
    "price": 550,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "brownie-9",
    "name": "Pistachio Fudge",
    "category": "brownies",
    "art": "brownie",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "A flavour worth dreaming about.",
    "description": "Pistachio-inspired richness paired with chocolate fudge.",
    "size": "1 brownie · proposed 100 g",
    "price": 650,
    "storage": "Keep sealed. Refrigeration and shelf life will be specified on the final label.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-1",
    "name": "Strawberry Cloud Soda",
    "category": "drinks",
    "art": "drink",
    "tone": "#d7e6ee",
    "accent": "#b79480",
    "line": "A little joy in every sip.",
    "description": "Strawberry-inspired fizz with a soft vanilla-style finish.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-2",
    "name": "Peach Sunset Fizz",
    "category": "drinks",
    "art": "drink",
    "tone": "#e8d7c0",
    "accent": "#eaa4b9",
    "line": "Your next sweet daydream.",
    "description": "Peach-inspired sparkle with a sunset-coloured mood.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-3",
    "name": "Blue Raspberry Breeze",
    "category": "drinks",
    "art": "drink",
    "tone": "#f1d4da",
    "accent": "#c1a5de",
    "line": "Made for a colourful escape.",
    "description": "Bright blue-raspberry inspiration with a refreshing fizz.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-4",
    "name": "Mango Cream Dream",
    "category": "drinks",
    "art": "drink",
    "tone": "#ddd5ec",
    "accent": "#8dcbd5",
    "line": "A soft spot for something sweet.",
    "description": "A mango-inspired drink with a creamy-style flavour story.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-5",
    "name": "Pink Lemonade Spark",
    "category": "drinks",
    "art": "drink",
    "tone": "#e1d3ed",
    "accent": "#b9ce91",
    "line": "A little twist on a favourite.",
    "description": "Bright lemon inspiration with a pink berry twist.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-6",
    "name": "Vanilla Cream Float",
    "category": "drinks",
    "art": "drink",
    "tone": "#f2d8e1",
    "accent": "#efb773",
    "line": "Sweet moments start here.",
    "description": "A vanilla cream-soda concept with a nostalgic finish.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-7",
    "name": "Cherry Moon Soda",
    "category": "drinks",
    "art": "drink",
    "tone": "#e9e0ca",
    "accent": "#88604d",
    "line": "A bright idea for your treat break.",
    "description": "Cherry-inspired sparkle with a mellow, sweet finish.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-8",
    "name": "Pineapple Coconut Cooler",
    "category": "drinks",
    "art": "drink",
    "tone": "#dce7d2",
    "accent": "#f3bf65",
    "line": "Meet your new happy thought.",
    "description": "Pineapple and coconut inspiration for a tropical escape.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  },
  {
    "id": "drink-9",
    "name": "Lavender Lemon Fizz",
    "category": "drinks",
    "art": "drink",
    "tone": "#f5dfc7",
    "accent": "#a1d4ba",
    "line": "A flavour worth dreaming about.",
    "description": "Lavender-inspired floral notes meet bright lemon fizz.",
    "size": "355 mL can",
    "price": 495,
    "storage": "Serve chilled. Follow the final package label for storage after opening.",
    "image": "",
    "imageAlt": ""
  }
];
const drinkImages = {
  "drink-1": "strawberry-cloud.png",
  "drink-2": "peach-sunset-fizz.png",
  "drink-3": "blue-raspberry-breeze.png",
  "drink-4": "mango-cream-dream.png",
  "drink-6": "vanilla-cream-float.png",
  "drink-7": "cherry-moon-soda.png",
  "drink-8": "pineapple-coconut-cooler.png",
  "drink-9": "lavender-lemon-fizz.png"
};

treats.forEach(product => {
  if (drinkImages[product.id]) {
    product.image = "images/" + drinkImages[product.id];
    product.imageAlt = product.name + " can";
  }
});
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
// Sweet Reviews photos
(() => {
  function addReviewPhotos() {
    const slots = document.querySelectorAll(
      '#reviewGrid .review-placeholder'
    );

    slots.forEach((slot, index) => {
      const number = index + 1;
      const paths = [
        `images/review-${number}.png`,
        `images/review-${number}.jpg`,
        `images/review-${number}.webp`,
        `images/review-${number}.jpeg`
      ];

      const img = document.createElement('img');
      img.className = 'review-image';
      img.alt = `Honey Fluff promotional photo ${number}`;
      img.loading = 'lazy';
      img.style.cssText =
        'display:block;width:100%;height:100%;object-fit:cover;';

      let attempt = 0;
      img.onerror = () => {
        attempt += 1;
        if (attempt < paths.length) {
          img.src = paths[attempt];
        } else {
          img.replaceWith(slot);
          console.warn('Review photo not found:', paths);
        }
      };

      slot.replaceWith(img);
      img.src = paths[0];
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addReviewPhotos);
  } else {
    addReviewPhotos();
  }
})();
// CONNECT ALL 9 ICE CREAM PHOTOS
(() => {
  const iceCreamImages = {
    'cloud': 'cotton-cloud.png',
    'berry': 'berry-daydream.png',
    'vanilla': 'vanilla-reverie.png',
    'ice-1': 'pistachio-velvet.png',
    'ice-2': 'salted-caramel-drift.png',
    'ice-3': 'midnight-cocoa.png',
    'ice-4': 'mango-solstice.png',
    'ice-5': 'mint-moon.png',
    'ice-6': 'coffee-cloud.png'
  };

  treats.forEach(product => {
    const filename = iceCreamImages[product.id];

    if (filename) {
      product.image = 'images/' + filename;
      product.imageAlt = product.name + ' ice cream tub';
    }
  });

  render();
  renderFeatured();
})();
// CONNECT ALL 9 GUMMY PHOTOS
(() => {
  const gummyImages = {
    'gummy-1': 'peachy-clouds.png',
    'gummy-2': 'strawberry-skies.png',
    'gummy-3': 'watermelon-waves.png',
    'gummy-4': 'mango-tango.png',
    'gummy-5': 'blueberry-bliss.png',
    'gummy-6': 'sour-cherry-pop.png',
    'gummy-7': 'pineapple-paradise.png',
    'gummy-8': 'pink-lemonade-drops.png',
    'gummy-9': 'rainbow-daydream.png'
  };

  treats.forEach(product => {
    const filename = gummyImages[product.id];

    if (filename) {
      product.image = 'images/' + filename;
      product.imageAlt = product.name + ' gummy pouch';
    }
  });

  render();
  renderFeatured();
})();
