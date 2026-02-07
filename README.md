# Restaurant Web Project

## Overview

This is a **responsive restaurant website** with:

- Homepage, menu, and checkout pages  
- Dynamic **menu ordering system**  
- **Order summary** and **checkout with receipt**  
- Mobile-friendly navigation  
- Smooth animations and interactive buttons

**Technologies used:**

- **HTML5** – structure  
- **CSS3** – styling and responsive design  
- **JavaScript (ES6)** – interactivity and order management  
- **Font Awesome** – icons  

---

## Features

1. **Navigation Bar**  
   - Fixed at top  
   - Hamburger menu for mobile  
   - Active link highlighting  

2. **Homepage**  
   - Hero section with large header and call-to-action buttons  
   - Features section highlighting services  
   - Menu preview with prices and images  

3. **Menu Page**  
   - Menu items displayed with images, descriptions, and prices  
   - Quantity controls for each item  
   - Live **order summary** with total price  
   - Checkout button saves the order to `localStorage`  

4. **Checkout Page**  
   - Displays ordered items, subtotal, tax, and total  
   - Interactive receipt section  
   - Print receipt functionality  
   - Timeline/status tracker for order  

5. **Responsive Design**  
   - Fully functional on desktop, tablet, and mobile devices  


---


## Setup Instructions

1. Clone or download the project files.  
2. Ensure the folder structure matches the above.  
3. Open `index.html` in a browser to start.  
4. Add menu items, then proceed to checkout to see the receipt functionality.  
5. For mobile testing, resize the browser or open developer tools.

---

## How It Works

1. **Adding Items**  
   - On the menu page, use the **+ / - buttons** to select item quantity.  
   - The **order summary** at the bottom updates live.

2. **Checkout**  
   - Clicking **Checkout** stores order items and total in `localStorage`.  
   - `checkout.html` reads this data and displays the receipt.

3. **Printing Receipt**  
   - On checkout page, click **Print Receipt**.  
   - Opens print-friendly view with order details.

---

## Dependencies

- [Font Awesome](https://cdnjs.com/libraries/font-awesome) – icons  
- Modern browser with **JavaScript enabled**  
- No backend required; all functionality is **client-side**

---

## Notes

- All totals and orders are **saved locally in the browser**.  
- Tax is calculated at **8.25%**.  
- The project is fully functional **offline** except for external Font Awesome CDN.  

---

## Future Improvements

- Persist cart between page reloads  
- Add **user authentication** and real backend integration  
- Add **payment simulation** or API integration  
- Dark mode toggle for better accessibility  

