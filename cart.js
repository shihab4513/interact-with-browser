
const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    // console.log(product+" "+quantity);
    // displayProduct(product, quantity);
    saveProductLocalStorage(product, quantity);
}


const displayProduct = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `
        ${product} : ${quantity}
     
     `
    productContainer.appendChild(li);

}

const getStoredShoppingCard = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}


const saveProductLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCard();

    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);
    //   console.log(cartStringify);
}


const displayProductFromLocalStorage = () => {
    const storedCart = getStoredShoppingCard();
    // console.log(storedCart);
    for (const product in storedCart) {
        const quantity = storedCart[product];
        console.log(product + " : " + quantity);
        displayProduct(product + " : " + quantity)
    }
}
displayProductFromLocalStorage();