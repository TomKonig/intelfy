if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

document.addEventListener('DOMContentLoaded', function() {

    // --- 1. WORD CYCLER ANIMATION ---
    const words = ["over-engineering.", "dreaming too big.", "testing new limits.", "uber-caffeinating.", "doing tough math.", "debugging 'stuff'.", "innovating things.", "re-coding agents.", "making API calls.", "fine-tuning LLMs.", "merging commits.", "stackOverflowing."];
    const cycler = document.getElementById('word-cycler');
    let currentIndex = 0;

    // Populate the cycler with all words
    words.forEach(word => {
        const span = document.createElement('span');
        span.textContent = word;
        cycler.appendChild(span);
    });

    // Set interval to change the word
    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        const offset = -currentIndex * cycler.firstElementChild.clientHeight;
        cycler.style.transform = `translateY(${offset}px)`;
    }, 3500); // Change word every 3.5 seconds


    // --- 2. SHOWCASE SLIDER ---
    const sliderContent = [
        {
            image: '<img src="1.png" alt="Gift Guide landing page">',
            headline: 'Et voilà! An AI gift guide. But wait!',
            text: 'On the surface, this seems like a pretty simple web app. You open the site, you answer a few questions, we recommend the perfect gift for your mom, your partner, whomever it is you like on this particular day.'
        },
        {
            image: '<img src="2.png" alt="A screenshot from our theoretical documentation.">',
            headline: 'But you\'re not seeing the full story.',
            text: 'See, it turns out \'perfect\' is kind of a high bar. You can\'t just guesstimate psychology and consumer preferences. We tried -- no dice. So, we had to go draw up some pretty advanced math and complex heuristics.'
        },
        {
            image: '<img src="3.png" alt="A sample of the math.">',
            headline: 'Part logic, part AI, part magic.',
            text: 'We are not just making a gift guide. We\'re breaking out an mind-melting cocktail of Thompson Sampling, TF-IDF analysis, machine learning and LLMs to solve the famous "Multi-Armed Bandit" problem for eCommerce.'
        },
        {
            image: '<img src="4.png" alt="This is not even the full meta-data for a single product.">',
            headline: 'Automation, automation.',
            text: 'Plus -- we\'re automating the entire end-to-end optimization, SEO, SEM and maintenance flow, through agentic AI. Near-zero human input (when we\'re done). It is quite something. It\'ll be worth the wait.'
        }
    ];

const imageContainer = document.getElementById('slider-image');
const textContainer = document.getElementById('slider-text-content');
const navDots = document.querySelectorAll('.dot');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentSliderIndex = 0;

function handleButtonStates(index) {
    prevButton.disabled = index === 0;
    nextButton.disabled = index === sliderContent.length - 1;
}

function updateSlider(index) {
    // Add fading class to trigger fade-out
    textContainer.classList.add('fading');

    // Wait for the fade-out transition to finish
    setTimeout(() => {
        // Update content
        imageContainer.innerHTML = sliderContent[index].image;
        textContainer.innerHTML = `<h2>${sliderContent[index].headline}</h2><p>${sliderContent[index].text}</p>`;

        // Remove fading class to trigger fade-in
        textContainer.classList.remove('fading');
    }, 400);

    // Update active dot
    navDots.forEach(dot => dot.classList.remove('active'));
    document.querySelector(`.dot[data-index="${index}"]`).classList.add('active');

    // Update button disabled states
    handleButtonStates(index);
}

// Add click event listeners to dots
navDots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentSliderIndex = parseInt(dot.getAttribute('data-index'));
        updateSlider(currentSliderIndex);
    });
});

// Add click event listeners to arrow buttons
nextButton.addEventListener('click', () => {
    if (currentSliderIndex < sliderContent.length - 1) {
        currentSliderIndex++;
        updateSlider(currentSliderIndex);
    }
});

prevButton.addEventListener('click', () => {
    if (currentSliderIndex > 0) {
        currentSliderIndex--;
        updateSlider(currentSliderIndex);
    }
});
  
  const videoElement = document.getElementById('background-video');
  const videoElementFallback = document.getElementById('hero-video-fallback');

  // If the video element doesn't exist, do nothing.
  if (!videoElement) {
    return;
  }
   
  const promise = videoElement.play();
   
  if (promise !== undefined) {
    promise.catch(error => {
      // We only care about the error where the browser prevents autoplay
      if (error.name === "NotAllowedError") {
        console.log("Autoplay was prevented, showing fallback image.");
        
        // Remove the video from the document
        videoElement.remove();
        
        // Show the fallback image by removing the 'hidden' class.
        // All the necessary styles are already applied via the 'hero-background' class.
        videoElementFallback.classList.remove('hidden');
      } else {
        // Log other potential errors, e.g., video file not found
        console.error("An error occurred while trying to play the video:", error);
      }
    });
    // No .then() block is needed here.
  };

// Set initial button states on page load
handleButtonStates(currentSliderIndex);
});