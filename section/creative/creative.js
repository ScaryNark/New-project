
const dataCreativOne = [
  {
    title: 'Класс безопасный',
    text: 'Класс безопасный - не представляет для живого существо никакой опасности, но имеет аномальные свойства не обьяснимое логическим путём.'
  },
  {
    title: 'Класс средний',
    text: 'Класс средний - не представляет угрозы, но при обращений с обьектом жестоким образом или манипуляции на агрессию, обьект может представлять угрозу.'
  },
  {
    title: 'Класс опасный',
    text: 'Класс опасный - представляет большую угрозу, при большинстве случаев представляет угрозу.'
  }
]

const dataCreativTwo = [
  {
    title: 'Техник безопасности',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quos ducimus exercitationem fugit pariatur cupiditate, unde recusandae reiciendis cum, nemo quasi iusto laborum, consequuntur dolorem adipisci nesciunt. Adipisci, iure accusantium'
  },
  {
    title: 'Техника безопасности',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quos ducimus exercitationem fugit pariatur cupiditate, unde recusandae reiciendis cum, nemo quasi iusto laborum, consequuntur dolorem adipisci nesciunt. Adipisci, iure accusantium'
  },
  {
    title: 'Техника безопасности',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit quos ducimus exercitationem fugit pariatur cupiditate, unde recusandae reiciendis cum, nemo quasi iusto laborum, consequuntur dolorem adipisci nesciunt. Adipisci, iure accusantium'
  }
]

const creativeParend = document.querySelector('.creativeChildOne')

dataCreativOne.forEach(el => {
  const creativ = document.createElement('div')
  const title = document.createElement('h2')
  const text = document.createElement('p')

  creativ.className = 'creativ'
  title.textContent = el.title
  text.textContent = el.text

  creativ.append(title, text)
  creativeParend.append(creativ)

  dataCreativTwo.forEach(e => {

    creativ.addEventListener('mouseover',() => {
      creativ.innerHTML = `<h2>${e.title}</h2>
      <p>${e.text}</p>`
    })
    creativ.addEventListener('mouseout', () => {
      creativ.innerHTML = `<h2>${el.title}</h2>
      <p>${el.text}</p>`
    })
  })
})

