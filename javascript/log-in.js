//select the form items
const details = document.querySelectorAll('input');
const btn = document.querySelector('.form-btn');
const msg = document.querySelector('.message');

//add an event listener to the form button on click to diplay success or error message
btn.addEventListener('click', (e) => {
    e.preventDefault();
    msg.innerText = '';
    // Check if input fields are filled
    if (!details[0].value || !details[1].value) {
        msg.innerText = 'All fields must be filled';
    } else {
        // If fields are filled, create a user object and call loginUser function
        let user = {
            email: details[0].value,
            password: details[1].value
        }
        loginUser(user)

    }
});

// const uri = 'https://hiit-blog-api.onrender.com'     // the server url

// async function loginUser(data) {
//     try {
//         const response = await fetch(`${uri}/accounts/auth/login`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();

//         console.log(result);

//         if (response.status === 200) {
//             window.localStorage.setItem('token', result.token)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
//             window.localStorage.setItem('name', result.user.first_name)  // the authorixation token is saved to the local storage so that it can be sent to the server for authentication. See header.js line 8
//             window.location.href = 'index.html'
//         }

//         if (result.error) msg.innerText = result.error

//     } catch (error) {
//         msg.innerText = error.error
//         console.error(error);
//     }
// }