// Datos de productos
const products = [
    { name: 'Manzana', category: 'frutas' },
    { name: 'Banana', category: 'frutas' },
    { name: 'Naranja', category: 'frutas' },
    { name: 'Pera', category: 'frutas' },
    { name: 'Lechuga', category: 'verduras' },
    { name: 'Tomate', category: 'verduras' },
    { name: 'Papa', category: 'verduras' },
    { name: 'Zanahoria', category: 'verduras' },
    { name: 'Pimiento', category: 'verduras' },
    { name: 'Brócoli', category: 'verduras' }
];

// Función para mostrar productos
function showProducts(products) {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerText = product.name;
        productList.appendChild(productItem);
    });
}

// Función para filtrar productos
function filterProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase();

    let filteredProducts = products.filter(product => {
        return (product.name.toLowerCase().includes(searchInput) || searchInput === '') &&
               (product.category === categoryFilter || categoryFilter === 'all');
    });

    showProducts(filteredProducts);
}

// Mostrar todos los productos al cargar la página
showProducts(products);

// Event listeners para el filtro
document.getElementById('searchInput').addEventListener('input', filterProducts);
document.getElementById('categoryFilter').addEventListener('change', filterProducts);

// Event listener para el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const commune = document.getElementById('commune').value;

    const message = `Nombre: ${name}\nCorreo electrónico: ${email}\nDirección: ${address}\nComuna: ${commune}`;

    alert(message);
    console.log(message);
});
