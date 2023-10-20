
# Frontend Mentor - Intro Section with Dropdown Navigation

![Design preview](./design/desktop-preview.jpg)

This is my solution for the "Intro Section with Dropdown Navigation" challenge by Frontend Mentor. The goal was to build a responsive webpage that matches the provided design. Users should be able to see dropdown menus when interacting with the navigation links and view the optimal layout for the content depending on their device's screen size.

## Table of Contents

-   [Demo](#demo)
-   [Overview](#overview)
-   [The Challenge](#the-challenge)
-   [Built With](#built-with)
-   [Features](#features)
-   [How I Approached This](#how-i-approached-this)
-   [Vite and Optimized Build](#vite-and-optimized-build)
-   [HTML](#html)
-   [CSS Styles](#css-styles)
-   [JavaScript](#javascript)
-   [Challenges and Lessons Learned](#challenges-and-lessons-learned)
-   [Acknowledgments](#acknowledgments)
-   [Usage](#usage)

## Demo

You can see a live demo of the project [here](https://frontend-mentor-dropdown.netlify.app/).

## Overview

![Intro Section with Dropdown Navigation](https://chat.openai.com/c/screenshot.png)

This project demonstrates the creation of a responsive landing page with interactive dropdown navigation. It focuses on using HTML, CSS, and JavaScript to achieve the desired functionality and layout.

## The Challenge

Frontend Mentor provides a design in JPG format, and the challenge is to convert this design into a responsive webpage. The main objectives include:

-   Creating a navigation menu with dropdown links.
-   Implementing a mobile navigation menu.
-   Matching the design as closely as possible.
-   Adding hover states to interactive elements.

## Built With

-   HTML
-   CSS
-   JavaScript
-   [Vite](https://vitejs.dev/) for an optimized build.

## Features

-   Interactive dropdown navigation for both desktop and mobile.
-   Responsive layout for different screen sizes.
-   Hover states for interactive elements.

## How I Approached This

### Vite and Optimized Build

I used Vite as a build tool for this project. Vite is a build tool that offers a fast development server with hot module replacement (HMR) and optimized production builds. This allowed for a more efficient and optimized development process.

### HTML

I structured the HTML content according to the design and implemented the dropdown menus as hidden elements. Each navigation item has a `data-name` attribute to identify the associated dropdown.

```html <!-- Example HTML structure -->
<li data-name="Features">
  <a href="#" class="navigation__link">
     Features
    <img src="images/icon-arrow-down.svg" alt="arrow down" />
  </a>
</li>

<li data-name="Company">
  <a href="#" class="navigation__link">
     Company
    <img src="images/icon-arrow-down.svg" alt="arrow down" />
  </a>
</li>
``` 

### CSS Styles



### General CSS Techniques

As part of this project, I employed several general CSS techniques to create a responsive and visually appealing web page. These techniques include:

#### 1. Grid Layout
#### 2. Flexbox
#### 3. Responsive Design with Media Queries


### JavaScript

Here's a brief overview of the JavaScript functions used:

-   `overlayStyle`: A function to manage the style of an overlay that covers the content when the mobile menu is open.
-   `toggleListImage`: A function to toggle the active state of a dropdown link and update the dropdown arrow icon.
-   Event listeners to open and close the mobile menu, open dropdowns on click, and control the overlay's visibility.

```javascript
// Example JavaScript function
function overlayStyle(opacity, pointerEvents, visibility) {
  overlay.style.opacity = +opacity;
  overlay.style.pointerEvents = pointerEvents;
  overlay.style.visibility = visibility;
}

// Event listeners
header.addEventListener("click", (e) => {
  if (e.target.closest(".btn-mobile-open")) {
    header.classList.add("nav-open");
    overlayStyle(1, "all", "visible");
  }
});`
```

## Challenges and Lessons Learned

-   Implementing the dropdown menus and making them accessible and user-friendly.
-   Responsiveness: Ensuring the design looks great on various screen sizes and devices.
-   JavaScript logic for opening/closing menus while maintaining clean and readable code.

I learned more about responsive design, JavaScript event handling, and improving user interactions during this project.

## Acknowledgments

Thanks to Frontend Mentor for providing challenging projects that help developers improve their skills.

## Usage

1.  Clone the repository to your local machine.
2.  Install dependencies using `npm install`.
3.  Run the development server using `npm run dev`.
4.  Build for production using `npm run build`.

Feel free to use this README as a template and customize it for your own projects. Happy coding! 😄
