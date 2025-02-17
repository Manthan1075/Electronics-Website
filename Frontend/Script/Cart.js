

const productData = JSON.parse(localStorage.getItem('selectedProduct'));
const cardSection = document.querySelector(".cart-section");

function createCard() {
        
    const card = document.createElement('div');

    card.innerHTML = `
        <div class="product-card">
            <img src="${productData.img}" alt="${productData.name}">
            <div class="product-details">
                <h3 class="product-name">${productData.name}</h3>
                <p class="product-price">Price: ${productData.price}</p>
                <div class="description >  
                <p class="product-description">Description: ${productData.name} - A high-quality product</p>
                <p>Trusted and High-Quality Product</p>
                <p>Verified Seller | Authentic Merchandise</p>
                </div>
            </div>
        </div>
    `
    cardSection.appendChild(card);
    
}

if (!productData) {
    cardSection.appendChild(document.createTextNode('No products in cart'));
}else{
    createCard()
}

// // card.innerHTML = `

// `