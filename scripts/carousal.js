const carouselData = [
  {
    category: "Moisturizers",
    title: "Glow Guard Serum",
    price: "$32",
    image: "../assets/images/carousal/1.png",
  },
  {
    category: "Cleansers",
    title: "Glow Guard Serum",
    price: "$32",
    image: "../assets/images/carousal/2.png",
  },
  {
    category: "Masks",
    title: "Glow Guard Serum",
    price: "$32",
    image: "../assets/images/carousal/3.png",
  },
  {
    category: "Serums",
    title: "Glow Guard Serum",
    price: "$32",
    image: "../assets/images/carousal/4.png",
  },
  {
    category: "Masks",
    title: "Glow Guard Serum",
    price: "$32",
    image: "../assets/images/carousal/1.png",
  },
  {
    category: "Serums",
    title: "Glow Guard Serum",
    price: "$32",
    image: "../assets/images/carousal/3.png",
  },
];

const carouselContainer = document.getElementById("carousel");

const renderCarouselItems = (data) => {
  data.forEach((item) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item";

    carouselItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <p class="category">${item.category}</p>
      <h3 class="product-title">${item.title}</h3>
      <p class="price">${item.price}</p>
    `;

    carouselContainer.appendChild(carouselItem);
  });
};

renderCarouselItems(carouselData);

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

prevBtn.addEventListener("click", () => {
  carouselContainer.scrollBy({
    left: -300,
    behavior: "smooth",
  });
});

nextBtn.addEventListener("click", () => {
  carouselContainer.scrollBy({
    left: 300,
    behavior: "smooth",
  });
});
