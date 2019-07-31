'use strict'
console.log('Here\'s a hidden message')

/*
 * Insert today's date
 */
let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate
