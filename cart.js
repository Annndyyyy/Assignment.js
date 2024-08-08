function renderCart() {
    const cartItems = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItems.innerHTML = ''; // Clear the container

    cart.forEach(user => {
        const userCard = document.createElement('div');
        userCard.classList.add('user-card');

        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>${user.email}</p>
            <button onclick="removeFromCart(${user.id})">Delete</button>
        `;

        cartItems.appendChild(userCard);
    });
}

function removeFromCart(userId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(user => user.id !== userId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart(); // Re-render the cart after removal
}

renderCart();
