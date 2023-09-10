const DAY_OF_THE_WEEK_TEXT = document.getElementById("today"); 
const UTC_TIME_TEXT = document.getElementById("time");

const date = new Date();

let today = date.toLocaleDateString("en-US", { weekday: "long" });
DAY_OF_THE_WEEK_TEXT.textContent = today;

const create_utc_time = () => {
  let time = new Date();
  let total = time.toUTCString();
  total = total.substring(17, 25);

  UTC_TIME_TEXT.textContent= total;
}

setInterval(create_utc_time, 1000);