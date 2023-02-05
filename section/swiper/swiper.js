const swiper = new Swiper('.mySwiper', {

    spaceBetween: 30,
    effect: "fade",
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

const data = [
    {
        name: 'Slide-1',
        img: './section/swiper/image/0sFncF2v7VU.jpg'
    },
    {
        name: 'Slide-1',
        img: './section/swiper/image/0SJzh_laLQ8.jpg'
    },
    {
        name: 'Slide-5',
        img: './section/swiper/image/NA10RDGS8S8.jpg'
    }
]

const swiperWrap = document.querySelector('.swiper-wrapper')


data.forEach(el => {
    const slider = document.createElement('div')
    const image = document.createElement('img')

    slider.className = ('swiper-slide')

    image.src = el.img


    slider.append(image)
    swiperWrap.append(slider)
})






