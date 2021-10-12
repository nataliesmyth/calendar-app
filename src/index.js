// import dayjs from "dayjs";
// import "./style.css";

const date = new Date();
// date.setMonth(6);
date.setDate(1);
console.log(date.getDay());

const month = date.getMonth();
const monthDays = document.querySelector('.days')
const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
console.log(prevLastDay)
const firstDayIndex = date.getDay();


console.log(lastDay);


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

let days = '';

for(let x = firstDayIndex; x > 0; x--){
  days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
}
for(let i = 1; i <= lastDay; i++) {
  days += `<div>${i}</div>`
};
monthDays.innerHTML = days;