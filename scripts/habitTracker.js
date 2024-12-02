function change(day) {
    console.log(day)
    alert(`You clicked on day ${day}`);
    const dayElement = document.getElementById(`todo-${day}`);
    // if (dayElement) {
    //     // Check if dayElement is not null
    //     
    // } else {
    //     console.log(`Element with id 'todo-${day}' not found.`);
    // }
}
let counter=0
function createCalendar() {
    const calendarBody = document.querySelector('#calendar tbody');
    const daysInMonth = 31;
    const firstDay = new Date(2024, 11, 1).getDay();
    let currentDay = 1;

    for (let week = 0; week < 6; week++) {
        const row = document.createElement('tr');

        for (let day = 0; day < 7; day++) {
            const cell = document.createElement('td');

            if ((week === 0 && day < firstDay) || currentDay > daysInMonth) {
                cell.classList.add('inactive');
            } else {
                const todoDisplay = currentDay;
                cell.textContent = todoDisplay;
                cell.id = `todo-${currentDay}`;
                cell.classList.add('active');
                cell.addEventListener('click', function() {
                    cell.style.backgroundColor = '#000';
                    cell.style.color = '#353434';
                    counter++;
                    document.getElementById('day').textContent = `${counter}`;
                });
                currentDay++;
            }
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
        if (currentDay > daysInMonth) break;
    }
}

createCalendar();
