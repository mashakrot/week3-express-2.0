function initialize() {
    const form = document.getElementById('userForm')
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim()
        const email = document.getElementById("email").value.trim()
        
        const userData = { name, email };

      
        console.log(userData);
        console.log(JSON.stringify(userData.name) + " gggggg");
        
        const formData = await fetch("/users", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)

        })
        const formJson = await formData.json()
        console.log(formJson);
    })

    const getUsersBtn = document.getElementById('getUsers')

    getUsersBtn.addEventListener("click", async function() {
        const usersData = await fetch("/users")
        const usersResponse = await usersData.json()

        console.log(usersResponse);

        const userList = document.getElementById("userList")
        userList.innerHTML = '';


        usersResponse.users.forEach(element => {
            console.log(element.name);
            
            let newListItem = document.createElement("li")
            newListItem.appendChild(document.createTextNode(element.name + " - " + element.email))
            // newListItem.textContent = `${element.name} - ${element.email}`;
            userList.appendChild(newListItem)    
            
        });

        const List = document.getElementById("userList")
        console.log(List);
        
    })
}

initialize()