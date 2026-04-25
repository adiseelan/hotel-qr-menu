# 🏨 Le Grand Hôtel — QR Digital Menu System

A complete, production-ready **Hotel QR Menu** web application. Guests scan a QR code in their room and get a beautiful mobile-first digital menu with a full ordering experience.

---

## 📁 Project Structure

```
hotel-qr-menu/
├── index.html            ← Main guest-facing QR Menu
├── qr-generator.html     ← Generate & download QR codes per room
├── admin-dashboard.html  ← Kitchen / staff order management dashboard
├── css/
│   └── styles.css        ← All styles (luxury dark gold theme)
├── js/
│   ├── menu-data.js      ← Full menu data (easy to edit)
│   └── app.js            ← Cart, tabs, modal, order logic
└── README.md
```

---

## 🚀 How to Use

### 1. Deploy to a web host
Upload all files to any static hosting:
- **Netlify** (free) — drag & drop the folder
- **Vercel** (free) — `vercel deploy`
- **GitHub Pages** — push to a repo
- Your hotel's existing web server

### 2. Generate QR Codes
Open `qr-generator.html` in your browser.
- Enter your live URL (e.g. `https://your-hotel.netlify.app/index.html`)
- Enter the room number
- Click **Generate QR Code** → Download PNG
- Print and place in each room (tent card, menu folder, etc.)

The QR URL includes `?room=204` so the menu shows the guest's room number automatically.

### 3. Kitchen Dashboard
Open `admin-dashboard.html` on a tablet/monitor at the kitchen or reception.

Features:
- Live order cards with room number, items & totals
- Status flow: **New → Preparing → Ready → Delivered**
- Timer shows how long ago each order was placed (turns red after 30 min)
- Filter by status
- Print button per order

> **Note**: The dashboard uses sample data. For real orders, connect to a backend (Firebase, Supabase, etc.) — see Backend Integration below.

---

## 🍽 Menu Customisation

All menu content lives in **`js/menu-data.js`**. Each item has:

```js
{
  id: "d5",                          // Unique ID
  name: "Seared Sea Bass",           // Item name
  type: "nonveg",                    // "veg" or "nonveg"
  price: 1850,                       // Price in ₹ (integer)
  desc: "Pan-seared Mediterranean…", // Description
  tags: ["Gluten-free", "Fish"],     // Dietary / allergen tags
  badges: ["chef"]                   // "chef", "new", "spicy"
}
```

**To add a new item**, copy any item block, change the `id`, and fill in details.

**Categories**: `breakfast`, `lunch`, `dinner`, `beverages`  
**Sub-categories**: Add a new object in the array with `subcategory` and `items`.

---

## 💅 Customisation

### Branding
- Change hotel name: search for `Le Grand Hôtel` in all HTML files
- Change room number label: set default in `index.html` (`id="roomNumber"`)
- Change phone extension: search for `Ext. 0`

### Colours
Edit `css/styles.css` `:root` variables:
```css
--gold:       #C9A96E;   /* Primary accent */
--gold-light: #E8C98A;
--black:      #0B0B0B;   /* Background */
--dark:       #111111;
--white:      #F5F0E8;   /* Text */
```

### Currency
Search for `₹` and replace with your currency symbol.  
Search for `en-IN` (in `toLocaleString`) and replace with your locale.

### GST / Tax rate
In `js/app.js`, find:
```js
const tax = Math.round(subtotal * 0.18);
```
Change `0.18` to your tax rate (e.g. `0.10` for 10%).

---

## 🔌 Backend Integration (Production)

To make orders actually reach the kitchen in real-time:

### Option A — Firebase Realtime Database (recommended)
1. Create a Firebase project
2. In `js/app.js` → `placeOrderBtn` handler, push the cart to Firebase:
```js
import { getDatabase, ref, push } from "firebase/database";
const db = getDatabase();
push(ref(db, 'orders'), {
  room, items: Object.values(cart), note, timestamp: Date.now()
});
```
3. In `admin-dashboard.html`, listen to the Firebase `orders` node and render cards.

### Option B — Supabase (PostgreSQL)
POST to your Supabase REST API when order is placed.

### Option C — Simple Email / WhatsApp
Use [EmailJS](https://emailjs.com) or [Twilio](https://twilio.com) to send an order notification email/WhatsApp to the kitchen when the guest submits.

---

## 📱 QR Tent Card Printing Tips

- **Size**: 9cm × 6cm tent card recommended
- **QR minimum**: Print at minimum 3cm × 3cm for reliable scanning
- **Include**: Hotel logo, "Scan to Order", room number, phone extension as fallback
- **Laminate** for durability

---

## 📄 License

Free to use and modify for hotel / hospitality purposes.  
© 2024 — Built for Le Grand Hôtel.
