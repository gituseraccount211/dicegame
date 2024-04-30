// Get the elements
const refreshButton = document.querySelector('h1');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const result = document.querySelector('.result');

// Add an event listener to the refresh button
refreshButton.addEventListener('click', () => {
  // Generate a random number between 1 and 6
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Update the image sources
  img1.src = `dice${randomNumber1}.webp`;
  img2.src = `dice${randomNumber2}.webp`;

  // Determine the winner
  if (randomNumber1 > randomNumber2) {
    result.textContent = 'Player 1 wins!';
  } else if (randomNumber1 < randomNumber2) {
    result.textContent = 'Player 2 wins!';
  } else {
    result.textContent = 'It\'s a tie!';
  }
});