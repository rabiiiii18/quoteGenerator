const increase = document.querySelector(".plus");
const decrease = document.querySelector(".minus");

const quotetext = document.querySelector(".quote");
const toggle=document.querySelector('.bar');
const ball=document.querySelector('.ball');
const container=document.querySelector('.quoteBox')
toggle.addEventListener('click', () => {
    const isActive = ball.classList.contains('active');
    if (isActive) {
        ball.style.transform = 'translateX(0)';
        ball.classList.remove('active');
        container.style.background = '#bbbbbb'; 
        container.style.color="black"

    } else {
        ball.style.transform = 'translateX(100%)';
        ball.classList.add('active');
        container.style.background = '#1e1e1e'; 
        container.style.color='#bbb'
    }
});



let currentSize;

function updateSize() {
  if (window.innerWidth > 350) {
    currentSize = 28;
  } else {
    currentSize = 20; // <-- example value for smaller screens
  }
  console.log('Current size:', currentSize);
}

// Run once when the page loads
updateSize();

// Run again every time the window is resized
window.addEventListener('resize', updateSize);


function updateFontSize() {
  quotetext.style.fontSize = `${currentSize}px`;
}

increase.addEventListener("click", () => {
  if (currentSize < 50) {
    currentSize += 2;
    updateFontSize();
  }
});
decrease.addEventListener("click", () => {
  if (currentSize > 8) {
    currentSize -= 2;
    updateFontSize();
  }
});
