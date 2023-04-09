const url = "https://raw.githubusercontent.com/iGameCreep/todo-test/main/todos.json";
let body = {};

window.onload = function() {
    const cards = document.getElementById('cards');

    fetch(url).then(async response => {
        if (response.ok) {
            body = await response.json();
            
            body.forEach(todo => {
                cards.innerHTML += makecard(todo.name, todo.priority, todo.body);
            });
    
        }
    });
}

function makecard(name, priority, body) {
    let prioritycolor;

    switch (priority) {
        case 0:
            prioritycolor = "./images/low.png";
            break;
        case 1:
            prioritycolor = "./images/medium.png";
            break;
        case 2:
            prioritycolor = "./images/high.png";
            break;
    }

    let htmlcard = 
    `<div class='card'>
        <div class="card-header"><figure class="user-avatar user-avatar-lg"><img src="${prioritycolor}" alt=""></figure> ${name}</div>
        <div class="card-body">
            <p class="card-text"><strong>Description:</strong> ${body}</p>
        </div>
        <div class="card-footer">
    </div>`

    return htmlcard;
}