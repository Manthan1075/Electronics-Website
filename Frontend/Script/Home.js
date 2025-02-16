const products = [
    { name: 'Headphone', img: '../Assets/Images/prod-1.webp', price: '6500₹' },
    { name: 'I-Phone 16', img: '../Assets/Images/prod-2.jpeg', price: '144499₹' },
    { name: 'Samsung s24 Ultra', img: '../Assets/Images/prod-3.jpeg', price: '135000₹' },
    { name: 'Hp Ryzen 5', img: '../Assets/Images/prod-4.jpeg', price: '59999₹' },
    { name: 'Gaming Mouse', img: '../Assets/Images/prod-5.webp', price: '3200₹' },
    { name: 'LG Washing Machine', img: '../Assets/Images/prod-6.jpeg', price: '36000₹' },
    { name: 'Whirlpool Washing Machine', img: '../Assets/Images/prod-7.jpeg', price: '24999₹' },
    { name: 'Vivo T3 5g', img: '../Assets/Images/prod-8.jpeg', price: '₹16000' },
    { name: 'Nokia Power 3', img: '../Assets/Images/prod-9.jpeg', price: '1400₹' },
    { name: 'Realme Earbuds', img: '../Assets/Images/prod-10.jpeg', price: '4999₹' },
    { name: 'LG Fridge', img: '../Assets/Images/prod-11.jpeg', price: '17800₹' },
    { name: 'Havells Oven', img: '../Assets/Images/prod-12.jpeg', price: '3600₹' },
    { name: 'Macbook Air 2', img: '../Assets/Images/prod-13.jpeg', price: '132500₹' },
    { name: 'Xiaomi TV 4', img: '../Assets/Images/prod-14.jpeg', price: '25000₹' },
    { name: 'Party Speaker', img: '../Assets/Images/prod-15.jpeg', price: '6050₹' },
  ];
 document.querySelector(".loginBtn").addEventListener("click",()=>{
    window.location.href = "../Pages/Register.html";
  })
  
  const cardSection = document.querySelector('.card-section');
  
  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');
  
    card.innerHTML = `
     <section class="card-section">
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}">
     <div class="product-details">
      <h3 class="product-name">${product.name}</h3>
      <p class="product-price">Price: ${product.price}</p>
    </div>
    <button class="buy-btn">Add To Cart</button>
  </div>
</section>

    `;
  
    cardSection.appendChild(card);
  });

  export const user = {
    name: 'John Doe',
    age: 25,
    email: 'manthan'
  }