const input = document.getElementById('input-box');
const list = document.getElementById('list-container');

const addItem = () => {
    if (input.value === "") {
        alert('You must write something!');
    } else {
        let li = document.createElement('li');

        let span = document.createElement('span');
        span.className = 'item-content';
        span.textContent = input.value;
        li.appendChild(span);

        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.textContent = 'DELETE';
        li.appendChild(deleteButton);
        let editButton = document.createElement('button');
        editButton.className = 'edit-button';
        editButton.textContent = 'EDIT';
        li.appendChild(editButton);
        list.appendChild(li);
    }

    input.value = "";
    saveData();
}

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        const editButton = e.target.querySelector('.edit-button');
        if (editButton) {
            editButton.style.display = editButton.style.display === 'none' ? '' : 'none';
        }
    } else if (e.target.className === 'delete-button') {
        e.target.parentElement.remove();
        saveData();
    } else if (e.target.className === 'edit-button') {
        const liElement = e.target.parentElement;
        const spanElement = liElement.firstChild;
        console.log(spanElement);
        const edited = prompt('Edit Your Task', spanElement.textContent.trim());
        console.log(edited);
        if (edited !== '' && edited !== null){
            spanElement.innerHTML = edited;
            saveData();
        }
    }
});

const saveData = () => {
    localStorage.setItem('data', list.innerHTML);
}

const showData = () => {
    list.innerHTML = localStorage.getItem('data') || '';
}
showData();
