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

    // const addPoemButtonFromAPI = document.getElementById('add-poem-from-api')

    // addPoemButtonFromAPI.addEventListener("click", async function() {
    //     const poemData = await fetch("http://localhost:8000/")
    //     const poemResponse = await poemData.json()

    //     poemResponse.forEach(element => {
    //         addNewPoem(element.poem, false)
            
    //     });
    // })
}

// function addNewPoem(poem, vip) {
//     const theWall = document.getElementById("the-wall")
//     let newListItem = document.createElement("li")

//     if (vip == true) {
//         newListItem.classList.add("vip")
//     }
    
//     newListItem.classList.add("col", "s6", "m4", "l3")
//     newListItem.appendChild(document.createTextNode(poem))
//     theWall.appendChild(newListItem)

// }

initialize()