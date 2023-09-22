//called the header and header button(which holds the user name and dropdown menu)
const header = document.querySelector('header')
const btn_header = document.querySelector('header button')

let dropdownState = false
//added a user to the button
// btn_header.innerHTML = `<p>${user}</>`

//added dropdown icon
const headericon = document.createElement('div')
headericon.setAttribute('class', `headericon headericon-${dropdownState}`)
headericon.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="rgb(14, 14, 100)">
<path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>
</svg>`
btn_header.appendChild(headericon)
console.log(btn_header)

//created a div for the dropdown and added the icon
const dropdown = document.createElement('div')
dropdown.setAttribute('class', `dropdown dropdown-${dropdownState}`)

//dropdown items (the profile and logout part)
const profile = document.createElement('a')
profile.setAttribute('href', 'profile.html')
profile.innerText = 'profile'

const logout = document.createElement('a')
logout.setAttribute('href', 'log-in.html')
logout.addEventListener('click', () => {

})
logout.innerText = 'Logout'

const login = document.createElement('a')
login.setAttribute('href', 'log-in.html')
login.innerText = 'login'

const signup = document.createElement('a')
signup.setAttribute('href', 'sign-in.html')
signup.innerText = 'Sign up'

//added to the dropdown menu
dropdown.appendChild(profile)
dropdown.appendChild(logout)

//added the dropdown to the header
header.appendChild(dropdown)
console.log(dropdown)

//specofies the state the dropdown should be in 
btn_header.addEventListener('click', () => {
    headericon.classList.remove(`headericon-${dropdownState}`)
    dropdown.classList.remove(`dropdown-${dropdownState}`)
    dropdownState = !dropdownState;
    headericon.classList.add(`headericon-${dropdownState}`)
    dropdown.classList.add(`dropdown-${dropdownState}`)
})
