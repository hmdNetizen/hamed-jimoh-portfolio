import recipeSearchApp from "../assets/RecipeSearchApp.png";
import urlshortenerImg1 from "../assets/urlshortenerImg1.jpg";
import urlShortenerImg2 from "../assets/urlShortenerImg2.png";
import urlShortenerImg3 from "../assets/urlShortenerImg3.jpg";
import booklist from "../assets/booklist1.png";
import easyBank from "../assets/EasybankLandingPage.png";
import manage from "../assets/manageLandingPage.png";
import quizImg from "../assets/quizApp.png";

const projectList = [
  {
    id: 0,
    name: "Chefs Mentor",
    img: recipeSearchApp,
    alt: "Chefs Mentor",
    date: new Date("2020-05-09"),
    selected: false,
    description: "This is the Chefs Mentor Project",
    images: [
      { id: 0, link: "/assets/RecipeSearchApp.png", alt: "Slide One" },
      { id: 1, link: "/assets/recipeimage2.png", alt: "Slide Two" },
      { id: 2, link: "/assets/recipeimage3.png", alt: "Slide Three" },
    ],
    liveURL: "https://hmdnetizen.github.io/search-recipes/",
    repo: "https://github.com/hmdNetizen/search-recipes",
    functionalities: [],
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
  },
  {
    id: 2,
    name: "Booklist Tracker with Dark Mode",
    img: booklist,
    alt: "Book List",
    date: new Date("2020-07-07"),
    selected: false,
    description: "This is the Booklist Tracker Project",
    images: [
      { id: 0, link: "/assets/booklist1.png", alt: "Slide One" },
      { id: 1, link: "/assets/booklist2.png", alt: "Slide Two" },
      { id: 2, link: "/assets/booklist3.png", alt: "Slide Three" },
    ],

    repo: "https://github.com/hmdNetizen/BookList-App-With-Dark-Mode",
    functionalities: [],
  },
  {
    id: 3,
    name: "EasyBank Landing Page",
    img: easyBank,
    alt: "Easy Bank",
    date: new Date("2020-07-22"),
    selected: false,
    description: "This is the EasyBank Landing Page Project",
    images: [
      { id: 0, link: "/assets/EasybankLandingPage.png", alt: "First Slide" },
      { id: 1, link: "/assets/EasybankLandingPage2.jpg", alt: "Second Slide" },
      { id: 2, link: "/assets/EasybankLandingPage3.jpg", alt: "Third Slide" },
    ],
    liveURL: "https://easybank-landing-page-lake.vercel.app/",
    repo: "https://github.com/hmdNetizen/EasyBank-Landing-Page",
    functionalities: [],
  },
  {
    id: 4,
    name: "Manage Landing Page",
    img: manage,
    alt: "Manage Landing Page",
    date: new Date("2020-07-31"),
    selected: false,
    description: "This is the Manage Landing Page Project",
    images: [
      { id: 0, link: "/assets/manageLandingPage.png", alt: "Slide One" },
      { id: 1, link: "/assets/manage2.png", alt: "Slide Two" },
      { id: 2, link: "/assets/manage3.png", alt: "Slide Three" },
    ],
    liveURL: "https://manage-landiing-page.netlify.app/",
    repo: "https://github.com/hmdNetizen/Manage-landing-page",
    functionalities: [],
  },
  {
    id: 5,
    name: "Javascript Quiz",
    img: quizImg,
    alt: "Quiz App",
    date: new Date("2020-01-04"),
    selected: false,
    description: "This is the Javascript Quiz Project",
    images: [
      { id: 0, link: "/assets/quiz2.png", alt: "Slide One" },
      { id: 1, link: "/assets/quiz.png", alt: "Slide Two" },
      { id: 1, link: "/assets/quiz3.png", alt: "Slide Three" },
    ],
    repo: "https://github.com/hmdNetizen/Quiz-Application",
    functionalities: [],
  },
];

const getProjects = () => {
  return projectList;
};

export default getProjects;
