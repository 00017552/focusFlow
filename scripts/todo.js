let todoCount = 1;
function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const ul = document.querySelector('#todo ul');
        const li = document.createElement('li');
        li.classList.add('todo');
        li.id = todoCount++;
        li.innerHTML = `
            <h3>${todoText}</h3>
            <button onclick="deleteTodo(${li.id})">
                <img src="assets/delete.svg" alt="delete"/>
            </button>
        `;

        ul.appendChild(li);

        todoInput.value = "";
    } else {
        alert("Please enter a todo item!");
    }
}

function deleteTodo(id) {
    const todoItem = document.getElementById(id);
    todoItem.remove();
}
