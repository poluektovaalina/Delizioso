document.addEventListener('DOMContentLoaded', () => {
  const addDishForm = document.getElementById('addDishForm');
  const dishList = document.getElementById('dishList');
  const editModal = document.getElementById('editModal');
  const editDishForm = document.getElementById('editDishForm');
  const cancelEditBtn = document.getElementById('cancelEdit');

  let currentEditDishId = null;

  async function getAllFoods() {
    try {
      const response = await fetch('/api/dishes');
      const dishes = await response.json();
      displayDishes(dishes);
    } catch (error) {
      console.error('Error loading dishes:', error);
    }
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
    const name = document.getElementById('dishName').value;
    const price = document.getElementById('dishPrice').value;
    const description = document.getElementById('dishDescription').value;
    try {
      const response = await fetch('/api/dishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, price, description })
      });
      if (!response.ok) throw new Error('Failed to add dish');
      Swal.fire('Success', 'Dish added successfully', 'success');
      addDishForm.reset();
      getAllFoods();
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  });

  dishList.addEventListener('click', async (e) => {
    const li = e.target.closest('li');
    if (!li) return;
    const dishId = li.dataset.id;

    if (e.target.classList.contains('deleteDish')) {
      if (confirm('Delete this dish?')) {
        try {
          const res = await fetch(`/api/dishes/${dishId}`, { method: 'DELETE' });
          if (!res.ok) throw new Error('Failed to delete dish');
          Swal.fire('Deleted', 'Dish deleted successfully', 'success');
          getAllFoods();
        } catch (error) {
          Swal.fire('Error', error.message, 'error');
        }
      }
    }

    if (e.target.classList.contains('editDish')) {
      currentEditDishId = dishId;
      try {
        const res = await fetch(`/api/dishes/${dishId}`);
        const dish = await res.json();
        document.getElementById('editDishName').value = dish.name;
        document.getElementById('editDishDescription').value = dish.description;
        document.getElementById('editDishPrice').value = dish.price;
        editModal.classList.remove('hidden'); 
      } catch (error) {
        Swal.fire('Error', error.message, 'error');
      }
    }
  });

 
  editDishForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('editDishName').value;
    const description = document.getElementById('editDishDescription').value;
    const price = document.getElementById('editDishPrice').value;
    try {
      const res = await fetch(`/api/dishes/${currentEditDishId}`, {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, price })
      });
      if (!res.ok) throw new Error('Failed to update dish');
      Swal.fire('Updated', 'Dish updated successfully', 'success');
      editModal.classList.add('hidden');
      getAllFoods();
    } catch (error) {
      Swal.fire('Error', error.message, 'error');
    }
  });

  cancelEditBtn.addEventListener('click', () => {
    editModal.classList.add('hidden');
  });

  getAllFoods();
});
