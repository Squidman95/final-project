
async function getAllProducts() {
    let response = await fetch('http://localhost:4000/products', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

async function getAllAnimals() {
    let response = await fetch('http://localhost:4000/animals', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

async function getAllCategories() {
    let response = await fetch('http://localhost:4000/categories', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

async function getAllSubCategories() {
    let response = await fetch('http://localhost:4000/subcategories', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

async function getSingleProduct(productID) {
    let response = await fetch(`http://localhost:4000/products/${productID}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET',
    });
    return await response.json();
}

export {getAllProducts, getAllAnimals, getAllCategories, getAllSubCategories, getSingleProduct}