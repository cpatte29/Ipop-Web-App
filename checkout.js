// Checkout page functionality

// Render cart items
function renderCartItems() {
    const cart = getCart();
    const container = document.getElementById('cartItemsContainer');

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <h2 class="empty-cart-title">Your cart is empty</h2>
                <p class="empty-cart-text">Add some delicious popcorn to get started!</p>
                <a href="shop.html" class="btn btn-primary btn-lg">Shop Popcorn</a>
            </div>
        `;
        updateOrderSummary();
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item" data-index="${index}">
            <div class="cart-item-image">🍿</div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.productName}</div>
                <div class="cart-item-size">${item.size}</div>
                <div class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="decrementQuantity(${index})" type="button">−</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="incrementQuantity(${index})" type="button">+</button>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})" type="button">Remove</button>
            </div>
        </div>
    `).join('');

    updateOrderSummary();
}

// Increment quantity
function incrementQuantity(index) {
    const cart = getCart();
    if (cart[index]) {
        cart[index].quantity += 1;
        saveCart(cart);
        renderCartItems();
    }
}

// Decrement quantity
function decrementQuantity(index) {
    const cart = getCart();
    if (cart[index]) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            saveCart(cart);
            renderCartItems();
        } else {
            removeItem(index);
        }
    }
}

// Remove item from cart
function removeItem(index) {
    const cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    renderCartItems();
}

// Update order summary
function updateOrderSummary() {
    const cart = getCart();
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const taxRate = 0.0925; // 9.25% tax
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    document.getElementById('subtotalAmount').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('taxAmount').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('totalAmount').textContent = `$${total.toFixed(2)}`;
}

// Handle checkout form submission
document.addEventListener('DOMContentLoaded', function() {
    renderCartItems();

    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const cart = getCart();
            if (cart.length === 0) {
                alert('Your cart is empty! Please add items before checking out.');
                return;
            }

            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                notes: document.getElementById('notes').value,
                cart: cart,
                subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
                tax: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 0.0925,
                total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) * 1.0925
            };

            // In a real application, this would send data to a server
            console.log('Order submitted:', formData);

            // Show success message
            showOrderConfirmation(formData);

            // Clear cart
            clearCart();
        });
    }
});

// Show order confirmation message
function showOrderConfirmation(orderData) {
    const container = document.querySelector('.checkout-container');
    container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
            <div style="font-size: 80px; margin-bottom: 2rem;">✅</div>
            <h2 style="font-size: 3.2rem; font-weight: 700; color: var(--color-red); margin-bottom: 1rem;">
                Order Received!
            </h2>
            <p style="font-size: 1.8rem; color: var(--color-text-secondary); margin-bottom: 2.4rem;">
                Thank you, ${orderData.name}! We've received your order.
            </p>
            <div style="background: white; border-radius: var(--radius-lg); padding: 2.4rem; max-width: 600px; margin: 0 auto 2.4rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: left;">
                <h3 style="font-size: 2rem; font-weight: 700; margin-bottom: 1.6rem;">Order Summary</h3>
                ${orderData.cart.map(item => `
                    <div style="display: flex; justify-content: space-between; padding: 0.8rem 0; border-bottom: 1px solid var(--color-gray-light);">
                        <span>${item.productName} (${item.size}) x${item.quantity}</span>
                        <span style="font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                `).join('')}
                <div style="display: flex; justify-content: space-between; padding: 1.6rem 0 0; font-size: 1.8rem; font-weight: 700; color: var(--color-red);">
                    <span>Total:</span>
                    <span>$${orderData.total.toFixed(2)}</span>
                </div>
            </div>
            <p style="font-size: 1.6rem; color: var(--color-text-secondary); margin-bottom: 2.4rem;">
                We'll contact you at <strong>${orderData.email}</strong> or <strong>${orderData.phone}</strong> to arrange pickup/delivery and payment.
            </p>
            <a href="shop.html" class="btn btn-primary btn-lg">Continue Shopping</a>
        </div>
    `;
}
