async function createUser(name, email, password) {
    try {
        const response = await fetch('http://localhost:4000/api/userRoutes/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password }),
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || 'Failed to create user');
        }

        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
}

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('.name').value.trim();
    const email = document.querySelector('.email').value.trim();
    const password = document.querySelector('.password').value.trim();
    
    if (!name || !email || !password) {
        Swal.fire({
            title: "Ошибка!",
            text: "Все поля обязательны для заполнения",
            icon: "warning"
        });
        return;
    }

    try {
        await createUser(name, email, password);
        Swal.fire({
            title: "Отлично!",
            text: `Регистрация прошла успешно`,
            icon: "success"
        });
    } catch (error) {
        Swal.fire({
            title: "Ошибка!",
            text: "Регистрация не удалась",
            icon: "error"
        });
    }
});
