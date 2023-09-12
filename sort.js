document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sort-price");
    const productsContainer = document.querySelector(".product-container");
    let ascendingSort = true;

    sortButton.addEventListener("click", function () {
        ascendingSort = !ascendingSort;
        sortProducts();
    });

    function sortProducts() {
        const products = Array.from(productsContainer.querySelectorAll(".product"));
        products.sort(function (a, b) {
            const priceA = parseFloat(a.dataset.price);
            const priceB = parseFloat(b.dataset.price);
            if (ascendingSort) {
                return priceA - priceB;
            } else {
                return priceB - priceA;
            }
        });

        productsContainer.innerHTML = "";
        products.forEach(function (product) {
            productsContainer.appendChild(product);
        });

        sortButton.textContent = ascendingSort ? "Цена ↑" : "Цена ↓";
    }

    sortProducts();
});
