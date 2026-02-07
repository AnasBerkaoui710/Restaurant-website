/* =========================
   GLOBAL STATE
========================= */
let orderItems = {};

/* =========================
   MENU PAGE LOGIC
========================= */
function initMenuPage() {
    const quantityButtons = document.querySelectorAll('.quantity-btn');
    const orderItemsContainer = document.getElementById('orderItems');
    const totalPriceEl = document.querySelector('.total-price');
    const checkoutBtn = document.querySelector('.checkout-btn');

    if (!quantityButtons.length || !orderItemsContainer || !totalPriceEl || !checkoutBtn) {
        return;
    }

    quantityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.menu-item-card');
            const qtyEl = card.querySelector('.quantity');
            const name = card.querySelector('h3').textContent;
            const price = parseFloat(card.querySelector('.item-price').textContent.replace('$', ''));
            let quantity = parseInt(qtyEl.textContent, 10);

            if (button.classList.contains('plus-btn')) quantity++;
            if (button.classList.contains('minus-btn') && quantity > 0) quantity--;

            qtyEl.textContent = quantity;

            if (quantity === 0) {
                delete orderItems[name];
            } else {
                orderItems[name] = {
                    quantity,
                    price,
                    total: quantity * price
                };
            }

            renderOrderSummary();
        });
    });

    function renderOrderSummary() {
        orderItemsContainer.innerHTML = '';
        let total = 0;

        Object.entries(orderItems).forEach(([name, item]) => {
            total += item.total;

            const div = document.createElement('div');
            div.className = 'order-item';
            div.innerHTML = `
                <span class="order-item-name">${name}</span>
                <span class="order-item-quantity">${item.quantity}x</span>
                <span class="order-item-price">$${item.total.toFixed(2)}</span>
            `;
            orderItemsContainer.appendChild(div);
        });

        totalPriceEl.textContent = `$${total.toFixed(2)}`;
    }

    checkoutBtn.addEventListener('click', e => {
        if (Object.keys(orderItems).length === 0) {
            e.preventDefault();
            alert('Please add items to your order first.');
            return;
        }

        let total = Object.values(orderItems).reduce((sum, item) => sum + item.total, 0);

        localStorage.setItem('orderItems', JSON.stringify(orderItems));
        localStorage.setItem('orderTotal', total.toFixed(2));
    });
}

/* =========================
   CHECKOUT / RECEIPT PAGE
========================= */
function initCheckoutPage() {
    const receiptContainer = document.querySelector('.receipt-items');
    const subtotalEl = document.querySelector('.subtotal-price');
    const taxEl = document.querySelector('.tax-price');
    const totalEl = document.querySelector('.total-price');

    if (!receiptContainer || !subtotalEl || !taxEl || !totalEl) {
        return;
    }

    const savedOrder = JSON.parse(localStorage.getItem('orderItems') || '{}');
    let subtotal = 0;

    receiptContainer.innerHTML = '';

    Object.entries(savedOrder).forEach(([name, item]) => {
        subtotal += item.total;

        receiptContainer.innerHTML += `
            <div class="receipt-item">
                <div class="item-info">
                    <h3>${name}</h3>
                    <span class="item-quantity">×${item.quantity}</span>
                </div>
                <div class="item-price">$${item.total.toFixed(2)}</div>
            </div>
        `;
    });

    const tax = subtotal * 0.0825;
    const total = subtotal + tax;

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;

    initPrintReceipt();
}

function initPrintReceipt() {
    const printBtn = document.querySelector('.btn-receipt');
    const receipt = document.querySelector('.order-receipt');

    if (!printBtn || !receipt) return;

    printBtn.addEventListener('click', () => {
        const original = document.body.innerHTML;
        document.body.innerHTML = receipt.innerHTML;
        window.print();
        document.body.innerHTML = original;
        location.reload();
    });
}

/* =========================
   NAVIGATION (ALL PAGES)
========================= */
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.addEventListener('click', e => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

/* =========================
   INIT
========================= */
document.addEventListener('DOMContentLoaded', () => {
    initMenuPage();
    initCheckoutPage();
    initNavigation();
});
