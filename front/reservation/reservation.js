document.querySelector('.home').addEventListener('click', () => {
    window.location.href = '../homePage/homePage.html';
})
document.querySelector('.goMenu').addEventListener('click', () => {
    window.location.href = '../menu/menu.html';
})
document.querySelector('.aboutUs').addEventListener('click', () => {
    window.location.href = '../aboutUs/aboutUs.html';
})

function formatDate(input) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    input = input.replace(/\s+/g, "").replace(/,/g, ".");

    const parts = input.split(".");
    if (parts.length < 2 || parts.length > 3) {
        Swal.fire({
            title: "Ошибка",
            text: "Неверный формат даты",
            icon: "error"
        });
    }
    let day = parseInt(parts[0], 10);
    let monthIndex = parseInt(parts[1], 10) - 1;
    let year = parts[2] ? ` ${parts[2]} год` : "";

    if (isNaN(day) || isNaN(monthIndex) || monthIndex < 0 || monthIndex > 11) {
        Swal.fire({
            title: "Ошибка!",
            text: "Неверный формат даты",
            icon: "error"
        });
    }

    return `${day} ${months[monthIndex]}${year}`;
}


function formatTime(input) {
    input = input.replace(/\s+/g, "").replace(/[,\.]/g, ":");

    const parts = input.split(":");
    if (parts.length !== 2){
        Swal.fire({
            title: "Ошибка!",
            text: "Неверный формат времени",
            icon: "error"
        });
    } 

    let hours = parseInt(parts[0], 10);
    let minutes = parseInt(parts[1], 10);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        Swal.fire({
            title: "Ошибка!",
            text: "Неверный формат времени",
            icon: "error"
        });
    }

    return `${hours} часов ${minutes} минут`;
}




const modalFirstRev = document.querySelector('.modalFirstResv'); // Исправлено
const modalSecondResv = document.querySelector('.modalSecondResv'); // Исправлено
const bookButton = document.getElementById('reservationForm');
const confirmBtn = document.querySelector('.confirmBtn')

bookButton.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Кнопка нажата"); 
    if (modalFirstRev) {
        modalFirstRev.classList.add('active'); // Добавляем класс 'active'
    } else {
        console.error("Модальное окно не найдено");
    }
});

confirmBtn.addEventListener('click', () =>{
    modalFirstRev.classList.remove('active');
    modalSecondResv.classList.add('active')
})

//НАЧИНАЙ ОТ СЮДА УДАЛЯЮ

