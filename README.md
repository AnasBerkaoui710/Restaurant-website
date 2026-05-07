# Gusto Restaurant - Fine Dining Experience

A modern, responsive restaurant website featuring an interactive online ordering system, multi-page navigation, and a premium design aesthetic.

## 🍽️ Features

- **Interactive Menu**: Browse through a variety of dishes with real-time quantity controls.
- **Online Ordering System**: Add items to your cart and see an instant order summary with total price calculation.
- **Brand Identity**: Unified brand identity with a custom logo (`GUSTO_logo.png`) and specific favicon (`GUSTO_favicon.png`) across all pages.
- **Contact & Feedback**: A professional contact page with a functional layout, integrated map, and inquiry form.
- **Brand Story**: A dedicated "About Us" page detailing the restaurant's history, values, and culinary team.
- **Seamless Checkout**: A dedicated checkout page that displays a detailed receipt, including subtotal, tax (17.5%), and final total.
- **Order Persistence**: Uses `localStorage` to keep your order details even if you refresh the page or navigate away.
- **Printable Receipts**: Generate a physical or PDF copy of your order confirmation directly from the browser.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices with a custom hamburger menu for smaller screens.
- **Modern Aesthetics**: Built with high-quality images, smooth transitions, and elegant typography (Google Fonts).

## 🛠️ Tech Stack

- **HTML5**: Semantic structure for better SEO and accessibility.
- **CSS3**: Custom styling with a focus on modern layouts (Flexbox/Grid), transitions, and responsive design.
- **JavaScript (Vanilla)**: Core logic for state management, cart functionality, and DOM manipulation.
- **Font Awesome**: Professional iconography for enhanced UI.
- **Google Fonts**: Custom typography to match the premium brand identity.

## 📁 Project Structure

```text
restaurant-website/
├── css/                # Stylesheets
│   └── style.css
├── js/                 # JavaScript logic
│   └── script.js
├── images/             # All project assets and food photography
├── pages/              # Sub-pages
│   ├── checkout.html
│   ├── menu.html
│   ├── about.html
│   └── contact.html
├── index.html          # Landing page (Entry Point)
└── README.md           # Project documentation
```

## 🚀 Getting Started

1.  Clone the repository:
    ```bash
    git clone https://github.com/AnasBerkaoui710/Restaurant-website.git
    ```
2.  Open `index.html` in your favorite web browser.
3.  Enjoy the Gusto dining experience!

## 📜 How It Works

1.  **Selection**: On the `menu.html` page, use the `+` and `-` buttons to choose your items.
2.  **Summary**: The "Your Order" sidebar updates in real-time as you modify your selection.
3.  **Checkout**: Click the "Checkout" button to save your order state and move to the confirmation page.
4.  **Confirmation**: Review your final receipt, which automatically calculates local taxes (17.5% VAT).
5.  **Print**: Use the "Print Receipt" button to save your order record.

---

Built with ❤️ by [Anas Berkaoui](https://github.com/AnasBerkaoui710)
