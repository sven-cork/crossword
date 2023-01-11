# Crossword


Le Crossword is a basic crossword game written in JavaScript allowing players to take up the challenge of guessing the correct word corresponding to 10 clues. Le Crossword lets the player check the correct and incorrect answers indicated by green and red coloured marks. When submitting the correct or incorrect words will also be listed in red or green color. 

Le Crossword demonstrates a basic game concept however might provide inspiration for developers who wish to develop a more advanced crossword with JavaScript.

![Le Crossword displayed in Am I Responsive Website (https://ui.dev/amiresponsive?url=https://sven-cork.github.io/crossword/)](/assets/images/am_I_responsive.png)

## Table of contents

- [Features](#features)
  - [Heading](#heading)
  - [Crossword Area](#crossword-area)
  - [Clues Area](#clues-area)
  - [Corrected Words Area](#clues-area)
  - [Footer](#footer)
  - [Future Ideas](#future-ideas)

- [Design](#design)
- [Technologies Utilised](#technologies-utilised)
- [Testing](#testing)
- [Validation](#validation)
  - [HTML Validation](#html-validation)
  - [CSS Validation](#css-validation)
- [Performance/Accessibility](#performanceaccessibility)
  - [Lighthouse Desktop version test outcome](#lighthouse-desktop-version-test-outcome)
  - [Lighthouse Mobile version test outcome](#lighthouse-mobile-version-test-outcome)
- [Deployment](#deployment)
- [Credits](#credits)

## Features

- ### Heading
  - Le Crosswords heading featured at the top of the page in a Courier New font style evoking a feeling of old newspaper. 

  ![Screenshot of Le Crossword heading](/assets/images/crossword_heading.png) 

- ### Crossword Area
  - This section allows the user to enter letters in the tiles to solve word clues horizontal and vertical.
  - Comprising 25 tiles of which 21 can receive keyboard input for the user guessed letter.
  - The submit button will allow the user to view words guessed correct or incorrect displayed in the section below crossword area.
  - Using the reset button the user can reset the crossword back to empty tiles and remove all correct or incorrect words and color marks.


  ![Screenshot of Crossword Area](/assets/images/crossword_area.png) 

- ### Clues Area
  - Clues provided for the user comprising five horizontal and five vertical words.
  - Green check marks or red "X" marks displayed next to each clue after pressing submit.

  ![Screenshot of Clues Area](/assets/images/clues_area.png)
 
- ### Corrected Words Area
  - After submitting the crossword the correct or incorrect guessed word appears in the corrected words area. The left side of the table lists
  the correct guessed words in green color. The incorrect words are located on the right side in red color.

  ![Screenshot of Corrected Words Area](/assets/images/corrected_words_area.png)

- ### Footer
  - The footer contains social media links for Facebook, Twitter and Instagram.
  - The links are stylised icons from Font Awesome.
  
  ![Screenshot of Footer Area](/assets/images/footer.png)

- ### Future Ideas
  - The option of playing a few different crosswords, perhaps toggling between easy, medium and hard.
  - Best of scoreboard offering user to enter name at start of game.
        
## Design
  - Courier New was chosen for header font style as this I believe evokes a sense of classic old newspapper.
  - The hero image has few colors and the wooden tiles provides a dominant earthy tone against which the crossword area is well balanced.
  - Considering the crossword area is busy with 25 tiles, the rest of the website is kept minimalistic with mostly dark or white colors and I belive this achieves a nice harmony for the overall impression.

## Technologies Utilised

- [Fontawesome](https://fontawesome.com/) was used for green check marks, red "x" marks and social media icons in the Footer.
- Preview.app for macOS was used to re-size images used with Love Art.
- [GitPod](https://gitpod.io/) was used to code HTML, CSS and.


## Testing

- The website has been tested to work with the following web browsers: Safari, Chrome and Firefox
- Love Art website displays as intended for all screen sizes when tested with Google Chrome dev tools pre-configured device formats. When the browser window is adjusted manually from maximum to smallest width, all elements display as intended.
- Manual testing of the site was successful on the following devices: iPhone 12, iPad Air (3rd generation), iPad Air 2 and iMac 27".

Further tests were carried out using Chrome dev tools (toggle device tool bar) for the following devices (see screenshots below): 

<details>
<summary>iPhone SE</summary>

![Chrome Dev Tools iPhone SE](/assets/images/iphonese.jpg)

</details>

<details>
<summary>Samsung Galaxy S8+</summary>

![Chrome Dev Tools Samsung Galaxy S8+](/assets/images/galaxys8.jpg)

</details>

<details>
<summary>Surface Pro 7</summary>

![Chrome Dev Tools Samsung Galaxy S8+](/assets/images/surfacepro7.jpg)

</details>

## Validation

### HTML Validation
- [W3 HTML Checker](https://validator.w3.org/nu/#textarea) was used to test HTML validation. The website passed as per below screenshot.

<details>

<summary>Le Crossword</summary>

![W3 HTML Checker result for index.html](/assets/images/html_check.png)

</details>

### CSS Validation

- [W3 CSS Checker](https://jigsaw.w3.org/css-validator/) was used to test CSS validation. The website passed as per below screenshot.

</details>

<details>

<summary>CSS Checker for style.css</summary>

![W3 CSS Checker result for style.css](/assets/images/css_validation.png)

</details>

## Performance/Accessibility 

Google Chrome Developer Tools Lighthouse feature was used to test Performance and Accessibility. 
For both desktop and mobile versions of Lighthouse a score over 90% were achieved for all metrics. 


### Lighthouse Desktop version test outcome

<details>
<summary>Desktop Performance</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/desktop_performance.png)

</details>

### Lighthouse Mobile version test outcome

<details>
<summary>Mobile Performance</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/mobile_performance.png)

</details>


## Deployment

- Crossword was deployed via GitHub Pages. Please see deployment steps below:
  - In the GitHub repository 'crossword', navigate to the Settings tab.
  - From the 'Code and automation' section select 'Pages'.
  - From the 'Branch' section select 'Main' and save.
  - A live link is provided at the top of 'Pages'. The live link can be accessed here - [Le Crossword](https://sven-cork.github.io/crossword/).  



## Credits

### Images

Hero image aquired from [Pexels](#pexels.com):
 - crossword2.jpg (original name: pexels-brett-jordan-5908695.jpg) - by Brett Jordan


### Code
- JavaScript code for arrow function locating items by class borrowed from the website listed below. This code snippet added functionality to the reset button by locating all elements with a green check or red "X" mark in order for them to be removed:
https://codingbeautydev.com/blog/javascript-remove-class-from-multiple-elements/
- Code snippet from line 749 to 753 in scripts.js.


### Other

Icons for social media links are from [Fontawesome](https://fontawesome.com/).

Inspiration for the crossword format and clues (original clue text changed for this project) was borrowed from James Scalise [YouTube channel:](https://www.youtube.com/watch?v=_KunjDXYYYg&ab_channel=JamesScalise).

