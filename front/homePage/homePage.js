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
      s.style.transition = "transform 0.6s ease, margin-bottom 0.6s ease";
    });

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
                  <div data-id="${dish.id}" class="item">
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
                        <div data-button="${dish.id}" class="btnOrder">
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
    if (dishId) {
      window.location.href = `../menu/menu.html`;
    }
  }
});








renderDishes();
