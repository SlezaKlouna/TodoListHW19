'use strict';

const addInput = document.querySelector('#add-input');
const addBtn = document.querySelector('.addBtn');
const tasks = document.querySelector('.tasks');
const addBlock = document.querySelectorAll('.add-task');

const todoList = [];
let counterId = 0;

const createTodoList = (id, text) => {
    const todoListBox = document.createElement('div');
    todoListBox.className = 'task-box';
    tasks.append(todoListBox);

    todoListBox.innerHTML = `
            <input type="checkbox" class="task-checkbox" id="${id}" data-index="">
            <label class="task-label" for="${id}"> ${text} </label>

            <a href="#" class="edit-task" data-state="">&#9998;</a>
            <a href="#" class="remove-task" data-state="">&#10006;</a>
    `
    return todoListBox;
}

const addTodoListElement = () => {
    if (addInput.value === '') {
        console.log('enter text');
    } else {
        todoList.push(addInput.value);
        console.log(addInput.value);

        addBtn.setAttribute('id', counterId);
        console.log(counterId);
        counterId++;

        tasks.append(createTodoList(counterId, addInput.value));
        addInput.value = '';
    }
}


addBtn.addEventListener('click', event => {
    event.preventDefault();
    addTodoListElement();
});

addInput.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        addTodoListElement();
    }
});

tasks.addEventListener('click', event => {
    console.log(event.target);
    let target = event.target.closest('.remove-task', '.edit-task');
    if (target.className = 'remove-task') {
        document.querySelector(".task-box").remove();
    }
    if (target.className = 'edit-task'){

    }

    // if (event.target = parent('remove-task')){
    //     document.querySelector(".task-box").remove();
    // }
});
