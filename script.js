// js/script.js
document.getElementById('cutCakeBtn').addEventListener('click', function() {
    const cake = document.querySelector('.cake');
    const message = document.getElementById('message');
    const birthdaySong = document.getElementById('birthdaySong');
    const balloonContainer = document.getElementById('balloonContainer');

    // Play birthday song
    birthdaySong.play();

    // Create balloons
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('img');
        balloon.src = ''; // Make sure to have a balloon image
        balloon.classList.add('balloon');
        balloon.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        balloon.style.animationDuration = (Math.random() * 3 + 3) + 's'; // Randomize float duration
        balloonContainer.appendChild(balloon);
    }

    // Add an animation class to the cake image
    cake.style.transform = 'scale(1.1)'; // Slightly enlarge the cake
    setTimeout(() => {
        cake.style.transform = 'scale(1)'; // Return to original size
    }, 300);

    // Show the birthday message
    message.classList.remove('hidden'); // Remove the hidden class
});
