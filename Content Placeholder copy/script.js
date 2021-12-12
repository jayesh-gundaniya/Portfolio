const header = document.getElementById('header')
const title = document.getElementById('title')
const discription = document.getElementById('discription')
const profile_img = document.getElementById('profile-img')
const names = document.getElementById('name')
const date = document.getElementById('date')

const animater_bg = document.querySelectorAll('.animated-bg')
const animater_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout (getData, 3000)

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1851&q=80" alt="" />'
    title.innerHTML = 'Lorem ipsum dolor sit amet consectetur.'
    discription.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laboriosam'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/14.jpg" alt="">'
    names.innerHTML = 'Jayesh Gundaniya'
    date.innerHTML = 'April 29, 2021'

    animater_bg.forEach(bg => bg.classList.remove('animated-bg'))

    animater_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}

