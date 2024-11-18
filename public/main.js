function initialize() {
    const form = document.getElementById('userForm')
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const nameInput = document.getElementById("name").value
        const emailInput = document.getElementById("email").value
        
        const userData = {
            name: nameInput,
            email: emailInput
          };
      

        const formData = await fetch("http://localhost:3000/users", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userData)

        })
        const formJson = await formData.json()
        console.log(formJson);
    })

    const getUsersBtn = document.getElementById('getUser')

    getUsersBtn.addEventListener("click", async function() {
        const usersData = await fetch("http://localhost:3000/users")
        const usersResponse = await usersData.json()

        console.log(usersResponse);
        const userList = document.getElementById("userList")
        userList.innerHTML = '';


        usersResponse.forEach(element => {
            console.log(element.name);
            console.log(element.body);
            
            addNewUser(element.body)
            let newListItem = document.createElement("li")
            newListItem.appendChild(document.createTextNode(element.body))
            userList.appendChild(newListItem)    
        });
    })
}

initialize()