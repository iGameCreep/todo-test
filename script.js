const cards = document.getElementById('cards');

function makecard(name, priority, body) {

    let prioritycolor;

    switch (priority) {
        case 1:
            prioritycolor = "./images/low.png";
            break;
        case 2:
            prioritycolor = "./images/medium.png";
            break;
        case 3:
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

}