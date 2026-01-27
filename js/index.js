//Reviews Section 
const reviewCards = document.querySelectorAll('.review-card');
const dots = document.querySelectorAll('.dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const reviewsContainer = document.querySelector('.reviews-container');

let currentIndex = 0;

//This function updates which review card is actively being read by users
function activatingCard(index){
    reviewCards.forEach(card => {
        card.classList.remove('featured');
    })
    reviewCards[index].classList.add('featured');

    dots.forEach(dot => {
        dot.classList.remove('active');
    })
    dots[index].classList.add('active');

    const cardWidth = reviewCards[0].offsetWidth;
    const gap = 32;
    const scrollPosition = (cardWidth + gap) * index;

    reviewsContainer.scrollTo({
        left: scrollPosition,
        behavior:'smooth'
    });
}

//Button Activation
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviewCards.length;
    activatingCard(currentIndex);
});
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviewCards.length;
    activatingCard(currentIndex);
});

//Dot Clicks
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        activatingCard(currentIndex);
    });
});

activatingCard(0);