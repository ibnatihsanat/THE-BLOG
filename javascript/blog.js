// // import { allBlogs } from "../data/allBlogs.js";

// const uri = 'https://hiit-blog-api.onrender.com'     // the server url
// // const uri = 'http://127.0.0.1:5000'     // the server url

// async function getBlog(id) {
//     const response = await fetch(`${uri}/blogs/${id}`);
//     const data = await response.json();
//     return data
// }


// let params = new URLSearchParams(window.location.search);
// let blogId = params.get('blogId');

// const blog = await getBlog(blogId)

// let allComments = blog.comments
// // To sort the comments from earliest to latest
// allComments.sort(sortByDatePosted)

//get the main container holding the blogs
const menu = document.querySelector('main')

//create a container for the blog
const blog_storage = document.createElement('div')
blog_storage.setAttribute('class', 'blog-storage')

//the blog title
const blog_title = document.createElement('h2')
blog_title.setAttribute('class', 'blog-title')
// blog_title.innerText = blog.title
blog_storage.appendChild(blog_title)

//the blog author
const blog_authur = document.createElement('p')
blog_authur.setAttribute('class', 'blog-authur')
// blog_authur.innerText = 'by: ' + blog.author
blog_storage.appendChild(blog_authur)

//create a container for blog content
const blog_content = document.createElement('p')
blog_content.setAttribute('class', 'blog-content')
// blog_content.innerText = blog.body
// blog_storage.appendChild(blog_body)

//blog comments

// // Establish a WebSocket connection
// // const socket = new WebSocket("ws://localhost:5000");
// const socket = new WebSocket("wss://hiit-blog-api.onrender.com/ws");

// // Connection opened
// socket.addEventListener('open', event => {
//     console.log('Connected to WS Server')
// })

// // Listen for incoming messages from the server
// socket.addEventListener("message", event => {
//     const comment = JSON.parse(event.data);
//     addNewComment(comment);
// });

//comment function
const addNewComment = (comment) => {
    const commentParts = document.createElement('div');
    commentParts.innerHTML = `
    <div class='everyComments'>
    <h3 class='name'>${comment.name}</h3>
    <p class='body'>${comment.comment}</p>
</div>
;`
    comment.appendChild(commentParts);
}

const comment_storage = document.createElement('div')
comment_storage.setAttribute('class', 'comment-storage')

const comments = document.createElement('div')
comments.setAttribute('class', 'comments')


const displayComments = () => {
    allComments.forEach(comment => {
        const eachComments = document.createElement('div')
        eachComments.className = 'eachComments'

        const name = document.createElement('h3')
        name.className = 'name'
        name.innerText = comment.name
        eachComments.appendChild(name)

        const body = document.createElement('p')
        body.className = 'body'
        body.innerText = comment.comment
        eachComments.appendChild(body)

        comments.appendChild(eachComments)
    })
}


comment_storage.appendChild(comments)
// displayComments()

const commentError = document.createElement('div')
commentError.className = 'commentError'
comment_storage.appendChild(commentError)

const addComment = document.createElement('form')
addComment.className = 'addComment'

const input = document.createElement('input')
input.className = 'newComment'
input.setAttribute('placeholder', 'Add a comment...')
input.type = 'text'
addComment.appendChild(input)

const submit = document.createElement('button')
submit.className = 'sendComment'
submit.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24">
<path d="M120 896V256l760 320-760 320Zm60-93 544-227-544-230v168l242 62-242 60v167Zm0 0V346v457Z"/>
</svg>`

// submit.addEventListener('click', async (e) => {
//     e.preventDefault()
//     commentError.innerHTM = ''

//     if (input.value) {
//         const token = window.localStorage.getItem('token')

//         if (!token) commentError.innerHTML = `<p>Cannot post a comment unless you login. Click <a href='login.html'>HERE<a/> to login</p>`

//         else {
//             async function postComment() {

//                 const response = await fetch(`${uri}/blogs/${blog.id}`, {
//                     method: 'POST',
//                     headers: {
//                         // the authorization token is sent to the server to authenticate the user. See requireAuth.js in the server folder on how to get the token
//                         'Authorization': `Bearer ${token}`,
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ body: input.value })
//                 });

//                 const json = await response.json();

//                 if (response.ok) {

//                     // Submit a new comment
//                     const name = window.localStorage.getItem('name')
//                     const comment = input.value;

//                     // Send the comment to the server
//                     const newComment = { name, comment };
//                     socket.send(JSON.stringify(newComment));

//                     input.value = ''
//                     comments.innerHTML = ''
//                     displayComments()
//                 }

//             }

//             await postComment()
//         }

//     }
// })

// addComment.appendChild(submit)

comment_storage.appendChild(addComment)


menu.appendChild(blog_storage)
menu.appendChild(comment_storage)