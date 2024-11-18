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
        

        // addNewPoem(poemInput.value, vip.ckecked)
    })

    const getUsersBtn = document.getElementById('getUsers')

    getUsersBtn.addEventListener("click", async function() {
        const usersData = await fetch("http://localhost:3000/users")
        const usersResponse = await usersData.json()

        console.log(usersResponse);
        


        usersResponse.forEach(element => {
            console.log(element.name);
            console.log(element.body);
            
            addNewUser(element.body)
            
        });
    })
}

function addNewUser(element) {
    const userList = document.getElementById("userList")
    let newListItem = document.createElement("li")
    
    // newListItem.classList.add("col", "s6", "m4", "l3")
    newListItem.appendChild(document.createTextNode(element))
    userList.appendChild(newListItem)

}

initialize()