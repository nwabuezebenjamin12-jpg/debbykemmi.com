// Product Database
const products = [
    // Electronics
    { id: 1, name: "Wireless Earbuds Pro", category: "electronics", price: 29.99, originalPrice: 59.99, rating: 4.5, reviews: 1234, icon: "🎧", discount: "50%" },
    { id: 2, name: "Smart Watch Ultra", category: "electronics", price: 49.99, originalPrice: 99.99, rating: 4.7, reviews: 892, icon: "⌚", discount: "50%" },
    { id: 3, name: "Bluetooth Speaker", category: "electronics", price: 24.99, originalPrice: 49.99, rating: 4.3, reviews: 567, icon: "🔊", discount: "50%" },
    { id: 4, name: "Phone Stand Holder", category: "electronics", price: 9.99, originalPrice: 19.99, rating: 4.6, reviews: 2341, icon: "📱", discount: "50%" },
    { id: 5, name: "USB-C Cable 3-Pack", category: "electronics", price: 12.99, originalPrice: 24.99, rating: 4.4, reviews: 3456, icon: "🔌", discount: "48%" },
    { id: 6, name: "Laptop Stand", category: "electronics", price: 34.99, originalPrice: 69.99, rating: 4.8, reviews: 678, icon: "💻", discount: "50%" },
    
    // Fashion
    { id: 7, name: "Summer Dress", category: "fashion", price: 19.99, originalPrice: 39.99, rating: 4.5, reviews: 432, icon: "👗", discount: "50%" },
    { id: 8, name: "Casual Sneakers", category: "fashion", price: 34.99, originalPrice: 69.99, rating: 4.6, reviews: 876, icon: "👟", discount: "50%" },
    { id: 9, name: "Designer Sunglasses", category: "fashion", price: 14.99, originalPrice: 29.99, rating: 4.4, reviews: 543, icon: "🕶️", discount: "50%" },
    { id: 10, name: "Leather Handbag", category: "fashion", price: 39.99, originalPrice: 79.99, rating: 4.7, reviews: 234, icon: "👜", discount: "50%" },
    { id: 11, name: "Men's Watch", category: "fashion", price: 29.99, originalPrice: 59.99, rating: 4.5, reviews: 987, icon: "⌚", discount: "50%" },
    { id: 12, name: "Winter Jacket", category: "fashion", price: 59.99, originalPrice: 119.99, rating: 4.8, reviews: 345, icon: "🧥", discount: "50%" },
    
    // Home & Garden
    { id: 13, name: "LED String Lights", category: "home", price: 15.99, originalPrice: 31.99, rating: 4.6, reviews: 1567, icon: "💡", discount: "50%" },
    { id: 14, name: "Kitchen Knife Set", category: "home", price: 24.99, originalPrice: 49.99, rating: 4.7, reviews: 789, icon: "🔪", discount: "50%" },
    { id: 15, name: "Throw Pillow Cover", category: "home", price: 9.99, originalPrice: 19.99, rating: 4.4, reviews: 2345, icon: "🛋️", discount: "50%" },
    { id: 16, name: "Wall Clock Modern", category: "home", price: 19.99, originalPrice: 39.99, rating: 4.5, reviews: 456, icon: "🕐", discount: "50%" },
    { id: 17, name: "Plant Pot Set", category: "home", price: 17.99, originalPrice: 35.99, rating: 4.3, reviews: 678, icon: "🪴", discount: "50%" },
    { id: 18, name: "Storage Baskets", category: "home", price: 22.99, originalPrice: 45.99, rating: 4.6, reviews: 890, icon: "🧺", discount: "50%" },
    
    // Beauty
    { id: 19, name: "Makeup Brush Set", category: "beauty", price: 16.99, originalPrice: 33.99, rating: 4.7, reviews: 2134, icon: "💄", discount: "50%" },
    { id: 20, name: "Skincare Set", category: "beauty", price: 29.99, originalPrice: 59.99, rating: 4.8, reviews: 1876, icon: "🧴", discount: "50%" },
    { id: 21, name: "Hair Dryer Pro", category: "beauty", price: 39.99, originalPrice: 79.99, rating: 4.6, reviews: 543, icon: "💨", discount: "50%" },
    { id: 22, name: "Nail Polish Set", category: "beauty", price: 12.99, originalPrice: 25.99, rating: 4.4, reviews: 987, icon: "💅", discount: "50%" },
    { id: 23, name: "Face Masks 50-Pack", category: "beauty", price: 14.99, originalPrice: 29.99, rating: 4.5, reviews: 3456, icon: "😷", discount: "50%" },
    { id: 24, name: "Perfume Set", category: "beauty", price: 34.99, originalPrice: 69.99, rating: 4.7, reviews: 234, icon: "🌸", discount: "50%" },
    
    // Sports
    { id: 25, name: "Yoga Mat Premium", category: "sports", price: 19.99, originalPrice: 39.99, rating: 4.6, reviews: 1234, icon: "🧘", discount: "50%" },
    { id: 26, name: "Resistance Bands", category: "sports", price: 14.99, originalPrice: 29.99, rating: 4.5, reviews: 876, icon: "💪", discount: "50%" },
    { id: 27, name: "Water Bottle 32oz", category: "sports", price: 12.99, originalPrice: 25.99, rating: 4.7, reviews: 2345, icon: "💧", discount: "50%" },
    { id: 28, name: "Fitness Tracker", category: "sports", price: 39.99, originalPrice: 79.99, rating: 4.4, reviews: 567, icon: "⌚", discount: "50%" },
    { id: 29, name: "Jump Rope", category: "sports", price: 9.99, originalPrice: 19.99, rating: 4.3, reviews: 789, icon: "🪢", discount: "50%" },
    { id: 30, name: "Dumbbell Set", category: "sports", price: 49.99, originalPrice: 99.99, rating: 4.8, reviews: 345, icon: "🏋️", discount: "50%" },
];

