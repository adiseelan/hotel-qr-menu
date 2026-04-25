// ================================================
//  LE GRAND HÔTEL — Menu Data
// ================================================

const MENU_DATA = {

  breakfast: [
    {
      subcategory: "Continental",
      items: [
        { id:"b1", name:"Classic Continental Basket", type:"veg", price:650,
          desc:"Freshly baked croissants, sourdough toast, Danish pastry, fruit preserves, Normandy butter & orange marmalade.",
          tags:["Vegetarian","Nut-free"], badges:[], rating:4.8 },
        { id:"b2", name:"French Toast Royale", type:"veg", price:480,
          desc:"Thick-cut brioche, cinnamon-vanilla custard, seasonal berries, Canadian maple syrup & mascarpone.",
          tags:["Vegetarian"], badges:["chef"], rating:4.9 },
        { id:"b3", name:"Granola Parfait", type:"veg", price:380,
          desc:"House-made granola, Greek yogurt, acacia honey, seasonal fruit compote & chia seeds.",
          tags:["Vegetarian","Gluten-free option"], badges:["new"] },
      ]
    },
    {
      subcategory: "Egg Specialties",
      items: [
        { id:"b4", name:"Eggs Benedict", type:"nonveg", price:720,
          desc:"Poached free-range eggs, toasted English muffin, slow-cured ham, classic hollandaise & smoked paprika.",
          tags:["Contains gluten","Dairy"], badges:["chef"] },
        { id:"b5", name:"Masala Omelette", type:"veg", price:420,
          desc:"Three-egg omelette, onion, tomato, green chilli, fresh coriander & served with buttered toast.",
          tags:["Vegetarian"], badges:[] },
        { id:"b6", name:"Scrambled Eggs & Smoked Salmon", type:"nonveg", price:820,
          desc:"Soft scrambled eggs, Norwegian smoked salmon, cream cheese, capers & dill on toasted rye.",
          tags:["Contains fish"], badges:[] },
        { id:"b7", name:"Avocado & Poached Eggs", type:"veg", price:580,
          desc:"Smashed avocado, two poached eggs, cherry tomatoes, micro herbs & everything bagel spice on sourdough.",
          tags:["Vegetarian","Vegan option"], badges:["new"] },
      ]
    },
    {
      subcategory: "Indian Breakfast",
      items: [
        { id:"b8", name:"Masala Dosa", type:"veg", price:320,
          desc:"Crisp rice-lentil crepe, spiced potato filling, sambar, coconut chutney & tomato chutney.",
          tags:["Vegan","Gluten-free"], badges:[] },
        { id:"b9", name:"Poha & Jalebi", type:"veg", price:280,
          desc:"Flattened rice with curry leaves, mustard seeds, peanuts & fresh lime — served with crispy fresh jalebi.",
          tags:["Vegan"], badges:[] },
        { id:"b10", name:"Chole Bhature", type:"veg", price:360,
          desc:"Spiced chickpea curry, deep-fried leavened bread, pickled onion & house chilli pickle.",
          tags:["Vegan"], badges:["spicy"] },
      ]
    },
    {
      subcategory: "Beverages",
      items: [
        { id:"b11", name:"Freshly Squeezed Juices", type:"veg", price:280,
          desc:"Choice of orange, watermelon, pineapple, guava or seasonal blend. Served chilled, no sugar added.",
          tags:["Vegan","Sugar-free option"], badges:[] },
        { id:"b12", name:"Specialty Coffee", type:"veg", price:220,
          desc:"Single-origin pour-over, flat white, cappuccino or Americano from our resident barista.",
          tags:["Vegan option"], badges:[] },
      ]
    }
  ],

  lunch: [
    {
      subcategory: "Soups & Salads",
      items: [
        { id:"l1", name:"French Onion Soup", type:"veg", price:420,
          desc:"Slow-caramelised onion broth, toasted baguette crouton & melted Gruyère gratin.",
          tags:["Vegetarian","Contains gluten"], badges:[] },
        { id:"l2", name:"Niçoise Salad", type:"nonveg", price:680,
          desc:"Seared tuna, French beans, Kalamata olives, soft-boiled egg, cherry tomatoes & Dijon vinaigrette.",
          tags:["Gluten-free","Contains fish"], badges:[] },
        { id:"l3", name:"Caesar Salad", type:"veg", price:520,
          desc:"Baby romaine, house-made Caesar dressing, parmesan crisps, garlic croutons. Add grilled chicken +₹180.",
          tags:["Vegetarian"], badges:["chef"] },
        { id:"l4", name:"Mezze Platter", type:"veg", price:580,
          desc:"Hummus, babaganoush, tabbouleh, falafel, pita bread & house-pickled vegetables.",
          tags:["Vegan","Contains sesame"], badges:[] },
      ]
    },
    {
      subcategory: "Gourmet Sandwiches & Wraps",
      items: [
        { id:"l5", name:"Club Sandwich", type:"nonveg", price:580,
          desc:"Triple-decker toasted white, grilled chicken, crispy bacon, fried egg, lettuce, tomato & mayonnaise.",
          tags:["Contains gluten"], badges:[] },
        { id:"l6", name:"Pulled BBQ Jackfruit Wrap", type:"veg", price:480,
          desc:"Smoky BBQ jackfruit, slaw, pickled jalapeño, cheddar & chipotle mayo in a charred flour tortilla.",
          tags:["Vegetarian"], badges:["new"] },
        { id:"l7", name:"Smoked Salmon Bagel", type:"nonveg", price:620,
          desc:"House-cured salmon, cream cheese, capers, red onion & cucumber on a toasted sesame bagel.",
          tags:["Contains fish","Dairy"], badges:[] },
      ]
    },
    {
      subcategory: "Mains",
      items: [
        { id:"l8", name:"Grilled Chicken Breast", type:"nonveg", price:780,
          desc:"Herb-marinated free-range chicken, roasted seasonal vegetables, pommes purée & tarragon jus.",
          tags:["Gluten-free"], badges:[] },
        { id:"l9", name:"Paneer Tikka Masala", type:"veg", price:620,
          desc:"Chargrilled cottage cheese in a rich, spiced tomato-cream gravy, served with naan & basmati.",
          tags:["Vegetarian","Contains dairy"], badges:["chef","spicy"] },
        { id:"l10", name:"Dal Makhani", type:"veg", price:460,
          desc:"Black lentils slow-cooked overnight, cream, butter & house spice blend. Served with jeera rice & pickle.",
          tags:["Vegetarian","Gluten-free"], badges:[] },
        { id:"l11", name:"Grilled Fish of the Day", type:"nonveg", price:920,
          desc:"Catch of the day, grilled with lemon butter, capers, wilted spinach & herb-roasted new potatoes.",
          tags:["Gluten-free","Contains fish"], badges:[] },
      ]
    }
  ],

  dinner: [
    {
      subcategory: "Starters",
      items: [
        { id:"d1", name:"Burrata & Heirloom Tomato", type:"veg", price:680,
          desc:"Fresh burrata, heirloom tomatoes, aged balsamic, Sicilian olive oil, basil oil & Maldon salt.",
          tags:["Vegetarian","Gluten-free","Contains dairy"], badges:[] },
        { id:"d2", name:"Lobster Bisque", type:"nonveg", price:980,
          desc:"Velvety bisque, cognac cream, lobster medallion, chive oil & paprika dust.",
          tags:["Contains shellfish"], badges:["chef"] },
        { id:"d3", name:"Foie Gras Torchon", type:"nonveg", price:1200,
          desc:"Pressed duck foie gras, Sauternes gelée, toasted brioche & fig-ginger compote.",
          tags:["Contains gluten","Dairy"], badges:["chef"] },
        { id:"d4", name:"Truffle Arancini", type:"veg", price:720,
          desc:"Crisp risotto balls, black truffle, taleggio fondue & truffle oil.",
          tags:["Vegetarian","Contains dairy"], badges:["new"] },
      ]
    },
    {
      subcategory: "Mains",
      items: [
        { id:"d5", name:"Seared Sea Bass", type:"nonveg", price:1850,
          desc:"Pan-seared Mediterranean sea bass, lemon beurre blanc, capers, samphire & pommes dauphinoise.",
          tags:["Gluten-free","Contains fish"], badges:["chef"] },
        { id:"d6", name:"Truffle Risotto", type:"veg", price:1450,
          desc:"Carnaroli risotto, black Périgord truffle, aged parmesan, white truffle oil & chive.",
          tags:["Vegetarian","Gluten-free"], badges:["chef"] },
        { id:"d7", name:"Wagyu Tenderloin 200g", type:"nonveg", price:4200,
          desc:"A4 Australian Wagyu, roasted shallot purée, truffle jus, pommes Anna & seasonal mushrooms.",
          tags:["Gluten-free"], badges:["chef"] },
        { id:"d8", name:"Lamb Rack (2 cutlets)", type:"nonveg", price:2400,
          desc:"Herb-crusted rack of lamb, Provençal jus, ratatouille & pommes fondant.",
          tags:["Gluten-free"], badges:[] },
        { id:"d9", name:"Paneer Wellington", type:"veg", price:1280,
          desc:"Spiced cottage cheese & mushroom duxelles wrapped in golden puff pastry, truffle cream sauce.",
          tags:["Vegetarian","Contains gluten"], badges:["new"] },
      ]
    },
    {
      subcategory: "Desserts",
      items: [
        { id:"d10", name:"Dark Chocolate Soufflé", type:"veg", price:780,
          desc:"Warm Valrhona 70% soufflé, vanilla crème anglaise. Please allow 18 minutes.",
          tags:["Vegetarian","Contains dairy","Contains eggs"], badges:["chef"] },
        { id:"d11", name:"Crème Brûlée", type:"veg", price:580,
          desc:"Classic vanilla bean custard, caramelised sugar crust & seasonal berry compote.",
          tags:["Vegetarian","Gluten-free"], badges:[] },
        { id:"d12", name:"Cheese Board", type:"veg", price:1200,
          desc:"Selection of 5 artisan cheeses, honeycomb, walnuts, fig jam & water crackers.",
          tags:["Vegetarian"], badges:[] },
        { id:"d13", name:"Gulab Jamun Affogato", type:"veg", price:420,
          desc:"House-made gulab jamun, single-origin espresso, vanilla ice cream & rose water.",
          tags:["Vegetarian"], badges:["new"] },
      ]
    }
  ],

  beverages: [
    {
      subcategory: "Wines",
      items: [
        { id:"bv1", name:"House Red Wine", type:"veg", price:480,
          desc:"Smooth Cabernet Sauvignon, Bordeaux region. Full-bodied, dark fruit notes.", tags:["Per glass"], badges:[] },
        { id:"bv2", name:"House White Wine", type:"veg", price:480,
          desc:"Crisp Chardonnay, Burgundy. Citrus, vanilla & subtle oak finish.", tags:["Per glass"], badges:[] },
        { id:"bv3", name:"Prosecco", type:"veg", price:620,
          desc:"Italian Prosecco DOC, fine bubbles, pear & apple blossom.", tags:["Per glass"], badges:[] },
        { id:"bv4", name:"Champagne — Moët & Chandon", type:"veg", price:2400,
          desc:"Classic Moët Impérial NV, brioche notes, lively acidity.", tags:["Per bottle"], badges:["chef"] },
      ]
    },
    {
      subcategory: "Cocktails",
      items: [
        { id:"bv5", name:"Old Fashioned", type:"veg", price:780,
          desc:"Bulleit Bourbon, Angostura bitters, demerara syrup, orange peel.", tags:["Contains alcohol"], badges:[] },
        { id:"bv6", name:"Martini (Dirty / Dry)", type:"veg", price:820,
          desc:"Tanqueray 10 gin or Belvedere vodka, dry vermouth, house olives.", tags:["Contains alcohol"], badges:["chef"] },
        { id:"bv7", name:"Negroni", type:"veg", price:780,
          desc:"Campari, Tanqueray, sweet vermouth, orange zest.", tags:["Contains alcohol"], badges:[] },
        { id:"bv8", name:"Mojito", type:"veg", price:680,
          desc:"White rum, fresh lime, mint, cane sugar, soda. Available virgin.", tags:["Contains alcohol"], badges:[] },
      ]
    },
    {
      subcategory: "Mocktails & Soft Drinks",
      items: [
        { id:"bv9", name:"Virgin Mojito", type:"veg", price:320,
          desc:"Fresh lime, mint, cane sugar, soda water. Refreshing & light.", tags:["Vegan","Non-alcoholic"], badges:[] },
        { id:"bv10", name:"Mango Lassi", type:"veg", price:280,
          desc:"Alphonso mango, yogurt, cardamom & rose water.", tags:["Vegetarian"], badges:[] },
        { id:"bv11", name:"Watermelon Cooler", type:"veg", price:280,
          desc:"Fresh watermelon, lemon, basil, pink Himalayan salt & sparkling water.", tags:["Vegan"], badges:["new"] },
        { id:"bv12", name:"Premium Soft Drinks", type:"veg", price:180,
          desc:"Coca-Cola, Sprite, Fanta, Schweppes Tonic, Diet Coke.", tags:["Vegan"], badges:[] },
      ]
    },
    {
      subcategory: "Hot Beverages",
      items: [
        { id:"bv13", name:"Specialty Coffee", type:"veg", price:220,
          desc:"Flat white, cappuccino, latte, Americano or espresso. Single-origin beans.", tags:["Vegan option"], badges:[] },
        { id:"bv14", name:"Premium Tea Selection", type:"veg", price:180,
          desc:"Darjeeling First Flush, Earl Grey, Chamomile, Green Sencha or Masala Chai.", tags:["Vegan"], badges:[] },
        { id:"bv15", name:"Hot Chocolate", type:"veg", price:280,
          desc:"Valrhona 70% dark chocolate, steamed milk, house-made marshmallows.", tags:["Vegetarian"], badges:[] },
      ]
    }
  ]
};
