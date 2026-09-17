loadTodos();


$("#new").click(function () {

    const text = prompt("New TO DO:");

    if (text === null || text.trim() === "") {
        return;
    }

    createTodo(text);
    saveTodos();
});


function createTodo(text) {

    const todo = $("<div></div>");

    todo.addClass("todo");
    todo.text(text);

    todo.click(function () {

        const remove = confirm("Do you want to remove this TO DO?");

        if (remove) {
            todo.remove();
            saveTodos();
        }
    });

    $("#ft_list").prepend(todo);
}


function saveTodos() {

    const todos = [];

    $("#ft_list .todo").each(function () {
        todos.push($(this).text());
    });

    document.cookie =
        "todos=" +
        encodeURIComponent(JSON.stringify(todos)) +
        "; expires=Fri, 31 Dec 2099 23:59:59 GMT; path=/";
}


function loadTodos() {

    const cookies = document.cookie.split("; ");

    for (let cookie of cookies) {

        const parts = cookie.split("=");

        if (parts[0] === "todos") {

            const data = parts.slice(1).join("=");

            const todos =
                JSON.parse(decodeURIComponent(data));

            todos.forEach(function (text) {
                createTodo(text);
            });
        }
    }
}