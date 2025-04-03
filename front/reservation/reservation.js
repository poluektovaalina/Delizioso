document.querySelector('.home').addEventListener('click', () => {
    window.location.href = '../homePage/homePage.html';
});
document.querySelector('.goMenu').addEventListener('click', () => {
    window.location.href = '../menu/menu.html';
});
document.querySelector('.aboutUs').addEventListener('click', () => {
    window.location.href = '../aboutUs/aboutUs.html';
});

// function formatDate(input) {
//     const months = [
//         "января", "февраля", "марта", "апреля", "мая", "июня",
//         "июля", "августа", "сентября", "октября", "ноября", "декабря"
//     ];

//     // Удаляем лишние пробелы
//     input = input.trim().replace(/\s+/g, " ");

//     let parts;

//     // Формат: DD Месяц YYYY или DD Месяц
//     const regex = /^(\d{1,2})\s([а-я]+)(?:\s(\d{4}))?$/i;
//     const match = input.match(regex);

//     if (match) {
//         let day = parseInt(match[1], 10);
//         let monthIndex = months.indexOf(match[2]);
//         let year = match[3] ? ` ${match[3]} год` : "";

//         if (day < 1 || day > 31 || monthIndex === -1) {
//             return showError("Неверный формат даты");
//         }

//         return `${day} ${months[monthIndex]}${year}`;
//     }

//     return showError("Неверный формат даты");
// }



// function formatTime(input) {
//     input = input.trim().replace(/\s+/g, "").replace(/[,\.]/g, ":");

//     const timeRegex = /^(\d{1,2}):(\d{2})$/;
//     const match = input.match(timeRegex);

//     if (!match) {
//         Swal.fire({
//             title: "Ошибка!",
//             text: "Неверный формат времени. Используйте HH:MM",
//             icon: "error"
//         });
//         return "Ошибка";
//     }

//     let hours = parseInt(match[1], 10);
//     let minutes = parseInt(match[2], 10);

//     if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
//         Swal.fire({
//             title: "Ошибка!",
//             text: "Часы должны быть 0-23, минуты 0-59",
//             icon: "error"
//         });
//         return "Ошибка";
//     }

//     return `${hours} часов ${minutes} минут`;
// }



// const reservationForm = document.getElementById('reservationForm');

// const modal = document.querySelector('.modalFirstResv');


// reservationForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const dateInput = document.querySelector('.reservationDate');
//     const timeInput = document.querySelector('.reservationTime');

//     if (!dateInput || !timeInput) {
//         return showError("Ошибка в элементах формы");
//     }

//     const formattedDate = formatDate(dateInput.value);
//     const formattedTime = formatTime(timeInput.value);

//     if (formattedDate === "Ошибка" || formattedTime === "Ошибка") {
//         return;
//     }

//     dateInput.value = formattedDate;
//     timeInput.value = formattedTime;

//     const modalDate = document.querySelector('.modalFirstResv .date');
//     const modalTime = document.querySelector('.modalFirstResv .time');
//     const modalPeople = document.querySelector('.modalFirstResv .people');

//     if (modalDate && modalTime && modalPeople) {
//         modalDate.textContent = formattedDate;
//         modalTime.textContent = formattedTime;
//         modalPeople.textContent = `${document.querySelector('.partySize').value} человек`;
//     } else {
//         showError("Ошибка: элементы в модальном окне не найдены.");
//         return;
//     }

//     // Открываем модальное окно
//     modal.classList.add('active');
// });

// // Закрываем модальное окно при клике на "крестик"



// function showError(message) {
//     Swal.fire({
//         title: "Ошибка!",
//         text: message,
//         icon: "error"
//     });
//     return "Ошибка";
// }


//НАЧИНАЙ ОТ СЮДА УДАЛЯЮ


async function setReservation(firstName, lastName, phoneNumber, email, occasion, specialRequest) {
    const reserv = await fetch('http://localhost:4000/api/reservationRoutes/reservations', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: document.querySelector('.modalFirstResv .firstName').textContent,
            lastName: document.querySelector('.modalFirstResv .time').textContent,
            phoneNumber: document.querySelector('.modalFirstResv .phoneNumber').textContent,
            email: document.querySelector('.modalSecondResv .name').value,
            occasion: document.querySelector('.modalSecondResv .email').value,
            specialRequest: document.querySelector('.modalSecondResv .phone').value,
        })
    });
}



document.querySelector('.bookButton').addEventListener('click', () => {
    document.querySelector('.modalFirstResv').classList.add('active');
})
document.querySelector('.confirmBtn').addEventListener('click', () => {
    document.querySelector('.modalFirstResv').classList.remove('active');
    document.querySelector('.modalSecondResv').classList.add('active');
})