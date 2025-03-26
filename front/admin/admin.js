async function getAllDishes() {
  const allFoods = await fetch('http://localhost:4000/api/adminRoutes/getDishes');
  const allFoodsJson = await allFoods.json();
  return allFoodsJson;
}

async function createDish() {
  await fetch('http://localhost:4000/api/adminRoutes/createDish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: document.getElementById('dishName').value,
      description: document.getElementById('dishDescription').value,
      price: document.getElementById('dishPrice').value,
      imageUrl: document.getElementById('dishImageUrl').value
    })
  });
  await refreshDishes();
}

document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  await createDish();
});

async function deleteDish(id) {
  await fetch(`http://localhost:4000/api/adminRoutes/deleteDish`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id })
  });
  await refreshDishes();
}

async function updateDish(id) {
  await fetch(`http://localhost:4000/api/adminRoutes/updateDish`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id,
      name: document.getElementById('editDishName').value,
      description: document.getElementById('editDishDescription').value,
      price: document.getElementById('editDishPrice').value,
      imageUrl: document.getElementById('editDishImageUrl').value
    })
  });
  await refreshDishes();
}

async function refreshDishes() {
  const allFoods = await getAllDishes();
  const allFoodsContainer = document.querySelector('.allFoods');
  allFoodsContainer.innerHTML = '';
  allFoods.forEach(dish => allFoodsContainer.innerHTML += createDishCard(dish));
}

function createDishCard(dish) {
  return `
    <div class="dish-card bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-2 items-start">
      <h3 class="text-xl font-bold text-gray-900">${dish.name}</h3>
      <p class="text-gray-700">${dish.description}</p>
      <p class="text-gray-900 font-semibold">Price: $${dish.price}</p>
      <img src="${dish.imageUrl}" alt="${dish.name}" class="w-full h-40 object-cover rounded-md mb-4"/>

      <div class="flex space-x-2 mt-2">
        <button onclick="deleteDish('${dish.id}')"
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md">
          Delete
        </button>
        <button onclick="openEditModal('${dish.id}', '${dish.name}', '${dish.description}', '${dish.price}', '${dish.imageUrl}')"
          class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md">
          Edit
        </button>
      </div>
    </div>
  `;
}


function openEditModal(id, name, description, price, imageUrl) {
  document.getElementById('editDishName').value = name;
  document.getElementById('editDishDescription').value = description;
  document.getElementById('editDishPrice').value = price;
  document.getElementById('editDishImageUrl').value = imageUrl;

  const saveButton = document.getElementById('saveEditDish');
  saveButton.onclick = () => updateDish(id);

  document.getElementById('editModal').classList.remove('hidden');
}

refreshDishes();