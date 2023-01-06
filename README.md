# Crossword


Crossword is a basic crossword game with 10 words to figure out based on five vertical and five horizontal clues.
When the correct word is entered a green check appears next to the corresponding clue.

![Love Art displayed in Am I Responsive Website (https://ui.dev/amiresponsive?url=https://sven-cork.github.io/love-art)](/assets/images/responsive-website3.jpg)

## Table of contents

- [Features](#features)
  - [Navigation](#navigation)
  - [Footer](#footer)
  - [Home Page](#home-page)
  - [Artwork](#artwork)
  - [Enrollment](#enrollment)
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

- ### Navigation 
  - The community logo "LOVE ART" is displayed in the top left corner of navigation.  
  - The navigation bar is displayed on all pages.
  - Links to all pages are located on left hand side for screen width above 1050px. For smaller screen sizes links drop below the Love Art logo.
  - Page links underline when selected to guide the user with navigation.

      
  ![Screenshot of Love Art navigation bar](/assets/images/navigation.jpg)
      

- ### Footer
  - The footer contains social media links for Facebook, Twitter and Instagram.
  - The links are stylised icons from Font Awesome.
  - The links are displayed on all pages for easy navigation.

      
  ![Screenshot of Love Art footer](/assets/images/footer.jpg)
  

- ### Home Page
  - The home page contains a hero image displaying a paing palette with colours and brush, aligning with the theme of this website.
  - In the bottom right corner is a small overlay with Love Art name and slogan. The background color is matched to the overall color 
    style of the hero image.

  
  ![Screenshot of Home page Hero Image](/assets/images/hero-image-readme.jpg)

  - In the middle of the Home page there are three separate sections advertising the following activites: "Drawing Walks", "Group Events" and an invitation to learn painting and drawing.

  ![Screenshot of Home page events section](/assets/images/home-page-events2.jpg)

  - At the end of the Home page there is a section displaying feedback from Art Lover event participants.

  ![Screenshot of Home page feedback section](/assets/images/feedback.jpg)


- ### Artwork
  - The Artwork page contains a gallery of art pieces created by Love Art community members.

  ![Screenshot of Artwork gallery](/assets/images/gallery.jpg)

- ### Enrollment
  - The Enrollment page features a form with fields for visitors to enter email address, first and last name.

  ![Screenshot of Enrollment form](/assets/images/enrollment-form.jpg)

  - From a drop menu the visitor can choose the event to enroll.
  - Three maps are provided displaying the location for each activity including meetup date and times.

  ![Screenshot of Enrollment map location](/assets/images/map-location.jpg)

## Technologies Utilised

- [Google Fonts](https://fonts.google.com/) was used to import fonts: Quicksand, Tangerine and Xanh.
- [Fontawesome](https://fontawesome.com/) was used for social media icons in the Footer.
- [Google Maps](https://maps.google.com) was used for maps iFrames on the Enroll page.
- [TinyPNG](https://tinypng.com/) was used to compress jpeg images.
- Preview.app for macOS was used to re-size images used with Love Art.
- [GitPod](https://gitpod.io/) was used to code HTML and CSS.




## Testing

- The enrollment form works validating successfully with Code Institue formdump.
- The site has been tested to work with the following web browsers: Safari, Chrome and Firefox
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
- [W3 HTML Checker](https://validator.w3.org/nu/#textarea) was used repeatedly throughout the build of Love Art website to test all markup.

<details>
<summary>Home</summary>

![W3 HTML Checker result for Home](/assets/images/home-html-checker.jpg)

</details>

<details>
<summary>Artwork</summary>

![W3 HTML Checker result for Artwork](/assets/images/artwork-html-checker.jpg)

</details>

<details>
<summary>Enrollment</summary>

![W3 HTML Checker result for Enrollment](/assets/images/enrollment-html-checker.jpg)

</details>

### CSS Validation

- [W3 CSS Checker](https://jigsaw.w3.org/css-validator/) was used repeatedly throughout the build of Love Art website to test all CSS.

</details>

<details>
<summary>CSS Checker for style.css</summary>

![W3 CSS Checker result for style.css](/assets/images/css-checker.jpg)

</details>

## Performance/Accessibility 

Google Chrome Developer Tools Lighthouse feature was used to test Performance and Accessibility. 
For the desktop version of Lighthouse a score over 90% were achieved for all pages and test categories. 
For the mobile version of Lighthouse all pages apart from Enrollment received a score above 90%. The Enrollment page received an inital score in the 70% range. Lighthouse Opportunity section recommended optimising the size for image 'enrollment.jpeg' (700Kb). Using TinyPNG service 'enrollment.jpeg' was compressed to 400Kb and subsequent re-run of Lighthouse Mobile test achieved 82% performance score.

One concern was for the readability of the text located on the Home page on the left hand side in the middle section advertising Drawing Walks. The background is not uniformly dark. However adding dropshadow to the text resolved this concern.

### Lighthouse Desktop version test outcome

<details>
<summary>Home</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/home-lighthouse.jpg)

</details>

<details>
<summary>Artwork</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/artwork-lighthouse.jpg)

</details>

<details>
<summary>Enrollment</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/enrollment-lighthouse.jpg)

</details>

### Lighthouse Mobile version test outcome

<details>
<summary>Home</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/home-lighthouse-mobile.jpg)

</details>

<details>
<summary>Artwork</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/artwork-lighthouse-mobile.jpg)

</details>

<details>
<summary>Enrollment</summary>

![Chrome Dev Tools Lighthouse output](/assets/images/enrollment-lighthouse-mobile.jpg)

</details>

## Deployment

- Crossword was deployed via GitHub Pages. Please see deployment steps below:
  - In the GitHub repository 'love-art', navigate to the Settings tab.
  - From the 'Code and automation' section select 'Pages'.
  - From the 'Branch' section select 'Main' and save.
  - A live link is provided at the top of 'Pages'. The live link can be accessed here - [Love Art](https://sven-cork.github.io/love-art/).  



## Credits

### Images

Images aquired from [Pexels](#pexels.com)

1. drawing-walk-full.jpg/drawing-walk-full2.jpg (original name: pexels-ekaterina-bolovtsova-5037075.jpg) - by Ekaterine Bolovtsova<br>
2. enrollment.jpeg (original name: pexels-hazy-mokhlas-47482.jpg) - by Hazy Mokhlas<br>
3. hero-image6.jpg (original name: pexels-daian-gan-102127.jpg) - by Daian Gan<br>
4. paint-group-full.jpg (original name: pexels-bruno-bueno-3861423.jpg) - by Bruno Bueno<br>

Images located on the Artwork page belongs to the developer of Love Art.

### Other

Icons for social media links are from [Fontawesome](https://fontawesome.com/).

Fonts used throughout Love Art website were imported from [Google Fonts](https://fonts.google.com/).

Design style for hero-image with cover text mathing to the dominant tone and background color was influenced from Code Institute Love Running project.

Inspiration for the crossword format and clues (original clue text changed for crossword) was borrowed from James Scalise [YouTube channel:](https://www.youtube.com/watch?v=_KunjDXYYYg&ab_channel=JamesScalise).
      
