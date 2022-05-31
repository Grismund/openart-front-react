# Open Art

Open Art is a responsive, single-page application (SPA) using React.js. It is a search engine using a RESTful API from [The Art Institute of Chicago](https://api.artic.edu/docs/#introduction).

## Live Version
[here](https://open-art.netlify.app/).

## Technoligies Used

  - React.js for component functionality.
  - React-Router-DOM for single-page application functionality.
  - ReactStrap for a mobile-first, responsive site.
  - RESTful API for JSON data.
  - CSS for styling.

## Goals

I wanted to design a mobile-first experience for browsing beautiful artwork.

## Challenges

  - Selecting the right API.
  - Updating search parameters based on user clicks.
  - Mobile optimized site using large images, especially on the home page's carousel component.

## Solutions

  - After a day of research, I found that [The Art Institute of Chicago](https://api.artic.edu/docs/#introduction) has a fantastic API. They offer their entire collection of art free to the public through a RESTful API without any development keys required. Their documentation is well-written and very well organized.
  - To keep the mobile site running light, I decided to send a new GET request each time the user clicked on a filtering button rather than loading the entire JSON file into a mobile device and sorting it from there.
  - For the carousel, I decided to create two separate carousel components in React, one with small, square-sized images for mobile devices, and another with large, landscape-oriented images for desktop. Then I built a media query function into the componentDidMount function to check what type of screen-size the user is browsing from. If it is mobile, the app renders the mobile-friendly carousel with smaller images and if it is desktop, the app renders the larger images.

## Plans

I have a lot of plans for this site that I am working on.
  - Complete and integrate the back end. [Repo for the back end is here](https://github.com/Grismund/openartNodeJS).
  - Add functionality for users to save images as favorites.
  - Add functionality for users to publicly comment on images and report other users' problematic comments.

## Running the Code
In the project directory, you can run:

### `yarn start`

It runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.