// Cart functionality for iPOP Gourmet Popcorn

// Get fundraiser attribution from URL or localStorage
function getFundraiserAttribution() {
    // First check URL
    const urlParams = new URLSearchParams(window.location.search);
    const fundraiserSlug = urlParams.get('fundraiser');

    if (fundraiserSlug) {
        // Store in localStorage for this session
        localStorage.setItem('ipop_current_fundraiser', fundraiserSlug);
        return fundraiserSlug;
    }

    // Otherwise check localStorage
    return localStorage.getItem('ipop_current_fundraiser') || null;
}

// Clear fundraiser attribution (call when cart is cleared)
function clearFundraiserAttribution() {
    localStorage.removeItem('ipop_current_fundraiser');
}

// Initialize cart from localStorage or create empty cart
function getCart() {
    const cartData = localStorage.getItem('ipopCart');
    return cartData ? JSON.parse(cartData) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('ipopCart', JSON.stringify(cart));
    updateCartBadge();
}

// Add item to cart
function addToCart(productName, size, price) {
    const cart = getCart();
    const fundraiser = getFundraiserAttribution();

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(
        item => item.productName === productName && item.size === size
    );

    if (existingItemIndex > -1) {
        // Increment quantity if item exists
        cart[existingItemIndex].quantity += 1;
    } else {
        // Add new item to cart (include fundraiser if present)
        const cartItem = {
            productName: productName,
            size: size,
            price: price,
            quantity: 1
        };

        // Add fundraiser attribution if exists
        if (fundraiser) {
            cartItem.fundraiser = fundraiser;
        }

        cart.push(cartItem);
    }

    saveCart(cart);
    showAddedToCartMessage(productName, size);
}

// Show a brief confirmation message when item is added
function showAddedToCartMessage(productName, size) {
    // Create message element
    const message = document.createElement('div');
    message.className = 'cart-message';
    message.innerHTML = `
        <div class="cart-message-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9 12l2 2 4-4"></path>
            </svg>
            <span><strong>${productName}</strong> (${size}) added to cart!</span>
        </div>
    `;

    // Add styles
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #32CD32;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(message);

    // Remove message after 3 seconds
    setTimeout(() => {
        message.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(message);
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    .cart-message-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .cart-message-content svg {
        flex-shrink: 0;
    }
`;
document.head.appendChild(style);

// Update cart badge with total item count
function updateCartBadge() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Find or create cart badge
    let badge = document.querySelector('.cart-badge');
    const cartIcon = document.querySelector('a[href="#cart"]');

    if (totalItems > 0) {
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-badge';
            badge.style.cssText = `
                position: absolute;
                top: -8px;
                right: -8px;
                background: #E63946;
                color: white;
                border-radius: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 12px;
                font-weight: 700;
            `;
            if (cartIcon) {
                cartIcon.style.position = 'relative';
                cartIcon.appendChild(badge);
            }
        }
        badge.textContent = totalItems;
    } else if (badge) {
        badge.remove();
    }
}

// Get cart total
function getCartTotal() {
    const cart = getCart();
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Remove item from cart
function removeFromCart(productName, size) {
    let cart = getCart();
    cart = cart.filter(item => !(item.productName === productName && item.size === size));
    saveCart(cart);
}

// Update item quantity
function updateQuantity(productName, size, newQuantity) {
    const cart = getCart();
    const item = cart.find(item => item.productName === productName && item.size === size);

    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productName, size);
        } else {
            item.quantity = newQuantity;
            saveCart(cart);
        }
    }
}

// Clear entire cart
function clearCart() {
    localStorage.removeItem('ipopCart');
    clearFundraiserAttribution();
    updateCartBadge();
}

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
});
