const screenCarouselData = [
  {
    image: "../assets/images/screen-carousal/1.png",
  },
  {
    image: "../assets/images/screen-carousal/2.png",
  },
  {
    image: "../assets/images/screen-carousal/1.png",
  },
  {
    image: "../assets/images/screen-carousal/2.png",
  },
  {
    image: "../assets/images/screen-carousal/1.png",
  },
  {
    image: "../assets/images/screen-carousal/2.png",
  },
];

const screenCarouselContainer = document.getElementById("screen-carousal");

const renderScreenCarouselItems = (data) => {
  data.forEach((item) => {
    const carouselItem = document.createElement("div");
    carouselItem.className = "screen-carousel-item";

    carouselItem.innerHTML = `
        <img src="${item.image}" alt="Carousel Image" />
      `;

    screenCarouselContainer.appendChild(carouselItem);
  });
};

renderScreenCarouselItems(screenCarouselData);

const calculateScrollDistance = () => {
  const firstItem = document.querySelector(".screen-carousel-item");
  return firstItem ? firstItem.offsetWidth + 24 : 0;
};

const prevScreanCareBtn = document.querySelector(".screen-prev-btn");
const nextScreanCareBtn = document.querySelector(".screen-next-btn");

prevScreanCareBtn.addEventListener("click", () => {
  const scrollDistance = calculateScrollDistance();
  screenCarouselContainer.scrollBy({
    left: -scrollDistance-0,
    behavior: "smooth",
  });
});

nextScreanCareBtn.addEventListener("click", () => {
  const scrollDistance = calculateScrollDistance();
  screenCarouselContainer.scrollBy({
    left: scrollDistance-0,
    behavior: "smooth",
  });
});
