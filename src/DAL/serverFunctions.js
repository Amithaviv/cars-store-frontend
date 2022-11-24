export function getProducts() {
    return fetch("http://localhost:3100/api/items/getItems",{credentials:"include"})
        .then(response => response.json())
        .then(products => (products))
}