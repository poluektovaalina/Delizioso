document.querySelector('.home').addEventListener('click', () => {
  window.location.href = '../homePage/homePage.html';
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
// document.querySelector('.').addEventListener('click', () => {
//   window.location.href = '';
// })
document.querySelector('.admin').addEventListener('click', () => {
  window.location.href = '../admin/admin.html';
});

async function getAllDishes() {
  const allFoods = await fetch('http://localhost:4000/api/adminRoutes/getDishes');
  const allFoodsJson = await allFoods.json();
  return allFoodsJson;
}


async function renderDishes() {
  const dishes = await getAllDishes();
  const container = document.querySelector('.allFoods');
  container.innerHTML = '';
  dishes.forEach(dish => {
    container.innerHTML += `
                  <div class="item">
                    <div class="imagge">
                        <img src="${dish.imageUrl}" alt="">
                    </div>
                    <div class="title">
                        ${dish.name}
                    </div>
                    <div class="stars">
                        <svg class="star" width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.92612 1.23748C7.45422 -0.387848 9.75363 -0.387847 10.2817 1.23748L10.9804 3.38771C11.2166 4.11458 11.8939 4.60671 12.6582 4.60671H14.9191C16.628 4.60671 17.3386 6.79357 15.956 7.79808L14.1269 9.127C13.5086 9.57623 13.2499 10.3725 13.4861 11.0994L14.1847 13.2496C14.7128 14.8749 12.8525 16.2265 11.47 15.222L9.64086 13.8931C9.02255 13.4438 8.1853 13.4438 7.56698 13.8931L5.73789 15.222C4.3553 16.2265 2.49504 14.8749 3.02314 13.2496L3.7218 11.0994C3.95797 10.3725 3.69924 9.57623 3.08093 9.127L1.25184 7.79808C-0.13075 6.79357 0.579805 4.60671 2.28878 4.60671H4.54966C5.31394 4.60671 5.99129 4.11458 6.22747 3.38771L6.92612 1.23748Z" />
                        </svg>
                        <svg class="star" width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.92612 1.23748C7.45422 -0.387848 9.75363 -0.387847 10.2817 1.23748L10.9804 3.38771C11.2166 4.11458 11.8939 4.60671 12.6582 4.60671H14.9191C16.628 4.60671 17.3386 6.79357 15.956 7.79808L14.1269 9.127C13.5086 9.57623 13.2499 10.3725 13.4861 11.0994L14.1847 13.2496C14.7128 14.8749 12.8525 16.2265 11.47 15.222L9.64086 13.8931C9.02255 13.4438 8.1853 13.4438 7.56698 13.8931L5.73789 15.222C4.3553 16.2265 2.49504 14.8749 3.02314 13.2496L3.7218 11.0994C3.95797 10.3725 3.69924 9.57623 3.08093 9.127L1.25184 7.79808C-0.13075 6.79357 0.579805 4.60671 2.28878 4.60671H4.54966C5.31394 4.60671 5.99129 4.11458 6.22747 3.38771L6.92612 1.23748Z" />
                        </svg>
                        <svg class="star" width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.92612 1.23748C7.45422 -0.387848 9.75363 -0.387847 10.2817 1.23748L10.9804 3.38771C11.2166 4.11458 11.8939 4.60671 12.6582 4.60671H14.9191C16.628 4.60671 17.3386 6.79357 15.956 7.79808L14.1269 9.127C13.5086 9.57623 13.2499 10.3725 13.4861 11.0994L14.1847 13.2496C14.7128 14.8749 12.8525 16.2265 11.47 15.222L9.64086 13.8931C9.02255 13.4438 8.1853 13.4438 7.56698 13.8931L5.73789 15.222C4.3553 16.2265 2.49504 14.8749 3.02314 13.2496L3.7218 11.0994C3.95797 10.3725 3.69924 9.57623 3.08093 9.127L1.25184 7.79808C-0.13075 6.79357 0.579805 4.60671 2.28878 4.60671H4.54966C5.31394 4.60671 5.99129 4.11458 6.22747 3.38771L6.92612 1.23748Z" />
                        </svg>
                        <svg class="star" width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.92612 1.23748C7.45422 -0.387848 9.75363 -0.387847 10.2817 1.23748L10.9804 3.38771C11.2166 4.11458 11.8939 4.60671 12.6582 4.60671H14.9191C16.628 4.60671 17.3386 6.79357 15.956 7.79808L14.1269 9.127C13.5086 9.57623 13.2499 10.3725 13.4861 11.0994L14.1847 13.2496C14.7128 14.8749 12.8525 16.2265 11.47 15.222L9.64086 13.8931C9.02255 13.4438 8.1853 13.4438 7.56698 13.8931L5.73789 15.222C4.3553 16.2265 2.49504 14.8749 3.02314 13.2496L3.7218 11.0994C3.95797 10.3725 3.69924 9.57623 3.08093 9.127L1.25184 7.79808C-0.13075 6.79357 0.579805 4.60671 2.28878 4.60671H4.54966C5.31394 4.60671 5.99129 4.11458 6.22747 3.38771L6.92612 1.23748Z" />
                        </svg>
                        <svg class="star" width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.92612 1.23748C7.45422 -0.387848 9.75363 -0.387847 10.2817 1.23748L10.9804 3.38771C11.2166 4.11458 11.8939 4.60671 12.6582 4.60671H14.9191C16.628 4.60671 17.3386 6.79357 15.956 7.79808L14.1269 9.127C13.5086 9.57623 13.2499 10.3725 13.4861 11.0994L14.1847 13.2496C14.7128 14.8749 12.8525 16.2265 11.47 15.222L9.64086 13.8931C9.02255 13.4438 8.1853 13.4438 7.56698 13.8931L5.73789 15.222C4.3553 16.2265 2.49504 14.8749 3.02314 13.2496L3.7218 11.0994C3.95797 10.3725 3.69924 9.57623 3.08093 9.127L1.25184 7.79808C-0.13075 6.79357 0.579805 4.60671 2.28878 4.60671H4.54966C5.31394 4.60671 5.99129 4.11458 6.22747 3.38771L6.92612 1.23748Z" />
                        </svg>
                    </div>
                    <div class="desc">
                        ${dish.description}
                    </div>
                    <div class="priceOrder">
                        <div class="price">$${dish.price}</div>
                        <div class="btnOrder">
                            Order now
                        </div>
                    </div>
                </div>
    `;
  });
}

document.querySelector('.container').addEventListener('click', (event) => {
  if (event.target.classList.contains('btnOrder')) {
    const button = event.target;
    const dishId = button.getAttribute('data-button');
    const parentItem = button.closest('.item');
    const parentDishId = parentItem ? parentItem.getAttribute('data-id') : null;
    console.log(`ID из кнопки (data-button): ${dishId}`);
    console.log(`ID из блока (data-id): ${parentDishId}`);
    if (parentItem) {
      parentItem.classList.add('activeCard');
    }
  }
});

document.querySelector('.container').addEventListener('click', (event) => {
  const starEl = event.target.closest('.star');
  if (!starEl) return; 

  const starsContainer = starEl.closest('.stars');
  if (!starsContainer) return;

  const item = starsContainer.closest('.item'); 
  const isActive = item.classList.contains('activeCard'); 

  const stars = Array.from(starsContainer.querySelectorAll('.star'));
  const index = stars.indexOf(starEl);

  stars.forEach((star, i) => {
    if (i <= index) {
      if (isActive) {
        star.classList.add('activeClick'); 
      } else {
        star.classList.add('highlighted'); 
      }
    } else {
      star.classList.remove('highlighted');
      star.classList.remove('activeClick'); 
    }
  });
});

renderDishes();


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

if (!localStorage.getItem('email') == 'akbar@gmail.com') {
  document.querySelector('.admin').remove();
}