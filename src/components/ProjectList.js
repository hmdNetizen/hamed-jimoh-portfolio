import recipeSearchApp from "../assets/RecipeSearchApp.png";
import recipeSearchApp2 from "../assets/recipeimage2.png";
import recipeSearchApp3 from "../assets/recipeimage3.png";
import urlshortenerImg1 from "../assets/urlshortenerImg1.jpg";
import urlShortenerImg2 from "../assets/urlShortenerImg2.png";
import urlShortenerImg3 from "../assets/urlShortenerImg3.jpg";
import booklist from "../assets/booklist1.png";
import booklist2 from "../assets/booklist2.png";
import booklist3 from "../assets/booklist3.png";
import easyBank from "../assets/EasybankLandingPage.png";
import easyBank2 from "../assets/EasybankLandingPage2.jpg";
import easyBank3 from "../assets/EasybankLandingPage3.jpg";
import manage from "../assets/manageLandingPage.png";
import manage2 from "../assets/manage2.png";
import manage3 from "../assets/manage3.png";
import mooville1 from "../assets/mooville1.png";
import mooville2 from "../assets/mooville2.png";
import mooville3 from "../assets/mooville3.png";
import htmlIcon from "../assets/html5.svg";
import cssIcon from "../assets/css3.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import sassIcon from "../assets/sass.svg";
import materialUI from "../assets/material-ui.svg";
import rebrandly from "../assets/rebrandly.png";
import tmdb from "../assets/TMDB.svg";
import edamam from "../assets/edamam.png";

