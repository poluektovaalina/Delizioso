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
  document.querySelector('.chekout').addEventListener('click', () => {
    window.location.href = '../chekout/chekout.html';
  })

  async function getAllDishes() {
    const allFoods = await fetch('http://localhost:4000/api/adminRoutes/getDishes');
    const allFoodsJson = await allFoods.json();
    return allFoodsJson;
  }


  async function renderDishes(category = 'All') {
    const dishes = await getAllDishes();
    const container = document.querySelector('.allFoods');
    container.innerHTML = '';

    const filtered = category === 'All'
      ? dishes
      : dishes.filter(dish => dish.category && dish.category.toLowerCase() === category.toLowerCase());

    if (filtered.length === 0) {
      container.innerHTML = '<p>No dishes available in this category.</p>';
    } else {
      filtered.forEach(dish => {
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
                          <div class="btnOrder" data-button="${dish.id}">
                              Order now
                          </div>
                      </div>
                  </div>
        `;
      });
    }
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
        button.style.backgroundColor = '#fff';
        button.style.color = '#FF8A00';
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

  if (localStorage.getItem('email') !== 'akbar@gmail.com') {
    document.querySelector('.admin').remove();
  }

  document.querySelectorAll('.categoryBtn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCategory = btn.getAttribute('data-category');
      renderDishes(selectedCategory);
    });
  });

  if(!localStorage.getItem('email')) {
    window.location.href = '../signIn/signIn.html';
  }

  document.querySelector('.container').addEventListener('click', async (event) => {
    if (event.target.classList.contains('btnOrder')) {
      const button = event.target;
      const dishId = button.getAttribute('data-button');
      const parentItem = button.closest('.item');
      const dishName = parentItem.querySelector('.title').textContent;
      const dishPrice = parseFloat(parentItem.querySelector('.price').textContent.replace('$', '').trim());
      
      // Получение информации о пользователе
      const customerEmail = localStorage.getItem('email');
      const customerName = localStorage.getItem('name');
      if (!customerEmail) {
        alert('Please log in to place an order!');
        return;
      }
  
      const orderData = {
        dishId: dishId,
        name: dishName.trim(),
        quantity: 1,
        price: dishPrice,
        customerName: customerName,
        customerEmail: customerEmail,
      };
  
      try {
        const response = await fetch('http://localhost:4000/api/orderRoutes/addOrder', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        });
  
        if (response.ok) {
          const order = await response.json();
          console.log('Order created:', order);
          Swal.fire('Success!', 'Заказ создан!', 'success');
  
          // Сохранение идентификатора блюда в localStorage для сохранения состояния
          let activeOrders = JSON.parse(localStorage.getItem('activeOrders')) || [];
          if (!activeOrders.includes(dishId)) {
            activeOrders.push(dishId);
            localStorage.setItem('activeOrders', JSON.stringify(activeOrders));
          }
          
          // Обновляем список заказов
          fetchOrders();
  
          // Применяем активное состояние к карточке блюда
          parentItem.classList.add('activeCard');
          button.style.backgroundColor = '#fff';
          button.style.color = '#FF8A00';
        } else {
          Swal.fire('Error!', 'Возникла проблема с оформлением вашего заказа.', 'error');
        }
      } catch (error) {
        console.error('Error creating order:', error);
        Swal.fire('Error!', 'Возникла проблема с оформением вашего заказа.', 'error');
      }
    }
  });
  

  // Функция для получения заказов с бэкенда
  // Функция для получения заказов с бэкенда
  async function fetchOrders() {
    try {
      const response = await fetch('http://localhost:4000/api/orderRoutes/getOrders');
      if (!response.ok) {
        throw new Error('Не удалось загрузить заказы');
      }
      const orders = await response.json();
      displayOrders(orders);
      updateOrderTotals(orders);
    } catch (error) {
      console.error('Ошибка при получении заказов:', error);
    }
  }

  function displayOrders(orders) {
    const groupCards = document.querySelector('.groupCards');
    groupCards.innerHTML = ''; // Очищаем контейнер
    // Делегирование событий для удаления заказа на контейнере ордер-листа
document.querySelector('.groupCards').addEventListener('click', async (event) => {
  const removeButton = event.target.closest('.remove');
  if (!removeButton) return; // Если кликнули не по мусорке

  // Получаем карточку заказа, чтобы взять orderId и dishId
  const orderCard = removeButton.closest('.itemCards');
  if (!orderCard) return;

  const orderId = orderCard.getAttribute('data-order-id');
  const dishId = orderCard.getAttribute('data-dish-id');

  console.log('Удаляем заказ с orderId:', orderId, 'и dishId:', dishId);

  // Удаляем заказ на сервере
  try {
    await deleteOrder(orderId);
  } catch (error) {
    console.error('Ошибка при удалении заказа:', error);
    return;
  }

  // Обновляем localStorage: удаляем dishId из массива activeOrders
  let activeOrders = JSON.parse(localStorage.getItem('activeOrders')) || [];
  activeOrders = activeOrders.filter(id => id !== dishId);
  localStorage.setItem('activeOrders', JSON.stringify(activeOrders));

  // Ищем карточку блюда в меню по dishId и убираем с неё activeCard
  const menuItem = document.querySelector(`.item .btnOrder[data-button="${dishId}"]`)?.closest('.item');
  if (menuItem) {
    menuItem.classList.remove('activeCard');
    const btnOrder = menuItem.querySelector('.btnOrder');
    // Сброс стилей кнопки (можно задать дефолтные значения или просто убрать inline-стили)
    btnOrder.style.backgroundColor = '';
    btnOrder.style.color = '';
  } else {
    console.warn('Не найдена карточка блюда для dishId:', dishId);
  }

  // Удаляем карточку заказа из ордер-листа
  orderCard.remove();

  // (Опционально) Если итоговые суммы заказа зависят от текущих заказов, обновляем их
  fetchOrders().then(() => {
    markActiveDishes(); // Если необходимо восстановить активное состояние для остальных блюд
  });
});

    
    orders.forEach(order => {
      const orderCard = document.createElement('div');
      orderCard.classList.add('itemCards');
      // Добавляем data-атрибут с dishId, чтобы потом можно было его извлечь
      orderCard.setAttribute('data-dish-id', order.dishId);
      orderCard.setAttribute('data-order-id', order.id);
      orderCard.innerHTML = `
        <div class="groupClosed">
          <div class="title">${order.name.trim()}</div>
          <div class="remove" data-order-id="${order.id}">
            <!-- SVG иконка удаления -->
          </div>
        </div>
        <div class="groupClosed">
          <div class="title">${order.name.trim()}</div>
          <div class="remove" data-order-id="${order.id}">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V6" stroke-width="1.5"/>
              <path d="M10 3H14" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10 10L10 17" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M14 10L14 17" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M4 6H20" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div class="groupCounts">
          <div class="counts">
            <div class="minus">
              <svg width="13" height="2" viewBox="0 0 13 2" fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg">
                <path d="M0.634766 0.61969H11.4376" stroke-width="1.24648" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="countNum">${order.quantity}</div>
            <div class="plus">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg">
                <path d="M1.39648 6.61969H12.1993" stroke-width="1.24648" stroke-linecap="round"/>
                <path d="M6.79688 1.21832L6.79687 12.0211" stroke-width="1.24648" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
          <div class="price">$${(order.price * order.quantity).toFixed(2)}</div>
        </div>  
      `;
      groupCards.appendChild(orderCard);
    });
  
    // Назначаем обработчики событий для новых элементов
    addEventListeners();
  }
  
  function addEventListeners() {
    // Обработчик для удаления заказа
    document.querySelectorAll('.remove').forEach(button => {
      button.addEventListener('click', async (event) => {
        // Получаем ID заказа
        const orderId = event.target.closest('.remove').getAttribute('data-order-id');
  
        // Получаем dishId из карточки заказа
        const orderCard = event.target.closest('.itemCards');
        const dishId = orderCard.getAttribute('data-dish-id');
  
        // Выполняем удаление заказа через запрос на сервер
        await deleteOrder(orderId);
  
        // Обновляем localStorage: удаляем dishId из массива activeOrders
        let activeOrders = JSON.parse(localStorage.getItem('activeOrders')) || [];
        activeOrders = activeOrders.filter(id => id !== dishId);
        localStorage.setItem('activeOrders', JSON.stringify(activeOrders));
  
        // Обновляем список заказов и перерисовываем активные карточки
        fetchOrders().then(() => {
          markActiveDishes();
        });
      });
    });
  
    // Здесь можно назначить обработчики для кнопок "минус" и "плюс"
  }
  
  
  // Функция для удаления заказа (через POST запрос)
  const deleteOrder = async (orderId) => {
    try {
      const response = await fetch('http://localhost:4000/api/orderRoutes/deleteOrder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: orderId }),  // Отправляем только ID заказа
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);  // Успешное удаление
      } else {
        const error = await response.json();
        console.error('Ошибка:', error.message);  // Ошибка при удалении
      }
    } catch (error) {
      console.error('Ошибка при удалении заказа:', error);
    }
  };


  // Функция для добавления обработчиков событий на кнопки "удалить", "минус" и "плюс"
  function addEventListeners() {
    // Обработчики для удаления заказа
    document.querySelectorAll('.remove').forEach(button => {
      button.addEventListener('click', async (event) => {
        const orderId = event.target.closest('.remove').getAttribute('data-order-id');
        await deleteOrder(orderId);
        fetchOrders();
      });
    });

    // Обработчики для уменьшения количества
    document.querySelectorAll('.minus').forEach(button => {
      button.addEventListener('click', async (event) => {
        const orderId = event.target.closest('.itemCards').getAttribute('data-order-id');
        await updateOrderQuantity(orderId, 'minus');
        fetchOrders();
      });
    });

    // Обработчики для увеличения количества
    document.querySelectorAll('.plus').forEach(button => {
      button.addEventListener('click', async (event) => {
        const orderId = event.target.closest('.itemCards').getAttribute('data-order-id');
        await updateOrderQuantity(orderId, 'plus');
        fetchOrders();
      });
    });
  }

  // Функция для обновления количества заказа (через POST запрос)
  async function updateOrderQuantity(orderId, action) {
    try {
      const response = await fetch(`http://localhost:4000/api/orderRoutes/getOrder/${orderId}`);
      if (!response.ok) {
        throw new Error('Не удалось загрузить заказ');
      }
      const order = await response.json();
      let newQuantity = order.quantity;
      if (action === 'plus') {
        newQuantity += 1;
      } else if (action === 'minus' && newQuantity > 1) {
        newQuantity -= 1;
      }
      const updateResponse = await fetch('http://localhost:4000/api/orderRoutes/updateOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ orderId: orderId, quantity: newQuantity })
      });
      if (!updateResponse.ok) {
        throw new Error('Не удалось обновить количество');
      }
      console.log('Количество обновлено');
    } catch (error) {
      console.error('Ошибка при обновлении количества:', error);
    }
  }

  // Функция для подсчета итоговых сумм
  function updateOrderTotals(orders) {
    let subtotal = 0;
    orders.forEach(order => {
      subtotal += order.price * order.quantity;
    });
    const taxFee = subtotal * 0.05;
    const totalPrice = subtotal + taxFee;
    document.querySelector('.allPrice .price').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.ourMoney .price').textContent = `$${taxFee.toFixed(2)}`;
    document.querySelector('.endPrice .price').textContent = `$${totalPrice.toFixed(2)}`;
  }

  function markActiveDishes() {
    const activeOrders = JSON.parse(localStorage.getItem('activeOrders')) || [];
    document.querySelectorAll('.item').forEach(item => {
      // Предполагается, что у каждой карточки блюда кнопка "Order now" имеет data-button с идентификатором блюда
      const btnOrder = item.querySelector('.btnOrder');
      if (!btnOrder) return;
      const dishId = btnOrder.getAttribute('data-button');
      if (activeOrders.includes(dishId)) {
        item.classList.add('activeCard');
        btnOrder.style.backgroundColor = '#fff';
        btnOrder.style.color = '#FF8A00';
      }
    });
  }
  
  // После отрисовки блюд вызываем функцию для восстановления состояния:
  renderDishes().then(() => {
    markActiveDishes();
  });
  
  // Изначальный вызов функции для загрузки заказов
  fetchOrders();

