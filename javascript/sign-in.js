//select form items
const details = document.querySelectorAll('input');
const btn = document.querySelector('.form-btn');
const msg = document.querySelector('.message');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    msg.innerText = '';
    // check for the fields if they're filled
    if (!details[0].value || !details[1].value || !details[2].value || !details[3].value || !details[4].value) {
        msg.innerText = 'All fields must be filled';
    } else if (details[3].value !== details[4].value) {
        msg.innerText = "Password and Confirm Password doesn't match";
    } else {
        // If all fields are filled and passwords match, create a user object and call createAccount function
        // let user = {
        //     first_name: details[0].value,
        //     last_name: details[1].value,
        //     email: details[2].value,
        //     password: details[3].value
        // };
        // createAccount(user);
    }
});


// async function createAccount(data) {
//     try {
//         const response = await fetch(`${uri}/accounts/auth/signup`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(data),
//         });

//         const result = await response.json();

//         if (result.error) {
//             msg.innerText = result.error;
//         }

//         if (response.status === 200) {
//             // If the response status is 200 (OK), redirect to 'login.html'
//             window.location.href = 'login.html';
//         }

//         console.log(result);
//     } catch (error) {
//         // Handle any exceptions that occur during the fetch or JSON parsing
//         msg.innerText = error.error;
//         console.error(error);
//     }
// }
