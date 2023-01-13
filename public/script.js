/**
 * Represents a countdown which calculates the time left until 25th of December 2022
 * The function takes the HTML elements with the classes ".day, .hour, .minute" and replaces them with the number of days, hours and minutes left until Christmas
 */
const countdown = () => {
  const countDate = new Date("December 25, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
};

setInterval(countdown, 1000);

const calendarContainer = document.querySelector(".container");

/**
 * Functions which reveal movies when the squares are clicked, but also change the style using javascript.
 * We set up the number of days in December until Christmas (25)
 */
const calendarDays = 25;

/**
 * Function that when clicked, makes the square white before revealing the picture
 * @param {*} path - the path of the movie picture
 * @param {*} event - the event
 */
const openMovie = (path, event) => {
  event.target.parentNode.style.backgroundImage = `url(${path})`;
  event.target.style.opacity = "0";
  event.target.style.backgroundColor = "white";
};

/**
 * The function will create the advent calendar for revealing Christmas movies
 * It will create 25 div squares
 * It will change their style, making all even squares white and all uneven squares #C5794F
 * After we changed the style we created the paths that the function will use to attach the pictures to each of the divs
 * At the end we will call the function which when divs are clicked, will make them while and then reveal the pictures
 */
const createCalendar = () => {
  for (let i = 0; i < calendarDays; i++) {
    const calendarMovie = document.createElement("div");
    const calendarMovieText = document.createElement("div");

    calendarMovie.classList.add("image");
    calendarMovie.style.gridArea = "movie" + (i + 1);

    if ((i + 1) % 2 === 1) {
      calendarMovie.style.backgroundColor = "white";
      calendarMovieText.style.color = "#a60019";
    } else {
      calendarMovie.style.backgroundColor = "#C5794F";
    }

    calendarContainer.appendChild(calendarMovie);

    calendarMovieText.classList.add("text");
    calendarMovieText.innerHTML = i + 1;
    calendarMovie.appendChild(calendarMovieText);

    movieNumber = i + 1;
    let moviePath = `./images/movie-${movieNumber}.jpeg`;

    calendarMovieText.addEventListener(
      "click",
      openMovie.bind(null, moviePath)
    );
  }
};

createCalendar();
