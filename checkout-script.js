// Get order from storage when page loads
window.addEventListener('DOMContentLoaded', function() {
    // Get order items from storage
    const savedOrder = localStorage.getItem('orderItems');
    const savedTotal = localStorage.getItem('orderTotal');
    
    if (savedOrder) {
        const orderItems = JSON.parse(savedOrder);
        
        // Clear the current receipt items
        const receiptItemsContainer = document.querySelector('.receipt-items');
        
        // Create new items based on what was ordered
        let subtotal = 0;
        receiptItemsContainer.innerHTML = ''; // Clear existing items
        
        // Loop through each item in the order
        for (const [itemName, item] of Object.entries(orderItems)) {
            if (item.quantity > 0) {
                subtotal += item.total;
                
                // Create HTML for this item
                const itemHTML = `
                    <div class="receipt-item">
                        <div class="item-info">
                            <h3>${itemName}</h3>
                            <span class="item-quantity">×${item.quantity}</span>
                        </div>
                        <div class="item-price">
                            $${item.total.toFixed(2)}
                        </div>
                    </div>
                `;
                
                // Add to the page
                receiptItemsContainer.innerHTML += itemHTML;
            }
        }
        
        // Update prices
        const tax = subtotal * 0.0825; // 8.25% tax
        const total = subtotal + tax;
        
        // Update the price displays
        document.querySelector('.subtotal-price').textContent = `$${subtotal.toFixed(2)}`;
        document.querySelector('.tax-price').textContent = `$${tax.toFixed(2)}`;
        document.querySelector('.total-price').textContent = `$${total.toFixed(2)}`;
    }
});



// Print Receipt Functionality
document.querySelector('.btn-receipt')?.addEventListener('click', function() {
    const printContent = document.querySelector('.order-receipt').innerHTML;
    const originalContent = document.body.innerHTML;
    
    document.body.innerHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Print Receipt</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                }
                .receipt-print {
                    max-width: 400px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                }
                .print-header {
                    text-align: center;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    border-bottom: 2px solid #333;
                }
                .print-header h1 {
                    font-size: 24px;
                    margin: 0;
                    color: #333;
                }
                .print-subtitle {
                    color: #666;
                    margin: 5px 0;
                }
                .print-date {
                    color: #999;
                    font-size: 12px;
                }
                .receipt-item {
                    display: flex;
                    justify-content: space-between;
                    margin: 10px 0;
                    padding-bottom: 10px;
                    border-bottom: 1px dashed #ddd;
                }
                .item-name {
                    font-weight: bold;
                }
                .item-quantity {
                    color: #E55727;
                }
                .item-price {
                    font-weight: bold;
                }
                .receipt-total {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                    padding-top: 20px;
                    border-top: 2px solid #333;
                    font-size: 18px;
                    font-weight: bold;
                }
                .thank-you-print {
                    text-align: center;
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 1px solid #ddd;
                }
                @media print {
                    @page {
                        margin: 0;
                        size: auto;
                    }
                    body {
                        margin: 0;
                        padding: 10px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="receipt-print">
                <div class="print-header">
                    <h1>Restaurant Receipt</h1>
                    <p class="print-subtitle">Order #RST-2023-4567</p>
                    <p class="print-date">December 15, 2023 · 2:30 PM</p>
                </div>
                <div class="receipt-items">
                    <div class="receipt-item">
                        <div>
                            <span class="item-name">Chicken burrito</span>
                            <span class="item-quantity"> ×1</span>
                        </div>
                        <div class="item-price">$20.00</div>
                    </div>
                    <div class="receipt-item">
                        <div>
                            <span class="item-name">Pizza Pepperoni</span>
                            <span class="item-quantity"> ×2</span>
                        </div>
                        <div class="item-price">$40.00</div>
                    </div>
                    <div class="receipt-item">
                        <div>
                            <span class="item-name">Beef burger</span>
                            <span class="item-quantity"> ×1</span>
                        </div>
                        <div class="item-price">$20.00</div>
                    </div>
                    <div class="receipt-total">
                        <div>Total:</div>
                        <div>$86.60</div>
                    </div>
                </div>
                <div class="thank-you-print">
                    <p>Thank you for your order!</p>
                    <p>Visit us again soon.</p>
                </div>
            </div>
        </body>
        </html>
    `;
    
    window.print();
    
    // Restore original content
    document.body.innerHTML = originalContent;
    
    // Reattach event listeners
    attachPrintListener();
});

function attachPrintListener() {
    document.querySelector('.btn-receipt')?.addEventListener('click', function() {
        // This will be reattached by the main script
        document.querySelector('.btn-receipt').click();
    });
}

// Mobile menu toggle (from previous scripts)
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

// Animate timeline steps
function animateTimeline() {
    const timelineSteps = document.querySelectorAll('.timeline-step');
    
    timelineSteps.forEach((step, index) => {
        // Add delay for animation
        setTimeout(() => {
            step.classList.add('active');
        }, index * 500);
    });
}

// Initialize animations when page loads
window.addEventListener('DOMContentLoaded', () => {
    animateTimeline();
    
    // Add receipt paper effect
    const orderReceipt = document.querySelector('.order-receipt');
    orderReceipt.style.boxShadow = 'inset 0 0 0 1px #ddd';
    
    // Simulate receipt printing sound on print button hover
    const printBtn = document.querySelector('.btn-receipt');
    printBtn?.addEventListener('mouseenter', () => {
        printBtn.style.transform = 'scale(1.02)';
    });
    
    printBtn?.addEventListener('mouseleave', () => {
        printBtn.style.transform = 'scale(1)';
    });
});

// Auto-update time every minute
function updateCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });
    
    const timeElements = document.querySelectorAll('.step-time:first-child');
    timeElements.forEach(el => {
        if (el.textContent.includes('PM') || el.textContent.includes('AM')) {
            el.textContent = timeString;
        }
    });
}

// Update time every minute
setInterval(updateCurrentTime, 60000);

// Initialize current time
updateCurrentTime();