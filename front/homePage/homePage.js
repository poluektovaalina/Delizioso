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
// document.querySelector('.').addEventListener('click', () => {
//   window.location.href = '';
// })



document.querySelector('.logInbtnHome').addEventListener('click', () => {
  window.location.href = '../signIn/signIn.html';
});

var swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 55,
    on: {
    init: function () {
      updateSlideSize();
    },
    slideChangeTransitionEnd: function () {
      updateSlideSize();
      smileSlide();
      bigSlide();
    }
  }
  });

  function updateSlideSize() {
    let slides = document.querySelectorAll(".swiper-slide");
    let centerIndex = Math.floor(slides.length / 2);

    slides.forEach((slide, index) => {
      let distance = Math.abs(index - centerIndex);
      let scale = 1.5 - distance * 0.15;
      if (scale < 0.5) scale = 0.0; // Минимальный размер
      slide.style.transform = `scale(${scale})`;
    });
  }

  function smileSlide() {
  let slides = document.querySelectorAll(".swiper-slide");
  let activeIndex = swiper.realIndex; // Получаем индекс центрального слайда

  slides.forEach((slide, index) => {
    let distance = Math.abs(index - activeIndex);
    let targetMarginBottom = 0; // Базовое значение

    if (distance === 1) {
      targetMarginBottom = 60; // 1 уровень от центра
    } else if (distance === 2) {
      targetMarginBottom = 160; // 2 уровень от центра
    } else if (distance === 3) {
      targetMarginBottom = 310; // 3 уровень от центра
    }

    animateMargin(slide, targetMarginBottom, 600); // 600ms = 0.6s
  });
}

function animateMargin(element, targetMargin, duration) {
  let start = null;
  let initialMargin = parseFloat(element.style.marginBottom) || 0;
  
  function stepAnimation(timestamp) {
    if (!start) start = timestamp;
    let progress = (timestamp - start) / duration;

    if (progress > 1) progress = 1; // Ограничение на 100%
    
    let newMargin = initialMargin + (targetMargin - initialMargin) * progress;
    element.style.marginBottom = `${newMargin}px`;

    if (progress < 1) {
      requestAnimationFrame(stepAnimation);
    } else {
      element.style.marginBottom = `${targetMargin}px`; // Финальная позиция
    }
  }

  requestAnimationFrame(stepAnimation);
}

// 🔥 Функция для увеличения центрального слайда
function bigSlide() {
  let slides = document.querySelectorAll(".swiper-slide");
  let activeIndex = swiper.realIndex; // Получаем индекс центрального слайда

  slides.forEach((slide, index) => {
    let distance = Math.abs(index - activeIndex);
    let scale = 1.5 - distance * 0.2; // Чем дальше от центра, тем меньше размер
    if (scale < 0.5) scale = 0.5; // Минимальный размер слайдов

    slide.style.transition = "transform 0.4s ease-in-out";
    slide.style.transform = `scale(${scale})`;
  });
}
  // Клик на слайд делает его центральным
  document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
  slide.addEventListener("click", () => {
    // Удаляем класс active у всех слайдов
    document.querySelectorAll(".swiper-slide").forEach(s => {
        s.classList.remove("active"); 
        s.style.transition = "transform 0.6s ease, margin-bottom 0.6s ease";});

    // Добавляем active к текущему слайду
    slide.classList.add("active");

    // Центрируем выбранный слайд
    swiper.slideToLoop(index, 600);
    swiper.style.transition = "transform 0.4s ease-in-out";
  });

  
});


async function getAllDishes() {
  const allFoods = await fetch('http://localhost:4000/api/adminRoutes/getDishes');
  const allFoodsJson = await allFoods.json();
  return allFoodsJson;
}

async function renderDishes() {
  const dishes = await getAllDishes();
  const container = document.getElementById('menu');
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
                        <img src="../img/svg/Star 1.svg" alt="">
                        <img src="../img/svg/Star 1.svg" alt="">
                        <img src="../img/svg/Star 1.svg" alt="">
                        <img src="../img/svg/Star 1.svg" alt="">
                        <img src="../img/svg/Star 1.svg" alt="">
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

