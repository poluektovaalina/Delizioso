document.addEventListener('DOMContentLoaded', () => {
  const baseURL = 'http://localhost:4000/api/adminRoutes';
  const addDishForm = document.getElementById('addDishForm');
  const dishList = document.getElementById('dishList');
  const editModal = document.getElementById('editModal');
  const editDishForm = document.getElementById('editDishForm');
  const cancelEditBtn = document.getElementById('cancelEdit');

  let currentEditDishId = null;

  async function fetchDishes(action, bodyData = {}) {
    try {
      const response = await fetch(baseURL + '/getDishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, ...bodyData })
      });
      if (!response.ok) throw new Error('Failed to fetch dishes');
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
      Swal.fire('Error', error.message, 'error');
    }
  }

  async function getAllFoods() {
    const dishes = await fetchDishes('getAll');
    displayDishes(dishes);
  }

  function displayDishes(dishes) {
    dishList.innerHTML = '';
    dishes.forEach(dish => {
      const li = document.createElement('li');
      li.dataset.id = dish.id;
      li.className = 'py-4 flex justify-between items-center';
      li.innerHTML = `
        <div>
          <strong>${dish.name}</strong>
          <p>${dish.description}</p>
          <span>$${dish.price}</span>
          <img src="${dish.imageUrl}" alt="${dish.name}" class="h-20 w-20 object-cover mt-2">
        </div>
        <div>
          <button class="editDish bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
          <button class="deleteDish bg-red-500 text-white px-4 py-2 rounded">Delete</button>
        </div>
      `;
      dishList.appendChild(li);
    });
  }

  addDishForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dishData = {
      name: addDishForm.dishName.value,
      price: addDishForm.dishPrice.value,
      description: addDishForm.dishDescription.value,
      imageUrl: addDishForm.dishImageUrl.value,
    };
    await fetchDishes('add', dishData);
    Swal.fire('Success', 'Dish added successfully', 'success');
    addDishForm.reset();
    getAllFoods();
  });

  dishList.addEventListener('click', async (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const dishId = li.dataset.id;

    if (e.target.classList.contains('deleteDish')) {
      await fetchDishes('delete', { dishId });
      Swal.fire('Deleted', 'Dish deleted successfully', 'success');
      getAllFoods();
    }

    if (e.target.classList.contains('editDish')) {
      currentEditDishId = dishId;
      const dish = await fetchDishes('getOne', { dishId });
      editDishForm.editDishName.value = dish.name;
      editDishForm.editDishDescription.value = dish.description;
      editDishForm.editDishPrice.value = dish.price;
      editDishForm.editDishImageUrl.value = dish.imageUrl;
      editModal.classList.remove('hidden');
    }
  });

  editDishForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updatedDish = {
      id: currentEditDishId,
      name: editDishForm.editDishName.value,
      description: editDishForm.editDishDescription.value,
      price: editDishForm.editDishPrice.value,
      imageUrl: editDishForm.editDishImageUrl.value,
    };
    await fetchDishes('update', updatedDish);
    Swal.fire('Updated', 'Dish updated successfully', 'success');
    editModal.classList.add('hidden');
    getAllFoods();
  });

  cancelEditBtn.addEventListener('click', () => {
    editModal.classList.add('hidden');
  });

  getAllFoods();
});
