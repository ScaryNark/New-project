const oneData = [
    {
        title: 'first',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`,
    },
    {
        title: 'second',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`,
    },
    {
        title: 'third',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`,
    },
    {
        title: 'fourth',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`
    },

]

const twoData = [
    {
        title: 'first',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`,
    },
    {
        title: 'second',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`,
    },
    {
        title: 'third',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`,
    },
    {
        title: 'fourth',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.`
    },

]

const accordionOne = document.querySelector('.accardionChild-1')

const randerOne = (API) => {
    API.forEach(el => {
        const wrap = document.createElement('div')
        const accordionName = document.createElement('div')
        const accordionContent = document.createElement('div')
        const name = document.createElement('p')
        const content = document.createElement('p')
        const image = document.createElement('img')

        accordionContent.className = 'accordion__content'
        accordionName.className = 'accordion__name'
        wrap.className = 'accordion__wrapOne'
        image.className = 'plus'

        name.textContent = el.title
        content.textContent = el.text
        image.src = "./image/angle-brackets.png"

        accordionOne.append(wrap)
        wrap.append(accordionName, accordionContent)
        accordionName.append(name, image)
        accordionContent.append(content)

    })

    const accordionWrapOne = document.querySelectorAll('.accordion__wrapOne')

    for (let i = 0; i < accordionWrapOne.length; i++) {
        accordionWrapOne[i].addEventListener('click', () => {
            accordionWrapOne.forEach((el, index) => {
                if (accordionWrapOne[i] === accordionWrapOne[index]) {
                    el.classList.toggle('accordion__active')

                } else {
                    el.classList.remove('accordion__active')
                }
            })

        })
    }
}
randerOne(oneData)



const accordTwo = document.querySelector('.accardionChild-2')

const randerTwo = (asd) => {
    asd.forEach(el => {
        const wrap = document.createElement('div')
        const accordionName = document.createElement('div')
        const accordionContent = document.createElement('div')
        const name = document.createElement('p')
        const content = document.createElement('p')
        const image = document.createElement('img')

        accordionContent.className = 'accordion__content'
        accordionName.className = 'accordion__name'
        wrap.className = 'accordion__wrapTwo'
        image.className = 'plus'

        name.textContent = el.title
        content.textContent = el.text
        image.src = "./image/angle-brackets.png"

        accordTwo.append(wrap)
        wrap.append(accordionName, accordionContent)
        accordionName.append(name, image)
        accordionContent.append(content)
    })

    const accordionWrapTwo = document.querySelectorAll('.accordion__wrapTwo')

    accordionWrapTwo.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('accordion__active')
        })
    })

}
randerTwo(twoData)