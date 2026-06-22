# Post Creation System

A simple JavaScript project created to practice **Forms**, **Async/Await**, **Fetch API**, **POST Requests**, and **DOM Manipulation**.

## About the Project

This application allows users to create new posts through a form containing a title and content field.

When the form is submitted:

1. The page prevents the default form reload behavior.
2. User input is captured.
3. A POST request is sent to the JSONPlaceholder API.
4. The API returns the created post data.
5. The new post is rendered immediately on the page without refreshing.

This project was built as a practical exercise to reinforce asynchronous JavaScript concepts and API communication.

---

## Features

* Create posts through a form
* Send data using HTTP POST requests
* Handle asynchronous operations with Async/Await
* Convert JavaScript objects into JSON using JSON.stringify()
* Render newly created posts dynamically
* Prevent page reloads with preventDefault()

---

## Technologies Used

* HTML5
* JavaScript (ES6+)
* Fetch API
* Async/Await
* JSONPlaceholder API

---

## Project Structure

```text
project/
│
├── index.html
├── script.js
└── README.md
```

---

## Concepts Practiced

### Form Handling

The application listens for the form's submit event:

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
});
```

This prevents the browser from reloading the page when the user submits the form.

---

### Capturing User Input

The values entered by the user are retrieved through the `.value` property:

```javascript
let title = document.querySelector("#titleField").value;
let body = document.querySelector("#bodyField").value;
```

---

### Creating a POST Request

Data is sent to the API using Fetch:

```javascript
await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title,
        body,
        userId: 2
    })
});
```

---

### Processing the Response

The response is converted into a JavaScript object:

```javascript
let json = await response.json();
```

The returned object contains the generated post information, including its ID.

---

### Dynamic Rendering

After receiving the response, the post is immediately displayed on the page:

```javascript
areaDosPost.innerHTML += `
    <div>
        <h3>Post #${json.id}</h3>
        <h4>${json.title}</h4>
        <p>${json.body}</p>
        <hr>
    </div>
`;
```

This creates a smoother user experience without requiring a page refresh.

---

## 📚 What I Learned

Through this project, I practiced:

* Async/Await
* Fetch API
* HTTP POST Requests
* JSON.stringify()
* Form Events
* preventDefault()
* DOM Manipulation
* Dynamic Content Rendering
* Working with API Responses

---

## Future Improvements

Possible future upgrades:

* Form validation
* Error handling with try/catch
* Loading indicator while sending requests
* Better UI styling with CSS
* Delete and Edit post functionality
* Local storage persistence

---

## API Used

JSONPlaceholder

https://jsonplaceholder.typicode.com/

A free fake REST API used for learning, testing, and prototyping applications.

---

## Author

Developed as a JavaScript learning project focused on asynchronous programming and API communication.
