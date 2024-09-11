// Ambil elemen-elemen dari HTML
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan item baru ke dalam list
addButton.addEventListener('click', function() {
    const taskText = inputField.value.trim();

    if (taskText !== "") {
        const newItem = document.createElement('li');

        // Membuat teks dan tombol hapus
        const taskTextNode = document.createTextNode(taskText);
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";

        // Menambahkan teks dan tombol ke dalam item
        newItem.appendChild(taskTextNode);
        newItem.appendChild(deleteButton);
        todoList.appendChild(newItem);

        // Menghapus item dari list saat tombol "Delete" diklik
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(newItem);
        });

        // Kosongkan field input setelah menambahkan
        inputField.value = "";
    }
});
