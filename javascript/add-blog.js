// const uri = 'https://hiit-blog-api.onrender.com';

// async function postBlog(title, body) {
//     const token = window.localStorage.getItem('token');
//     const response = await fetch(`${uri}/blogs/create`, {
//         method: 'POST',
//         headers: {
//             'Authorization': `Bearer ${token}`,
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ title, body })
//     });
//     await response.json();
// }


const title = document.querySelector('input');
const body = document.querySelector('textarea');
const btn = document.querySelector('form button');

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (title.value && body.value) {
        // await postBlog(title.value, body.value);
        title.value = '';
        body.value = ' ';
        // window.location.href = 'index.html';
    }
});
