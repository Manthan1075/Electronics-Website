document.addEventListener('DOMContentLoaded', function() {
    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    const cardSection = document.querySelector(".cart-section");
    
    function updatePriceSummary() {
        if (!productData) return;
        
        const priceText = productData.price;
        const priceValue = parseFloat(priceText.replace(/[^\d.]/g, ''));
        
        const subtotal = priceValue;
        const shipping = 50;
        const tax = subtotal * 0.18;
        const total = subtotal + shipping + tax;
        
        document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
        document.getElementById('shipping').textContent = `₹${shipping.toFixed(2)}`;
        document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
        document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
    }
    
    function createCard() {
        const card = document.createElement('div');
        
        
        const rating = Math.floor(Math.random() * 5) + 1; 
        const ratingStars = Array(5).fill('').map((_, i) => 
            i < rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>'
        ).join('');
        
        card.innerHTML = `
            <div class="product-card">
                <img src="${productData.img}" alt="${productData.name}">
                <div class="product-details">
                    <h3 class="product-name">${productData.name}</h3>
                    <div class="product-rating">
                        ${ratingStars}
                        <span>(${Math.floor(Math.random() * 500) + 50} reviews)</span>
                    </div>
                    <p class="product-price">${productData.price}</p>
                    <div class="description">  
                        <p><strong>Description:</strong> ${productData.name} - A high-quality product with premium features and excellent durability.</p>
                        <p><i class="fas fa-shield-alt"></i> Trusted and High-Quality Product</p>
                        <p><i class="fas fa-check-circle"></i> Verified Seller | Authentic Merchandise</p>
                        <p><i class="fas fa-truck"></i> Free shipping for orders above ₹500</p>
                    </div>
                </div>
                <button class="remove-btn" title="Remove item"><i class="fas fa-times"></i></button>
            </div>
        `;
        
        
        const removeBtn = card.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            localStorage.removeItem('selectedProduct');
            card.remove();
            cardSection.innerHTML = ''; 
            updatePriceSummary(); 
        });
        
        cardSection.appendChild(card);
    }
    
    if (!productData) {
        cardSection.innerHTML = ''; 
    } else {
        createCard();
        updatePriceSummary();
    }
    
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!productData) {
                alert('Your cart is empty. Please add products before checking out.');
                return;
            }
            
            const formData = new FormData(orderForm);
            const orderDetails = {
                customer: {
                    name: formData.get('fullName'),
                    email: formData.get('email'),
                    phone: formData.get('phoneNumber'),
                    address: formData.get('shippingAddress')
                },
                paymentMethod: formData.get('paymentMethod'),
                products: [productData],
                orderDate: new Date().toISOString(),
                totalAmount: document.getElementById('total').textContent
            };
            
            alert('Order placed successfully! Thank you for shopping with Digital Electronics.');
            
            localStorage.removeItem('selectedProduct');
            localStorage.setItem('ProductOdered',JSON.stringify(orderDetails))
            window.location.href = './Home.html';
        });
    }
});