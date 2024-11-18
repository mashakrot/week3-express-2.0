function initialize() {
    const options = {
        edge: "right",
        draggable: false,
        inDuration: 250,
        outDuration: 200,
        onOpenStart: null,
        onOpenEnd: null,
        onCloseStart: null,
        onCloseEnd: null,
        preventScrolling: true
    }

    const elems = document.querySelectorAll(".sidenav")
    const instances = M.Sidenav.init(elems, options)

    const addPoemButton = document.getElementById('add-poem')
    
    addPoemButton.addEventListener("click", async function () {
        const poemInput = document.getElementById("poem-input")
        const vip = document.getElementById("vip")
        
        const poemData = await fetch("http://localhost:8000", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "poem": "' + poemInput.value + '" }'

        })
        const poemJson = await poemData.json()
        console.log(poemJson);
        

        addNewPoem(poemInput.value, vip.ckecked)
    })

    const addPoemButtonFromAPI = document.getElementById('add-poem-from-api')

    addPoemButtonFromAPI.addEventListener("click", async function() {
        const poemData = await fetch("http://localhost:8000/")
        const poemResponse = await poemData.json()

        poemResponse.forEach(element => {
            addNewPoem(element.poem, false)
            
        });
    })
}

function addNewPoem(poem, vip) {
    const theWall = document.getElementById("the-wall")
    let newListItem = document.createElement("li")

    if (vip == true) {
        newListItem.classList.add("vip")
    }
    
    newListItem.classList.add("col", "s6", "m4", "l3")
    newListItem.appendChild(document.createTextNode(poem))
    theWall.appendChild(newListItem)

}

initialize()