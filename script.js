const day = document.querySelector('.day')
const hour = document.querySelector('.hour')
const minute = document.querySelector('.minute')
const second = document.querySelector('.second')
const countdown = document.querySelector('.countdown')

const currentYear = new Date().getFullYear()
const launchingDate = new Date(`September 2 ${currentYear} 00:00:00`)

function countDown() {
    const currentTime = new Date()
    const difference = launchingDate - currentTime // millisecond
    const s = Math.floor(difference / 1000) % 60
    const m = Math.floor(difference / 1000 / 60) % 60
    const h = Math.floor(difference / 1000 / 60 / 60) % 60
    const d = Math.floor(difference / 1000 / 60 / 60 / 24)

    day.innerHTML = d
    hour.innerHTML = h < 10 ? `0${h}` : h
    minute.innerHTML = m < 10 ? `0${m}` : m
    second.innerHTML = s < 10 ? `0${s}` : s
}

setInterval(countDown, 1000);