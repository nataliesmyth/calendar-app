// import dayjs from "dayjs";
// import "./style.css";

const date = new Date();

const month = date.getMonth();

console.log(month);

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

document.querySelector('.date h1').innerHTML = months[date.getMonth()];

document.querySelector('.date p').innerHTML = date.toDateString();