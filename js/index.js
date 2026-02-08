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

//Activating Switch Button to translate content 
document.getElementById('langToggle').addEventListener('change', function(){
    const aboutDescription = document.querySelector('.about-description');
    const intro = document.querySelector('.intro');

    if(this.checked){
        intro.textContent = "Del Corazón de Morelos a tu Mesa";
        aboutDescription.textContent = "En la Cocina de María, creemos que las mejores comidas son aquellas que cuentan una historia. Destacamos la importancia de llevar hasta ti los sabores auténticos y reconfortantes de México, utilizando técnicas tradicionales y los mismos sabores que han llenado nuestra cocina familiar por generaciones. Cada platillo es un pedacito de hogar, hecho con amor y servido con herencia."
    }
    else{
        location.reload();
    }
})

//Activating submit button in contact form 
document.getElementById('submit-button').addEventListener('click', function(e){
    e.preventDefault();

    const form = document.querySelector('.contact-container form');
    const submitButton = document.getElementById('submit-button');
    const container = document.querySelector('.contact-container');
    
    // Store original height to prevent layout shift
    const originalHeight = container.offsetHeight;
    container.style.minHeight = originalHeight + 'px';
    
    // Hide the form and submit button
    form.style.display = 'none';
    submitButton.style.display = 'none';

    //Creating thank you message
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'thank-you-message';
    thankYouMessage.innerHTML = '<i class="fa-solid fa-check"></i> Thanks for your response! We\'ll get back to you shortly.';

    //inserting the message in the container
    container.appendChild(thankYouMessage);

    //Optional: Show form again after 5 seconds and remove message
    setTimeout(function(){
        thankYouMessage.style.opacity ='0';
        setTimeout(function(){
            thankYouMessage.remove();
            form.style.display = '';
            submitButton.style.display = '';
            container.style.minHeight = '';
            form.reset();
        }, 500);
    }, 5000);
});
  