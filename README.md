# Valentine's Day Game

A fun interactive Valentine's Day game where users are asked to be your Valentine with a playful "forced choice" design.

## Features

- Username input
- Song played while entering
- Valentine's proposal question
- "Yes" button that grows larger when "No" is clicked
- "No" button that moves randomly around the screen when clicked
- Redirects to a separate success page with sound effect and cat image when "Yes" is clicked
- Animated falling hearts on the success page

## Setup Instructions

1. Clone or download this repository
2. Add the following files to your `assets` folder:
   - `cat.jpg` - A cute cat image that displays when "Yes" is clicked
   - `yay.mp3` - A celebratory sound that plays when "Yes" is clicked
   - `song.mp3` - A song that will be played while entering
3. Open `index.html` in your web browser to start the game

## How to Play

1. Enter your username and click Submit
2. You'll be presented with the Valentine's question and two buttons: "Yes" and "No"
3. If you click "Yes," you'll be redirected to a success page with a cute cat image, falling heart animations, and a celebration sound
4. If you click "No," the "Yes" button will get bigger, and the "No" button will move to a new random position
5. Eventually, the "Yes" button will become so large that it's almost impossible to avoid!

## Project Structure

- `index.html` - The main game page with username input and Valentine's question
- `success.html` - The success page shown after clicking "Yes"
- `src/script.js` - JavaScript code for the game logic
- `assets/styles.css` - CSS styles for the game
- `assets/success.css`- CSS for success page
- `assets/img/cat.jpg` - Cat image for the success page
- `assets/audio/song.mp3` - Song that will be played while entering
- `assets/audio/yay.mp3` - Sound effect for the success page

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

Enjoy the game and Happy Valentine's Day! ❤️
