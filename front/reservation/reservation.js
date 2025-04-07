document.querySelector('.home').addEventListener('click', () => {
    window.location.href = '../homePage/homePage.html';
});
document.querySelector('.goMenu').addEventListener('click', () => {
    window.location.href = '../menu/menu.html';
});
document.querySelector('.aboutUs').addEventListener('click', () => {
    window.location.href = '../aboutUs/aboutUs.html';
});

document.querySelector('.contactUs').addEventListener('click', () => {
    window.location.href = '../contactUs/contactUs.html';
})
document.querySelector('.Menu').addEventListener('click', () => {
    window.location.href = '../menu/menu.html';
  })
  document.querySelector('.Home').addEventListener('click', () => {
    window.location.href = '../homePage/homePage.html';
  })
  document.querySelector('.Catering').addEventListener('click', () => {
    window.location.href = '../menu/menu.html';
  })
  document.querySelector('.Reservation').addEventListener('click', () => {
    window.location.href = '../reservation/reservation.html';
  })
  document.querySelector('.About').addEventListener('click', () => {
    window.location.href = '../aboutUs/aboutUs.html';
  })

function formatDate(input) {
    const months = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
    ];

    // Удаляем лишние пробелы
    input = input.trim().replace(/\s+/g, " ");

    let parts;

    // Формат: DD Месяц YYYY или DD Месяц
    const regex = /^(\d{1,2})\s([а-я]+)(?:\s(\d{4}))?$/i;
    const match = input.match(regex);

    if (match) {
        let day = parseInt(match[1], 10);
        let monthIndex = months.indexOf(match[2]);
        let year = match[3] ? ` ${match[3]} год` : "";

        if (day < 1 || day > 31 || monthIndex === -1) {
            return showError("Неверный формат даты");
        }

        return `${day} ${months[monthIndex]}${year}`;
    }

    return showError("Неверный формат даты");
}



function formatTime(input) {
    input = input.trim().replace(/\s+/g, "").replace(/[,\.]/g, ":");

    const timeRegex = /^(\d{1,2}):(\d{2})$/;
    const match = input.match(timeRegex);

    if (!match) {
        Swal.fire({
            title: "Ошибка!",
            text: "Неверный формат времени. Используйте HH:MM",
            icon: "error"
        });
        return "Ошибка";
    }

    let hours = parseInt(match[1], 10);
    let minutes = parseInt(match[2], 10);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        Swal.fire({
            title: "Ошибка!",
            text: "Часы должны быть 0-23, минуты 0-59",
            icon: "error"
        });
        return "Ошибка";
    }

    return `${hours} часов ${minutes} минут`;
}



const reservationForm = document.getElementById('reservationForm');

const modal = document.querySelector('.modalFirstResv');
const secondModal = document.querySelector('.modalSecondResv');


reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const dateInput = document.querySelector('.reservationDate');
    const timeInput = document.querySelector('.reservationTime');

    if (!dateInput || !timeInput) {
        return showError("Ошибка в элементах формы");
    }

    const formattedDate = formatDate(dateInput.value);
    const formattedTime = formatTime(timeInput.value);

    if (formattedDate === "Ошибка" || formattedTime === "Ошибка") {
        return;
    }

    dateInput.value = formattedDate;
    timeInput.value = formattedTime;

    const modalDate = document.querySelector('.modalFirstResv .date');
    const modalTime = document.querySelector('.modalFirstResv .time');
    const modalPeople = document.querySelector('.modalFirstResv .people');
    const nextModalDate = document.querySelector('.modalSecondResv .date');
    const nextModalTime = document.querySelector('.modalSecondResv .time');
    const nextModalPeople = document.querySelector('.modalSecondResv .people');

    if (modalDate && modalTime && modalPeople) {
        modalDate.textContent = formattedDate;
        modalTime.textContent = formattedTime;
        modalPeople.textContent = `${document.querySelector('.partySize').value} человек`;
    } else {
        showError("Ошибка: элементы в модальном окне не найдены.");
        return;
    }
    if (nextModalDate && nextModalTime && nextModalPeople) {
        nextModalDate.textContent = formattedDate;
        nextModalTime.textContent = formattedTime;
        nextModalPeople.textContent = `${document.querySelector('.partySize').value} человек`;
    } else {
        showError("Ошибка: элементы в модальном окне не найдены.");
        return;
    }

    // Открываем модальное окно
    modal.classList.add('active');
    
});

