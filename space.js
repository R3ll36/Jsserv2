// Function to load and play the Lottie animation
function playLottieAnimation() {
  // Load the Lottie animation
  const animationContainer = document.getElementById('lottie-container');
  const animationData = {
    container: animationContainer,
    renderer: 'svg',
    loop: false, // Set to false to play the animation once
    autoplay: false, // Set autoplay to false initially
    path: 'https://uploads-ssl.webflow.com/64339668e5bde96984e41146/64eef1a47046f4b5858347c0_SP-CE_LogoWebsite-v3.json', // Replace with your animation's URL
  };
  const anim = lottie.loadAnimation(animationData);

  anim.addEventListener('DOMLoaded', () => {
    // Set the initial frame to start from 20%
    anim.goToAndStop(anim.totalFrames * 0.3, true);

    // Function to replay from 20% when the animation completes
    function replayFrom20Percent() {
      anim.goToAndPlay(anim.totalFrames * 0.7); // Go to 20% and play
    }

    // Start the animation
    anim.play();

    // Add an event listener for when the animation completes
    anim.addEventListener('complete', () => {
      replayFrom20Percent(); // Replay from 20% when complete
    });
  });
}

// Call the function to start the animation
playLottieAnimation();
