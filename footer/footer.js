const contactUl = document.querySelector('.contactUl')


const dataFooterOne = [
    {
        image: './footer/image/free-icon-facebook-1051309.png'
    },
    {
        image: './footer/image/free-icon-instagram-1384031.png'
    },
    {
        image: './footer/image/free-icon-telegram-4701496.png'
    },
    {
        image: './footer/image/free-icon-twitter-black-shape-25660.png'
    },
    {
        image: './footer/image/free-icon-whatsapp-733641.png'
    },
    {
        image: './footer/image/free-icon-google-2991147.png'
    }
]

const dataFooterTwo = [
    {
        image: './footer/image/free-icon-facebook-174848.png'
    },
    {
        image: './footer/image/free-icon-instagram-1384063.png'
    },
    {
        image: './footer/image/free-icon-telegram-3536661.png'
    },
    {
        image: './footer/image/free-icon-twitter-3256013.png'
    },
    {
        image: './footer/image/free-icon-whatsapp-2504957.png'
    },
    {
        image: './footer/image/free-icon-google-300221.png'
    }
]

dataFooterOne.forEach((el, index) =>{
    const image = document.createElement('img')
    const li = document.createElement('li')
    const a = document.createElement('a')


    image.src = el.image

    a.append(image)
    li.append(a)
    contactUl.append(li)
    
    dataFooterTwo.forEach((e, ind) => {
        image.addEventListener('mouseover', () => {
            if(index === ind){
                image.src = e.image
            }else{
                
            }
        })
        image.addEventListener('mouseout', () => {
            image.src = el.image
        })
    })
})