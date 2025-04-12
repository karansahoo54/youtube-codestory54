// Example JavaScript for the Netflix text animation (script.js)

// If you want to trigger the animation on a specific event, like a button click:

// const animateButton = document.getElementById('animate-button');
// const letters = document.querySelectorAll('.letter');

// animateButton.addEventListener('click', () => {
//   letters.forEach(letter => {
//     letter.style.animation = 'none'; // Reset animation
//     void letter.offsetWidth; // Trigger reflow to restart animation
//     letter.style.animation = null; // Reapply animation
//   });
// });

// Or, if you want to add more complex animations using JavaScript:

const letters = document.querySelectorAll('.letter');

letters.forEach((letter, index) => {
  letter.addEventListener('mouseover', () => {
    letter.style.transition = 'transform 0.3s ease-in-out, color 0.3s ease-in-out';
    letter.style.transform = 'scale(1.2)';
    letter.style.color = 'yellow'; 
  });

  letter.addEventListener('mouseout', () => {
    letter.style.transition = 'transform 0.3s ease-in-out, color 0.3s ease-in-out';
    letter.style.transform = 'scale(1)';
    letter.style.color = 'red'; 
  });

 
    setInterval(() => {
        const randomRotation = (Math.random() - 0.5) * 20; 
        letter.style.transform = `rotate(${randomRotation}deg)`;
    }, 2000 + (index * 100)); 
});


function changeAnimation(){
  letters.forEach(letter => {
    if(letter.classList.contains("alternate")){
      letter.classList.remove("alternate")
    } else {
      letter.classList.add("alternate")
    }

  })
}

//Example css to use with the above function.
/*
.alternate {
    animation: alternateAnimation 1.5s forwards var(--delay);
}

@keyframes alternateAnimation{
  0% {
      opacity: 0;
      transform: translateY(-50px);
  }
  60% {
      opacity: 1;
      transform: translateY(0);
  }
  100% {
      opacity: 1;
      transform: translateY(0);
  }
}

*/