let cart = [];
let currentCategory = 'all';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartUI();
});

// Display Products
function displayProducts(productList) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';
    
    productList.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" onclick="showProductDetails(${product.id})">
                ${product.icon}
                <div class="discount-badge">${product.discount} OFF</div>
            </div>
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                </div>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                    <span>${product.rating} (${product.reviews})</span>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Filter by Category
function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter products
    if (category === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Search Products
function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
}

// Allow search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts();
        }
    });
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
    
    // Show brief animation/feedback
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = 'Added! ✓';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Update Cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Update count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Update total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Toggle Cart
function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    sidebar.classList.toggle('open');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order!\n\nTotal: $${total.toFixed(2)}\n\nThis is a demo - no actual payment was processed.`);
    cart = [];
    updateCartUI();
    toggleCart();
}

// Show Product Details
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-product-details">
            <div class="modal-product-image">${product.icon}</div>
            <h2>${product.name}</h2>
            <div class="product-price">
                <span class="current-price">$${product.price.toFixed(2)}</span>
                <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                <span class="discount-badge">${product.discount} OFF</span>
            </div>
            <div class="rating">
                <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}</span>
                <span>${product.rating} out of 5 (${product.reviews} reviews)</span>
            </div>
            <p><strong>Category:</strong> ${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</p>
            <p>Amazing quality product at an unbeatable price! This ${product.name} is one of our best sellers with thousands of satisfied customers.</p>
            <ul>
                <li>✓ Fast & Free Shipping</li>
                <li>✓ 30-Day Money Back Guarantee</li>
                <li>✓ Premium Quality</li>
                <li>✓ Customer Support 24/7</li>
            </ul>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id}); closeModal();">Add to Cart</button>
        </div>
    `;
    
    modal.classList.add('open');
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('productModal');
    modal.classList.remove('open');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('productModal');
    if (event.target == modal) {
        closeModal();
    }
}
