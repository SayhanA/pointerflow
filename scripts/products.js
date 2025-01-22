document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("product-grid");

  fetch("../data/products.json")
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <p class="text-sm category">${product.category}</p>
                    <p class="text-2xl">${product.name}</p>
                    <p class="price">${product.price}</p>
                `;

        productGrid.appendChild(productCard);
      });
    })
    .catch((error) => console.error("Error loading products:", error));
});
