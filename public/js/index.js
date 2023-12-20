function addProduct() {
    const productName = document.getElementById('productName').value;
    const productQuantity = parseInt(document.getElementById('productQuantity').value);
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    if (productName && productCategory && !isNaN(productPrice) && !isNaN(productQuantity) && productQuantity > 0) {
        const totalPrice = productPrice * productQuantity;
        products.push({
            name: productName,
            quantity: productQuantity,
            price: productPrice,
            totalPrice: totalPrice
        });
        displayProducts();
        calculateTotal();
        clearForm();
        updateProductNames();
    } else {
        alert('Please enter valid product details.');
    }
}

function calculatePrice() {
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);
    const totalPriceElement = document.getElementById('totalPrice');

    if (!isNaN(productPrice) && !isNaN(productQuantity) && productQuantity > 0) {
        const totalPrice = productPrice * productQuantity;
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    } else {
        totalPriceElement.textContent = '$0.00';
    }
}

function displayProducts() {
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';

    products.forEach((product, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${product.totalPrice.toFixed(2)}</td>
            <td><button onclick="removeProduct(${index})">Remove</button></td>
        `;
        productListElement.appendChild(row);
    });
}

function calculateTotal() {
    const totalAmountElement = document.getElementById('totalAmount');
    const total = products.reduce((sum, product) => sum + product.totalPrice, 0);
    totalAmountElement.textContent = total.toFixed(2);
}

function clearForm() {
    document.getElementById('productName').value = '';
    document.getElementById('productQuantity').value = '1';
    document.getElementById('productPrice').value = '';
}

function removeProduct(index) {
    products.splice(index, 1);
    displayProducts();
    calculateTotal();
    updateProductNames();
}

function updateProductNames() {
    const productNamesDatalist = document.getElementById('productNames');
    productNamesDatalist.innerHTML = '';

    const uniqueProductNames = [...new Set(products.map(product => product.name))];

    uniqueProductNames.forEach(name => {
        const option = document.createElement('option');
        option.value = name;
        productNamesDatalist.appendChild(option);
    });
}

function initializeProductList() {
    for (const category in predefinedProducts) {
        if (predefinedProducts.hasOwnProperty(category)) {
            const categoryProducts = predefinedProducts[category];
            categoryProducts.forEach(product => {
                products.push({ ...product, category: category, quantity: 1, totalPrice: product.price });
            });
        }
    }
    displayProducts();
    calculateTotal();
    updateProductNames();
}



// Event listener for arrow keys and Enter key
document.getElementById('productName').addEventListener('keydown', (event) => {
    const suggestions = document.querySelectorAll('#autocompleteList div');

    switch (event.key) {
        case 'ArrowUp':
            event.preventDefault();
            navigateSuggestions(-1, suggestions);
            break;

        case 'ArrowDown':
            event.preventDefault();
            navigateSuggestions(1, suggestions);
            break;

        case 'Enter':
            event.preventDefault();
            selectSuggestion(suggestions);
            break;

        default:
            break;
    }
});

function autocompleteProduct() {
    const input = document.getElementById('productName');
    const value = input.value.toLowerCase();
    const autocompleteList = document.getElementById('autocompleteList');
    autocompleteList.innerHTML = '';

    if (value.length === 0) {
        return;
    }

    const suggestions = products
        .map(product => product.name.toLowerCase())
        .filter(name => name.includes(value));

    suggestions.forEach((suggestion, index) => {
        const option = document.createElement('div');
        option.textContent = suggestion;
        option.addEventListener('click', () => {
            input.value = suggestion;
            autocompleteList.innerHTML = '';
            selectedSuggestionIndex = -1;
        });
        autocompleteList.appendChild(option);

        // Highlight the first suggestion by default
        if (index === 0) {
            option.classList.add('selected');
            selectedSuggestionIndex = 0;
        }
    });

    // Display the autocomplete list
    autocompleteList.style.display = suggestions.length > 0 ? 'block' : 'none';
}

function navigateSuggestions(direction, suggestions) {
    if (suggestions.length === 0) {
        return;
    }

    selectedSuggestionIndex += direction;

    if (selectedSuggestionIndex < 0) {
        selectedSuggestionIndex = suggestions.length - 1;
    } else if (selectedSuggestionIndex >= suggestions.length) {
        selectedSuggestionIndex = 0;
    }

    suggestions.forEach((suggestion, index) => {
        if (index === selectedSuggestionIndex) {
            suggestion.classList.add('selected');
            document.getElementById('productName').value = suggestion.textContent;
        } else {
            suggestion.classList.remove('selected');
        }
    });
}

function selectSuggestion(suggestions) {
    if (selectedSuggestionIndex !== -1) {
        document.getElementById('productName').value = suggestions[selectedSuggestionIndex].textContent;
        autocompleteList.innerHTML = '';
        selectedSuggestionIndex = -1;
    }
}

initializeProductList();