async function login(email, password) {
    try {
        const response = await fetch('http://localhost:4000/api/userRoutes/loginUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to login');
        }

        const data = await response.json();
        console.log('Login successful:', data);

        Swal.fire({
            title: "Добро пожаловать!",
            text: "Вы успешно вошли в систему",
            icon: "success"
        });
        window.location.href = '../homePage/homePage.html';
        return data;
    } catch (error) {
        console.error('Login error:', error.message);

        Swal.fire({
            title: "Ошибка входа!",
            text: error.message,
            icon: "error"
        });
    }
}

document.querySelector('form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.querySelector('.email').value.trim();
    const password = document.querySelector('.password').value.trim();
    if (!email || !password) {
        Swal.fire({
            title: "Ошибка!",
            text: "Заполните все поля",
            icon: "warning"
        });
        return;
    }
    await login(email, password);
});
