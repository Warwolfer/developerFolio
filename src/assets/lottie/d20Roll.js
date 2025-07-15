// D20 Roll Animation with Random Number Generation
import d20RollAnimation from './d20Roll.json';

// Function to create a randomized D20 animation
export function createRandomD20Animation() {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  
  // Clone the animation object to avoid mutating the original
  const animationData = JSON.parse(JSON.stringify(d20RollAnimation));
  
  // Update the text content with the random number
  if (animationData.layers && animationData.layers[1] && animationData.layers[1].t && animationData.layers[1].t.d) {
    animationData.layers[1].t.d.k[0].s.t = randomNumber.toString();
  }
  
  return animationData;
}

// Export the base animation for direct use if needed
export default d20RollAnimation;