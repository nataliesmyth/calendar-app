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

const lastDayIndex = new Date(
  date.getFullYear(),
  date.getMonth() + 1,
  0
).getDay();

const nextDays = 7 - lastDayIndex - 1;

console.log(nextDays)

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
  if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
    days += `<div class="today">${i}</div>`;
  } else {
    days += `<div>${i}</div>`
  }
};

for (let j = 1; j <= nextDays; j++) {
  days += `<div class="next-date">${j}</div>`;
}
monthDays.innerHTML = days;