const galleryCarouselData = [
    { image: "../assets/images/gallery/1.png" },
    { image: "../assets/images/gallery/2.png" },
    { image: "../assets/images/gallery/2.png" },
    { image: "../assets/images/gallery/2.png" },
    { image: "../assets/images/gallery/3.png" },
    { image: "../assets/images/gallery/2.png" }
];

const galleryCarouselContainer = document.getElementById("gallery-carousel");

const renderGalleryCarouselItems = (data) => {
    data.forEach((item) => {
        const carouselItem = document.createElement("div");
        carouselItem.className = "gallery-carousel-item";

        carouselItem.innerHTML = `<img src="${item.image}" alt="Gallery Image" />`;

        galleryCarouselContainer.appendChild(carouselItem);
    });
};

renderGalleryCarouselItems(galleryCarouselData);

const calculateGalleryScrollDistance = () => {
    const firstItem = document.querySelector(".gallery-carousel-item");
    return firstItem ? firstItem.offsetWidth + 24 : 0;
};

const prevGalleryBtn = document.querySelector(".gallery-prev-btn");
const nextGalleryBtn = document.querySelector(".gallery-next-btn");

prevGalleryBtn.addEventListener("click", () => {
    const scrollDistance = calculateGalleryScrollDistance();
    galleryCarouselContainer.scrollBy({
        left: -scrollDistance,
        behavior: "smooth"
    });
});

nextGalleryBtn.addEventListener("click", () => {
    const scrollDistance = calculateGalleryScrollDistance();
    galleryCarouselContainer.scrollBy({
        left: scrollDistance,
        behavior: "smooth"
    });
});
