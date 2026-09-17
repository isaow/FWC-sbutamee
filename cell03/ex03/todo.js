const newButton = document.getElementById("new");
const ftList = document.getElementById("ft_list");


// Load TO DO from cookie
loadTodos();


// Create new TO DO
newButton.addEventListener("click", function () {

    const text = prompt("New TO DO:");

    if (text === null || text.trim() === "") {
        return;
    }

    createTodo(text);
    saveTodos();
});


// Create TO DO element
function createTodo(text) {

    const todo = document.createElement("div");

    todo.className = "todo";
    todo.textContent = text;

    // Click TO DO to remove
    todo.addEventListener("click", function () {

        const remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();
            saveTodos();
        }
    });

    // New TO DO goes to the top
    ftList.prepend(todo);
}


// Save TO DO list to cookie
function saveTodos() {

    const todos = [];

    const elements = ftList.querySelectorAll(".todo");

    elements.forEach(function (todo) {
        todos.push(todo.textContent);
    });

    document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
}


// Load TO DO list from cookie
function loadTodos() {

    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {

        const parts = cookie.split("=");

        if (parts[0] === "todos") {

            const todos = JSON.parse(decodeURIComponent(parts.slice(1).join("=")));

            todos.forEach(function (text) {
                createTodo(text);
            });
        }
    }
}