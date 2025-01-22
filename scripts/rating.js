const width = window.innerWidth;
console.log(width);

document.addEventListener("DOMContentLoaded", () => {
    const testimonialsContainer = document.getElementById("testimonial-container");

    fetch("../data/testimonials.json")
        .then(response => response.json())
        .then(testimonials => {
            testimonials.forEach(testimonial => {
                const testimonialElement = document.createElement("div");
                testimonialElement.classList.add("testimonial");

                testimonialElement.innerHTML = `
                    <img src="${testimonial.image}" alt="${testimonial.name}">
                    <div class="rating">${testimonial.rating}</div>
                    <p class="text-lg text-center">${testimonial.text}</p>
                    <h2 class="text-2xl text-center">${testimonial.name}, ${testimonial.title}</h2>
                    <p>${testimonial.work} </p>
                `;

                testimonialsContainer.appendChild(testimonialElement);
            });

            let currentIndex = 0;

            function showNextTestimonial() {
                const totalTestimonials = testimonials.length;
                const visibleTestimonials = 3;

                // Duplicate the first set of testimonials for smooth looping
                if (currentIndex === 0) {
                    for (let i = 0; i < visibleTestimonials; i++) {
                        testimonialsContainer.appendChild(testimonialsContainer.children[i].cloneNode(true));
                    }
                }

                const translateX = -(currentIndex * (100 / visibleTestimonials));
                testimonialsContainer.style.transform = `translateX(${translateX}%)`;
                currentIndex = (currentIndex + 1) % (totalTestimonials + visibleTestimonials);

                // Remove the extra duplicates when we return to the beginning
                if (currentIndex === 0) {
                    setTimeout(() => {
                        for (let i = 0; i < visibleTestimonials; i++) {
                            testimonialsContainer.removeChild(testimonialsContainer.lastChild);
                        }
                        testimonialsContainer.style.transition = 'none';
                        testimonialsContainer.style.transform = 'translateX(0%)';
                        setTimeout(() => {
                            testimonialsContainer.style.transition = 'transform 0.5s ease-in-out';
                        }, 0);
                    }, 5000);
                }
            }

            setInterval(showNextTestimonial, 500000);
        })
        .catch(error => console.error("Error loading testimonials:", error));
});
