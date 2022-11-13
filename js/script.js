'use strict'

// * Preloader
const body = document.querySelector('body')
const clackers = document.querySelector('#clackers')
const load = document.querySelectorAll('.load')

body.style.background = '#000'
load.forEach(element => element.style.display = 'none')

setTimeout(function () {
    clackers.style.display = 'none'
    body.style.background = '#ffff'
    load.forEach(element => element.style.display = 'flex')
}, 3000)