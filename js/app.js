

const main = (()=>{

    const productContainerNode = document.querySelector("#product-container");

    const createButton = document.querySelector("#createButton");

    const backEndHost = "http://localhost:3000";


    createButton.addEventListener("click",()=>{

        alert("The product was added successfully");

        const newProduct = { 
            id : 200,
            title : document.querySelector("#title").value,
            description : document.querySelector("#description").innerHTML,
            img : document.querySelector("#imgPath").value,
        }

            fetch(`${backEndHost}/products`,{
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                    
                  },
                body :JSON.stringify(newProduct)
            })


    })

    fetch(`${backEndHost}/products`)
    .then(response=>response.json())
    .then(json=>{

        json.data.forEach(product=>{

            productContainerNode.innerHTML+=`<div> 
                <h2>${product.title}</h2>
                <p>${product.description}</p>
                <img src="${product.img}">
                <p>Price $${product.price}</p>
            </div>`;
        })

        
    })




})();