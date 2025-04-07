document.querySelector('.home').addEventListener('click', () => {
  window.location.href = '../homePage/homePage.html';
})

document.querySelector('.goMenu').addEventListener('click', () => {
  window.location.href = '../menu/menu.html';
})
document.querySelector('.aboutUs').addEventListener('click', () => {
  window.location.href = '../aboutUs/aboutUs.html';
})
// document.querySelector('.orderOnline').addEventListener('click', () => {
//   window.location.href = '';
// })
document.querySelector('.reservation').addEventListener('click', () => {
  window.location.href = '../reservation/reservation.html';
})
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



document.querySelector('.logInbtnHome').addEventListener('click', () => {
  window.location.href = '../signIn/signIn.html';
});

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
// contactUs.js



async function contact() {
  const firstName = document.querySelector('firstName').value;
    const lastName = document.querySelector('lastName').value;
    const email = document.querySelector('email').value;
    const subject = document.querySelector('subject').value;
    const message = document.querySelector('message').value;

    // Параметры для отправки
    const formData = {
      firstName,
      lastName,
      email,
      subject,
      message
    };

    // Отправляем данные на сервер с помощью fetch
    try {
      const response = await fetch('http://localhost:4000/api/contactRoutes/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: result.message,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: result.error || 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'There was an error sending your message.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.error(error);
    }
}

document.querySelector('.submit').addEventListener('click', () => {
  contact();
})