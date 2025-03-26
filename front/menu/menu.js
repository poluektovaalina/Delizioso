
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