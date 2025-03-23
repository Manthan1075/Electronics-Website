document.addEventListener('DOMContentLoaded', () => {
    const orderData = localStorage.getItem('ProductOdered');
    if (orderData) {
        const order = JSON.parse(orderData);
        createOrderCard(order);
    }else {
    const emptyOrderMessage = document.createElement('div');
    emptyOrderMessage.className = 'order-card empty-order-card';
    emptyOrderMessage.innerHTML = `
        <div class="card-header">
            <h2>Order Details</h2>
        </div>
        <div class="section empty-order">
            <div class="empty-order-content">
                <i class="fas fa-box-open empty-order-icon"></i>
                <h3>No Orders Found</h3>
                <p class="empty-order-text">It looks like you haven't placed any orders yet. Start exploring our products and make your first purchase!</p>
                <a href="Home.html" class="shop-now-btn">
                    <i class="fas fa-shopping-cart"></i>
                    Start Shopping
                </a>
            </div>
        </div>
    `;
    document.getElementById('order-details-container').appendChild(emptyOrderMessage);
    }
});

function createOrderCard(order) {
    const card = document.createElement('div');
    card.className = 'order-card';
    
    card.innerHTML = `
      <div class="card-header">
        <h2>Order Details</h2>
        <div class="order-number">Order #${Math.floor(100000 + Math.random() * 900000)}</div>
        <button class="cancel-order-btn">Cancel Order</button>
      </div>
      
      <div class="section customer-info">
        <h3>Customer Information</h3>
        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">Name</div>
            <div class="info-value">${order.customer.name}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Email</div>
            <div class="info-value">${order.customer.email}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Phone</div>
            <div class="info-value">${order.customer.phone}</div>
          </div>
          <div class="info-item">
            <div class="info-label">Shipping Address</div>
            <div class="info-value">${order.customer.address}</div>
          </div>
        </div>
      </div>
      
      <div class="section products-info">
        <h3>Products Ordered</h3>
        <div class="product-list">
          ${order.products.map(product => `
            <div class="product-item">
              <img class="product-img" src="${product.img}" alt="${product.name}">
              <div class="product-details">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="section order-summary">
        <h3>Order Summary</h3>
        <div class="summary-item">
          <span class="summary-label">Order Date</span>
          <span class="summary-value">${new Date(order.orderDate).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Payment Method</span>
          <span class="summary-value">${order.paymentMethod}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Subtotal</span>
          <span class="summary-value">${order.totalAmount}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Shipping</span>
          <span class="summary-value">${order.shippingCost || "$0.00"}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Tax</span>
          <span class="summary-value">${order.tax || "$0.00"}</span>
        </div>
        <div class="total-row">
          <span class="total-label">Total</span>
          <span class="total-value">${order.totalAmount}</span>
        </div>
      </div>
    `;
    
    const cancelBtn = card.querySelector('.cancel-order-btn');
    cancelBtn.addEventListener('click', () => {
        const confirmed = confirm("Are you sure you want to cancel this order? This action cannot be undone.");
        if (confirmed) {
            localStorage.removeItem('ProductOdered');
            card.remove();
            const emptyOrderMessage = document.createElement('div');
            emptyOrderMessage.className = 'order-card empty-order-card';
            emptyOrderMessage.innerHTML = `
                <div class="card-header">
                    <h2>Order Details</h2>
                </div>
                <div class="section empty-order">
                    <div class="empty-order-content">
                        <i class="fas fa-box-open empty-order-icon"></i>
                        <h3>No Orders Found</h3>
                        <p class="empty-order-text">It looks like you haven't placed any orders yet. Start exploring our products and make your first purchase!</p>
                        <a href="Home.html" class="shop-now-btn">
                            <i class="fas fa-shopping-cart"></i>
                            Start Shopping
                        </a>
                    </div>
                </div>
            `;
            document.getElementById('order-details-container').appendChild(emptyOrderMessage);
        }
    });


    document.getElementById('order-details-container').appendChild(card);
  }