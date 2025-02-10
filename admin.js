document.addEventListener("DOMContentLoaded", () => {
    const adminForm = document.getElementById("adminForm");
    const userList = document.getElementById("userList");
    const searchInput = document.getElementById("search");
    const clearAllButton = document.getElementById("clearAll");

    function getUsers() {
        return JSON.parse(localStorage.getItem("users")) || [];
    }

    function saveUsers(users) {
        localStorage.setItem("users", JSON.stringify(users));
    }

    function renderUsers(filter = "") {
        userList.innerHTML = "";
        const users = getUsers().filter(user => user.fullName.toLowerCase().includes(filter.toLowerCase()));
        users.forEach((user, index) => {
            const li = document.createElement("li");
            li.textContent = `${user.fullName} - ${user.email}`;
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Excluir";
            deleteBtn.onclick = () => deleteUser(index);
            li.appendChild(deleteBtn);
            userList.appendChild(li);
        });
    }

    function addUser(event) {
        event.preventDefault();
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        
        const users = getUsers();
        users.push({ fullName, email });
        saveUsers(users);
        renderUsers();
        adminForm.reset();
    }

    function deleteUser(index) {
        const users = getUsers();
        users.splice(index, 1);
        saveUsers(users);
        renderUsers();
    }

    function deleteAllUsers() {
        localStorage.removeItem("users");
        renderUsers();
    }

    adminForm.addEventListener("submit", addUser);
    searchInput.addEventListener("input", (e) => renderUsers(e.target.value));
    clearAllButton.addEventListener("click", deleteAllUsers);
    
    renderUsers();
});
