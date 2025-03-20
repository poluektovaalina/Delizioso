// Перенаправление в админ-панель
document.querySelector('.admin').addEventListener('click', () => {
  window.location.href = '../admin/admin.html';
});

const baseURL = 'http://localhost:4000/api/adminRoutes';

function createDishCard(dish) {
  return `
    <div class="p-6">
      <div class="flex items-center justify-center">
        <div class="bg-white rounded-full p-6 shadow-lg cursor-pointer hover:shadow-2xl transition duration-300">
          <img src="${dish.imageUrl}" alt="${dish.name}" class="w-24 h-24 object-cover">
        </div>
      </div>
      <h2 class="text-[#311F09] text-5xl font-bold text-center mt-6 font-[Poppins]">${dish.name}</h2>
      <p class="text-[#5C4529] text-lg text-center mt-3 px-4">${dish.description}</p>
      <div class="flex items-center justify-between mt-6 px-4">
        <span class="text-[#311F09] text-xl font-bold font-[Poppins]">$${dish.price}</span>
        <button class="bg-[#FF8A00] hover:bg-[#e07a00] text-white px-6 py-3 rounded-full text-lg font-medium transition duration-300 transform hover:scale-105 cursor-pointer font-[Poppins]">
          Order now
        </button>
      </div>
    </div>
  `;
}

async function getAllFoods() {
  try {
    const response = await fetch(`${baseURL}/getDishes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'getAll' }),
    });

    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`);

    const data = await response.json();
    const allFoodsContainer = document.querySelector('.allFoods');
    allFoodsContainer.innerHTML = '';

    if (data.length === 0) {
      allFoodsContainer.innerHTML = '<p class="text-center text-2xl text-gray-700">Нет доступных блюд.</p>';
      return;
    }

    data.forEach(dish => allFoodsContainer.innerHTML += createDishCard(dish));
  } catch (error) {
    console.error('Ошибка при получении блюд:', error);
    alert('Не удалось загрузить блюда. Попробуйте позже.');
  }
}

document.querySelector('.allCategory').addEventListener('click', getAllFoods);

getAllFoods();