export const projectLists = [
  {
    id: 0,
    name: "Mooville",
    img: mooville1,
    alt: "Logo",
    date: new Date("2020-12-03"),
    selected: false,
    description:
      "This is a movie web application that allows users to see excerpts from a movie before streaming or downloading it.",
    images: [
      { id: 0, link: mooville1, alt: "Slide One" },
      { id: 1, link: mooville2, alt: "Slide Two" },
      { id: 2, link: mooville3, alt: "Slide Three" },
    ],
    liveURL: "https://mooville.vercel.app/",
    repo: "https://github.com/hmdNetizen/Mooville",
    functionalities: [
      {
        id: 0,
        description: "Display different movie genres",
      },
      { id: 1, description: "Search for different movies" },
      {
        id: 2,
        description: "Bookmark, like and dislike movies",
      },
      {
        id: 3,
        description: "Display short movie trailer, rating and overview",
      },
      {
        id: 4,
        description: "Alternate between dark mode or light mode",
      },
      {
        id: 5,
        description:
          "Receive an error message when the 'form' is submitted if:",
        options: ["The 'input' field is empty"],
      },
    ],
    techs: [
      { id: 0, logo: htmlIcon, alt: "Html Logo", title: "HTML5" },
      { id: 1, logo: cssIcon, alt: "CSS Logo", title: "CSS3" },
      { id: 2, logo: sassIcon, alt: "Sass Logo", title: "Sass" },
      { id: 3, logo: jsIcon, alt: "Javascript Logo", title: "JavaScript" },
      { id: 4, logo: reactIcon, alt: "React Logo", title: "ReactJS" },
      { id: 5, logo: tmdb, alt: "The movie database Logo", title: "TMDB API" },
    ],
  },
  {
    id: 1,
    name: "URL Shortener",
    img: urlshortenerImg1,
    alt: "Url Shortener",
    date: new Date("2020-09-07"),
    selected: false,
    description:
      "This project is a challenge from Frontend Mentor. It entails the building of the landing page and integrating it with the Rebrandly API.",
    images: [
      { id: 0, link: urlshortenerImg1, alt: "Slide One" },
      { id: 1, link: urlShortenerImg2, alt: "Slide Two" },
      { id: 2, link: urlShortenerImg3, alt: "Slide Three" },
    ],
    liveURL: "https://hmdnetizen-url-shortener.netlify.app/",
    repo: "https://github.com/hmdNetizen/urlShortener-API",
    functionalities: [
      {
        id: 0,
        description:
          "View the optimal layout for the site depending on their device's screen size",
      },
      { id: 1, description: "Shorten any valid URL" },
      {
        id: 2,
        description:
          "See a list of their shortened links, even after refreshing the browser",
      },
      {
        id: 3,
        description:
          "Copy the shortened link to their clipboard in a single click",
      },
      {
        id: 4,
        description:
          "Receive an error message when the 'form' is submitted if:",
        options: [
          "The 'input' field is empty",
          "The typed in URL is not valid",
          "Link already exist",
        ],
      },
    ],
    techs: [
      { id: 0, logo: htmlIcon, alt: "Html Logo", title: "HTML5" },
      { id: 1, logo: cssIcon, alt: "CSS Logo", title: "CSS3" },
      { id: 2, logo: jsIcon, alt: "Javascript Logo", title: "JavaScript" },
      { id: 3, logo: reactIcon, alt: "React Logo", title: "ReactJS" },
      {
        id: 4,
        logo: materialUI,
        alt: "Material-UI Logo",
        title: "Material-UI",
      },
      { id: 5, logo: rebrandly, alt: "Rebrandly Logo", title: "Rebrandly API" },
    ],
  },

  {
    id: 2,
    name: "Chefs Mentor",
    img: recipeSearchApp,
    alt: "Chefs Mentor",
    date: new Date("2020-05-09"),
    selected: false,
    description:
      "This project was developed in the heat of the COVID-19 pandemic when every person was forced to remain indoors. I discovered that a lot of people were willing to try out some new dishes but are quite unsure of the right recipes to get the dishes done. Hence, the birth of this project.",
    images: [
      { id: 0, link: recipeSearchApp, alt: "Slide One" },
      { id: 1, link: recipeSearchApp2, alt: "Slide Two" },
      { id: 2, link: recipeSearchApp3, alt: "Slide Three" },
    ],
    liveURL: "https://hmdnetizen.github.io/search-recipes/",
    repo: "https://github.com/hmdNetizen/search-recipes",
    functionalities: [
      {
        id: 0,
        description:
          "View the optimal layout for the site depending on their device's screen size",
      },
      {
        id: 1,
        description:
          "Fetch recipe(s) and its variants based on the searched term",
      },
      {
        id: 2,
        description: "View more details about the individual recipe fetched",
      },
      {
        id: 3,
        description:
          "Receive an error message when the 'form' is submitted if:",
        options: [
          "The 'input' field is empty",
          "Recipe searched could not be found",
        ],
      },
    ],
    techs: [
      { id: 0, logo: htmlIcon, alt: "Html Logo", title: "HTML5" },
      { id: 1, logo: cssIcon, alt: "CSS Logo", title: "CSS3" },
      { id: 2, logo: jsIcon, alt: "Javascript Logo", title: "JavaScript" },
      { id: 3, logo: reactIcon, alt: "React Logo", title: "ReactJS" },
      { id: 4, logo: edamam, alt: "Edamam Logo", title: "Edamam API" },
    ],
  },
  {
    id: 3,
    name: "Booklist Tracker with Dark Mode",
    img: booklist,
    alt: "Book List",
    date: new Date("2020-07-07"),
    selected: false,
    description:
      "This project keeps track of the different books that I have marked for read. It incorporates dark theme that alternates between purple and dark theme. It also uses basic CRUD functionalities.",
    images: [
      { id: 0, link: booklist, alt: "Slide One" },
      { id: 1, link: booklist2, alt: "Slide Two" },
      { id: 2, link: booklist3, alt: "Slide Three" },
    ],

    repo: "https://github.com/hmdNetizen/BookList-App-With-Dark-Mode",
    functionalities: [
      {
        id: 0,
        description:
          "Fecth, create, update and delete books from the local storage",
      },
      { id: 1, description: "Alternates between purple and dark theme" },
      {
        id: 2,
        description: "Monitors the number of books to be read",
      },
    ],
    techs: [
      { id: 0, logo: htmlIcon, alt: "Html Logo", title: "HTML5" },
      { id: 1, logo: cssIcon, alt: "CSS Logo", title: "CSS3" },
      { id: 2, logo: jsIcon, alt: "Javascript Logo", title: "JavaScript" },
      { id: 3, logo: reactIcon, alt: "React Logo", title: "ReactJS" },
    ],
  },
  {
    id: 4,
    name: "EasyBank Landing Page",
    img: easyBank,
    alt: "Easy Bank",
    date: new Date("2020-07-22"),
    selected: false,
    description: "This is the EasyBank Landing Page Project",
    images: [
      { id: 0, link: easyBank, alt: "First Slide" },
      { id: 1, link: easyBank2, alt: "Second Slide" },
      { id: 2, link: easyBank3, alt: "Third Slide" },
    ],
    liveURL: "https://easybank-landing-page-lake.vercel.app/",
    repo: "https://github.com/hmdNetizen/EasyBank-Landing-Page",
    functionalities: [
      {
        id: 0,
        description:
          "View the optimal layout for the site depending on their device's screen size",
      },
      {
        id: 1,
        description:
          "See hover states for all interactive elements on the page",
      },
    ],
    techs: [
      { id: 0, logo: htmlIcon, alt: "Html Logo", title: "HTML5" },
      { id: 1, logo: cssIcon, alt: "CSS Logo", title: "CSS3" },
      { id: 2, logo: jsIcon, alt: "Javascript Logo", title: "JavaScript" },
      { id: 3, logo: reactIcon, alt: "React Logo", title: "ReactJS" },
      {
        id: 4,
        logo: materialUI,
        alt: "Material-UI Logo",
        title: "Material-UI",
      },
    ],
  },
  {
    id: 5,
    name: "Manage Landing Page",
    img: manage,
    alt: "Manage Landing Page",
    date: new Date("2020-07-31"),
    selected: false,
    description:
      "This is a challenge from Frontend Mentor. The task is to build this landing page and get it looking as close to the provided design template as possible",
    images: [
      { id: 0, link: manage, alt: "Slide One" },
      { id: 1, link: manage2, alt: "Slide Two" },
      { id: 2, link: manage3, alt: "Slide Three" },
    ],
    liveURL: "https://manage-landiing-page.netlify.app/",
    repo: "https://github.com/hmdNetizen/Manage-landing-page",
    functionalities: [
      {
        id: 0,
        description:
          "View the optimal layout for the site depending on their device's screen size",
      },
      {
        id: 1,
        description:
          "See hover states for all interactive elements on the page",
      },
      {
        id: 2,
        description: "See all testimonials in a horizontal slider",
      },

      {
        id: 4,
        description:
          "Receive an error message when the newsletter sign up `form` is submitted if:",
        options: [
          "The 'input' field is empty",
          "The email address is not formatted correctly",
        ],
      },
    ],
    techs: [
      { id: 0, logo: htmlIcon, alt: "Html Logo", title: "HTML5" },
      { id: 1, logo: cssIcon, alt: "CSS Logo", title: "CSS3" },
      { id: 2, logo: jsIcon, alt: "Javascript Logo", title: "JavaScript" },
      { id: 3, logo: reactIcon, alt: "React Logo", title: "ReactJS" },
      {
        id: 4,
        logo: materialUI,
        alt: "Material-UI Logo",
        title: "Material-UI",
      },
    ],
  },
];
