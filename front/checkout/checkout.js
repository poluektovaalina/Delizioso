document.querySelector('.home').addEventListener('click', () => {
    window.location.href = '../homePage/homePage.html';
});
document.querySelector('.goMenu').addEventListener('click', () => {
    window.location.href = '../menu/menu.html';
});
document.querySelector('.aboutUs').addEventListener('click', () => {
    window.location.href = '../aboutUs/aboutUs.html';
});

document.querySelector('.contactUs').addEventListener('click', () => {
    window.location.href = '../contactUs/contactUs.html';
  });

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

const itemGroupRadio = document.querySelectorAll('.groupRadio .item .Order');

itemGroupRadio.forEach(orderInput => {
    orderInput.addEventListener('click', () => {
        const group = orderInput.closest('.groupRadio');

        group.querySelectorAll('.Order').forEach(input => {
            input.classList.remove('activeItemRadio');
        });

        orderInput.classList.add('activeItemRadio');
    });
});

const itemGroupMethod = document.querySelectorAll('.groupMethod .groupRadio .item .Delivery');

itemGroupMethod.forEach(deliveryInput => {
    deliveryInput.addEventListener('click', () => {
        const groupDelivery = deliveryInput.closest('.groupMethod .groupRadio');
    
        groupDelivery.querySelectorAll('.Delivery').forEach(input => {
            input.classList.remove('activeItemRadio');
        });
    
        deliveryInput.classList.add('activeItemRadio');
    });
});

const itemGroupPayment = document.querySelectorAll('.groupPayment .groupRadio .item .Cash');

itemGroupPayment.forEach(CashInput => {
    CashInput.addEventListener('click', () => {
        const groupDelivery = CashInput.closest('.groupPayment .groupRadio');
    
        groupDelivery.querySelectorAll('.Cash').forEach(input => {
            input.classList.remove('activeItemRadio');
        });
    
        CashInput.classList.add('activeItemRadio');
    });
});

document.querySelector('.choose').addEventListener('click', () => {
    document.querySelector('.choose').classList.toggle('activeChoose');
});

document.querySelector('.change').addEventListener('click', () => {
    document.querySelector('.modalShippingAddress').classList.add('activeMap');
});

document.querySelector('.closedModal').addEventListener('click', () => {
    document.querySelector('.modalShippingAddress').classList.remove('activeMap');
});