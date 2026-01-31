// Quantity controls functionality
document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        const parentCard = this.closest('.menu-item-card');
        const quantityElement = parentCard.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        const price = parseFloat(parentCard.querySelector('.item-price').textContent.replace('$', ''));
        const itemName = parentCard.querySelector('h3').textContent;

        if (this.classList.contains('plus-btn')) {
            quantity++;
        } else if (this.classList.contains('minus-btn')) {
            if (quantity > 0) {
                quantity--;
            }
        }

        quantityElement.textContent = quantity;
        
        // Update order summary
        updateOrderSummary(itemName, quantity, price);
    });
});

// Order summary functionality
let orderItems = {};

function updateOrderSummary(itemName, quantity, price) {
    if (quantity === 0) {
        // Remove item from order
        delete orderItems[itemName];
    } else {
        // Update or add item to order
        orderItems[itemName] = {
            quantity: quantity,
            price: price,
            total: quantity * price
        };
    }

    renderOrderSummary();
}

function renderOrderSummary() {
    const orderItemsContainer = document.getElementById('orderItems');
    let total = 0;
    
    orderItemsContainer.innerHTML = '';
    
    for (const [itemName, item] of Object.entries(orderItems)) {
        if (item.quantity > 0) {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span class="order-item-name">${itemName}</span>
                <span class="order-item-quantity">${item.quantity}x</span>
                <span class="order-item-price">$${(item.total).toFixed(2)}</span>
            `;
            orderItemsContainer.appendChild(orderItem);
            total += item.total;
        }
    }
    
    // Update total price
    document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
}


// Checkout button
document.querySelector('.checkout-btn').addEventListener('click', function() {
    if (Object.keys(orderItems).length === 0) {
        alert('Please add items to your order first.');
        return;
    }
    
    // Save order to browser storage
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    
    // Calculate total and save it too
    let total = 0;
    for (const [itemName, item] of Object.entries(orderItems)) {
        if (item.quantity > 0) {
            total += item.total;
        }
    }
    localStorage.setItem('orderTotal', total.toFixed(2));
    
    // Go to checkout page
    window.location.href = 'checkout.html';
});

// Update the checkout button event listener in menu-script.js:
document.querySelector('.checkout-btn').addEventListener('click', function() {
    if (Object.keys(orderItems).length === 0) {
        alert('Please add items to your order first.');
        return;
    }
    
    // Save order to localStorage
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    localStorage.setItem('orderTotal', total.toFixed(2));
    
    // Redirect to checkout page
    window.location.href = 'checkout.html';
});





// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Initialize with empty order summary
renderOrderSummary();