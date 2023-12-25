"use strict"

function createCalendar (year, month) {
    let div = document.getElementById('calendar');
    let currentDate = new Date();
    let date = new Date(year, month - 1, 1);
    console.log(date);
    let days = new Date(year, month, 0).getDate();
    let dayIndex = (date.getDay() + 6) % 7;
    let prevMonth = document.getElementById('prevMonth');
    let nextMonth = document.getElementById('nextMonth');
    
    let monthNames = [
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
        'December'
    ];

    div.innerHTML = `
        <h2>${monthNames[month - 1]} ${year}</h2>
        <ul class="weekdays">
            <li>Пн</li>
            <li>Вт</li>
            <li>Ср</li>
            <li>Чт</li>
            <li>Пт</li>
            <li>Сб</li>
            <li>Вс</li>
        </ul>
        <ul class="days"></ul>
    `;

    let daysUl = div.querySelector('.days');

    for (let i = 0; i < dayIndex; i++) {
        let emptyCell = document.createElement('li');
        daysUl.appendChild(emptyCell);
    }

    for (let i = 1; i <= days; i++) {
        let dayLi = document.createElement('li');
        dayLi.innerText = i;
        daysUl.appendChild(dayLi);

        if (currentDate.getFullYear() === year && currentDate.getMonth() === month - 1 && i === currentDate.getDate()) {
            dayLi.classList.add('current-day');
        }
    }

    
    prevMonth.addEventListener('click', function () {
        month--;
        if(month < 1) {
            month = 12;
            year--;
        }
        createCalendar(year, month);
    });

    nextMonth.addEventListener('click', function () {
        month++;
        if(month > 12) {
            month = 1;
            year++;
        }
        createCalendar(year, month);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    createCalendar(currentYear, currentMonth);
});