// Закрываем модальное окно при клике на "крестик"



function showError(message) {
    Swal.fire({
        title: "Ошибка!",
        text: message,
        icon: "error"
    });
    return "Ошибка";
}


//НАЧИНАЙ ОТ СЮДА УДАЛЯЮ


// Обработчик клика по кнопке Book now
document.querySelector('.confirmBtn').addEventListener('click', (e) => {
    e.preventDefault(); // Останавливаем стандартное поведение (отправку формы)

    const firstName = document.querySelector('.modalFirstResv .firstName').value;
    const lastName = document.querySelector('.modalFirstResv .lastName').value;
    const phoneNumber = document.querySelector('.modalFirstResv .phoneNumber').value;
    const email = document.querySelector('.modalFirstResv .email').value;
    const occasion = document.querySelector('.modalFirstResv .accasion').value;
    const specialRequest = document.querySelector('.modalFirstResv .request').value;
    // Вызов функции для отправки запроса
    setReservation(firstName, lastName, phoneNumber, email, occasion, specialRequest);
    document.querySelector('.modalFirstResv').classList.remove('active');
    document.querySelector('.modalSecondResv').classList.add('active');
    document.querySelector('.modalSecondResv .accasion').textContent = occasion;
    document.querySelector('.modalSecondResv .request').textContent = specialRequest;
});

async function setReservation(firstName, lastName, phoneNumber, email, occasion, specialRequest) {
    try {
        // Отправка данных на сервер
        const response = await fetch('http://localhost:4000/api/reservationRoutes/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                phoneNumber: phoneNumber,
                email: email,
                occasion: occasion,
                specialRequest: specialRequest,
            }),
        });

        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Ошибка: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        
        if (response.ok) {
            Swal.fire({
                title: "Отлично!",
                text: `Бронирование прошло успешно! Ваши данные: ${data}`,
                icon: "success",
            });

            document.querySelector('.modalFirstResv').classList.remove('active');
            document.querySelector('.modalSecondResv').classList.add('active');
        } else {
            Swal.fire({
                title: "Ошибка!",
                text: data.message || "Не удалось выполнить бронирование.",
                icon: "error",
            });
        }
    } catch (error) {
        Swal.fire({
            title: "Ошибка!",
            text: "Произошла ошибка при отправке данных.",
            icon: "error",
        });
    }
}


function showError(message) {
    Swal.fire({
        title: "Ошибка!",
        text: message,
        icon: "error"
    });
}

document.querySelector('.dataReservation').addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector('.modalFirstResv .firstName').value;
    const lastName = document.querySelector('.modalFirstResv .lastName').value;
    const phoneNumber = document.querySelector('.modalFirstResv .phoneNumber').value;
    const email = document.querySelector('.modalFirstResv .email').value;
    const occasion = document.querySelector('.modalFirstResv .accasion').value;
    const specialRequest = document.querySelector('.modalFirstResv .request').value;
    
    setReservation(firstName, lastName, phoneNumber, email, occasion, specialRequest);
    console.log(firstName, lastName, phoneNumber, email, occasion, specialRequest);
});

document.querySelector('.bookButton').addEventListener('click', () => {
    document.querySelector('.modalFirstResv').classList.add('active');
});

document.querySelector('.confirmBtn').addEventListener('click', () => {
    document.querySelector('.modalFirstResv').classList.remove('active');
    document.querySelector('.modalSecondResv').classList.add('active');
})

document.querySelector('.closed').addEventListener('click', () => {
    document.querySelector('.modalFirstResv').classList.remove('active');
})
document.querySelector('.closedSec').addEventListener('click', () => {
    document.querySelector('.modalSecondResv').classList.remove('active');
})

document.querySelector('.stateAbove').addEventListener('click', () => {
    document.querySelector('.stateAbove').classList.toggle('activeAbove')
})
document.querySelector('.newsAbove').addEventListener('click', () => {
    document.querySelector('.newsAbove').classList.toggle('activeAbove')
})
document.querySelector('.newsRes').addEventListener('click', () => {
    document.querySelector('.newsRes').classList.toggle('activeAbove')
})

