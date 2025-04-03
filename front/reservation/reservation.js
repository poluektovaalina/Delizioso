document.querySelector('.home').addEventListener('click', () => {
    window.location.href = '../homePage/homePage.html';
});
document.querySelector('.goMenu').addEventListener('click', () => {
    window.location.href = '../menu/menu.html';
});
document.querySelector('.aboutUs').addEventListener('click', () => {
    window.location.href = '../aboutUs/aboutUs.html';
});

function formatDate(input) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    input = input.trim().replace(/,/g, ".").replace(/\s+/g, " ");
    input = input.replace(/(\d)([а-я]+)/i, "$1 $2");

    let parts;

    // Формат: DD.MM.YYYY или DD.MM
    if (/^\d{1,2}\.\d{1,2}(\.\d{4})?$/.test(input)) {
        parts = input.split(".");
        let day = parseInt(parts[0], 10);
        let monthIndex = parseInt(parts[1], 10) - 1;
        let year = parts[2] ? ` ${parts[2]} год` : "";

        if (day < 1 || day > 31 || monthIndex < 0 || monthIndex > 11) {
            return showError("Неверный формат даты");
        }

        return `${day} ${months[monthIndex]}${year}`;
    }

    // Формат: DD Месяц YYYY или DD Месяц
    else if (/^\d{1,2} [а-я]+( \d{4})?$/.test(input)) {
        // Преобразуем месяц в нижний регистр
        input = input.toLowerCase();

        parts = input.split(" ");
        let day = parseInt(parts[0], 10);
        let monthIndex = months.indexOf(parts[1]);
        let year = parts[2] ? ` ${parts[2]} год` : "";

        if (day < 1 || day > 31 || monthIndex === -1) {
            return showError("Неверный формат даты");
        }

        return `${day} ${months[monthIndex]}${year}`;
    }

    return showError("Неверный формат даты");
}

function formatTime(input) {
    input = input.replace(/\s+/g, "").replace(/[,\.]/g, ":");

    const parts = input.split(":");
    if (parts.length !== 2) {
        Swal.fire({
            title: "Ошибка!",
            text: "Неверный формат времени",
            icon: "error"
        });
        return "Ошибка";
    }

    let hours = parseInt(parts[0], 10);
    let minutes = parseInt(parts[1], 10);

    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        Swal.fire({
            title: "Ошибка!",
            text: "Неверный формат времени",
            icon: "error"
        });
        return "Ошибка";
    }

    return `${hours} часов ${minutes} минут`;
}




const modalFirstRev = document.querySelector('.modalFirstResv'); // Исправлено
const bookButton = document.getElementById('reservationForm');

bookButton.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("Кнопка нажата"); 
    if (modalFirstRev) {
        modalFirstRev.classList.add('active'); // Открываем модальное окно
    } else {
        console.error("Модальное окно не найдено");
    }

    if (!timeInput.value.trim()) {
        Swal.fire({
            title: "Ошибка!",
            text: "Введите время!",
            icon: "error"
        });
        return;
    }
});

confirmBtn.addEventListener('click', () =>{
    modalFirstRev.classList.remove('active');
    modalSecondResv.classList.add('active')
})

//НАЧИНАЙ ОТ СЮДА УДАЛЯЮ

