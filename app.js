const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;
};

addForm.addEventListener('submit', (e) => {

    // prevent the refresh page
    e.preventDefault();
    // get what a user types in
    const todo = addForm.add.value.trim();

    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    } else {
        alert('Write something');
    }
});

// delete todos

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}); 

// writing function to match and filter TODOS 

const filterTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => {
            return !todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => {
            todo.classList.add('filtered');
        });

    Array.from(list.children) // to get back what matches 
        .filter((todo) => {
            return todo.textContent.toLowerCase().includes(term);
        })
        .forEach((todo) => {
            todo.classList.remove('filtered');
        });
};

// keyup event 

search.addEventListener('keyup', (e) => {
    const term = search.value.trim().toLowerCase(); // to get user's input from search bar
    filterTodos(term);
});