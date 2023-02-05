const basket = [
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://pokemon-go.name/wp-content/uploads/2019/10/152-pokemon-chikorita.png',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://cs4.pikabu.ru/post_img/big/2016/07/07/9/1467905616171629597.png',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://pokemon-go.name/wp-content/uploads/2019/11/387-pokemon-turtwig.png',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://legends.pokemon.com/assets/pokemon/pokemon_rowlet.png',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://cs7.pikabu.ru/post_img/2019/05/15/6/1557907917140672554.png',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://top10a.ru/wp-content/uploads/2018/12/5-vaporeon.png',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://lh3.googleusercontent.com/SCBatcq0DMP0UfFl437h8IU6RzXVgCxnPJWgZgargILJ44cRfA13P1_LQPv_bkx0CQRRFGdf1ZwPnXpDohRj-NAPKVogAxOizxcPaIJhteSY4DY=s0',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://vgtimes.ru/uploads/posts/2016-07/1468938433_pk_gastly.png',
        title: 'title'
    },
    {
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam totam aliquam sapiente magni est cupiditate ex deleniti? Optio, ad libero impedit expedita exercitationem consequuntur nostrum eveniet totam repellat ipsa tenetur hic iusto officia vero dolores voluptas iure fugiat sequi perspiciatis!',
        image: 'https://avatars.dzeninfra.ru/get-zen_doc/1712062/pub_5e9b01080596fe5c972fb395_5e9b0476603e850f1fe805f0/scale_1200',
        title: 'title'
    }
]

const panelOne = document.querySelector('.panelChild-1')
const panelTwo = document.querySelector('.panelPanel')
const panelImage = document.querySelector('.panelImage')
const panelChildImage = document.querySelector('.panelChildImage')
const panelChildTree = document.querySelector('.panelChild-2')

const funk = (Ap) => {
    Ap.forEach(el => {
        const block = document.createElement('div')
        const image = document.createElement('img')
        const title = document.createElement('p')

        block.className = 'panelBlock'
        image.className = 'imagePanel'
        image.src = el.image
        title.textContent = el.title

        block.append(title, image)
        panelOne.append(block)

        block.addEventListener('click', () => {
            panelTwo.innerHTML = `<img src="${el.image}" alt="">
            <p>${el.info}</p>
            `
            panelChildImage.classList.add('panelDelete')
        })
        panelChildTree.addEventListener('click', () => {
            panelTwo.innerHTML = `<img class="panelChildImage" src="https://park-press.ru/wp-content/uploads/2019/03/pp-materials2.png" alt="">`
            panelChildImage.classList.remove('panelDelete')
        })
        
    })
}
funk(basket)