document.querySelector('.modify').addEventListener('click', () => {
    document.querySelector('.modalSecondResv').classList.remove('active');
    document.querySelector('.modalFirstResv').classList.add('active');
})

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.modalSecondResv').classList.remove('active');
    document.querySelector('.modalClose').classList.add('active');
})

document.querySelector('.canselend').addEventListener('click', () => {
    document.querySelector('.modalClose').classList.remove('active');
})

document.querySelector('.closedClose').addEventListener('click', () => {
    document.querySelector('.modalClose').classList.remove('active');
})
async function deleteReservation(firstName, lastName) {
    try {
        const response = await fetch('http://localhost:4000/api/reservationRoutes/deleteReservation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName }),
        });

        if (response.ok) {
            Swal.fire({
                title: "Отлично!",
                text: `Бронирование успешно удалено! Ваши данные: ${data}`,
                icon: "success",
            });
        } else {
            Swal.fire({
                title: "Плохо!",
                text: `Бронирование не удалено! Ваши данные: ${data}`,
                icon: "error",
            });
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
document.querySelector('.cancel').addEventListener('click', () => {
    const firstName = document.querySelector('.modalSecondResv .firstName').value;
    const lastName = document.querySelector('.modalSecondResv .lastName').value;
    deleteReservation(firstName, lastName);
})

if (localStorage.getItem('email')) {
    const logIn = document.querySelector('.logInbtnHome');

    // Создаём новый div вместо старого
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-greeting');
    userDiv.style.display = 'flex';
    userDiv.style.alignItems = 'center';
    userDiv.style.gap = '12px';
    userDiv.style.padding = '8px 15px';
    userDiv.style.borderRadius = '10px';
    userDiv.style.background = 'rgba(255, 255, 255, 0.1)';
    userDiv.style.backdropFilter = 'blur(10px)';
    userDiv.style.transition = 'background 0.3s ease-in-out';

    // Ховер эффект для userDiv
    userDiv.addEventListener('mouseenter', () => {
      userDiv.style.background = 'rgba(255, 255, 255, 0.2)';
    });
    userDiv.addEventListener('mouseleave', () => {
      userDiv.style.background = 'rgba(255, 255, 255, 0.1)';
    });

    // Кнопка выхода
    const logoutBtn = document.createElement('span');
    logoutBtn.textContent = 'Выйти';
    logoutBtn.style.fontWeight = 'bold';
    logoutBtn.style.color = 'white';
    logoutBtn.style.backgroundColor = '#FF8A00';
    logoutBtn.style.padding = '8px 15px';
    logoutBtn.style.borderRadius = '8px';
    logoutBtn.style.cursor = 'pointer';
    logoutBtn.style.transition = 'background 0.3s, transform 0.2s';

    // Ховер эффект для кнопки выхода
    logoutBtn.addEventListener('mouseenter', () => {
      logoutBtn.style.backgroundColor = '#E67E22';
      logoutBtn.style.transform = 'scale(1.05)';
    });
    logoutBtn.addEventListener('mouseleave', () => {
      logoutBtn.style.backgroundColor = '#FF8A00';
      logoutBtn.style.transform = 'scale(1)';
    });

    // Имя пользователя
    const userName = document.createElement('span');
    userName.textContent = localStorage.getItem('name');
    userName.style.fontWeight = 'bold';
    userName.style.color = 'black';
    userName.style.cursor = 'pointer';
    userName.style.transition = 'color 0.3s ease-in-out';

    // Ховер эффект для имени
    userName.addEventListener('mouseenter', () => {
      userName.style.color = '#FFD700'; // Золотой цвет при наведении
    });
    userName.addEventListener('mouseleave', () => {
      userName.style.color = 'black';
    });

    // Добавляем обработчики событий
    logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('email');
      localStorage.removeItem('name');
      window.location.href = '../signIn/signIn.html';
    });

    userName.addEventListener('click', () => {
      Swal.fire({
        title: "Добро пожаловать!",
        text: "Вы успешно вошли в систему",
        icon: "success"
      });
    });

    // Добавляем элементы внутрь нового div
    userDiv.appendChild(logoutBtn);
    userDiv.appendChild(userName);

    // Заменяем старый элемент новым
    logIn.replaceWith(userDiv);
  }

  
