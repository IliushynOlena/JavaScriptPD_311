
document.write("<p>lorem ipsum</p>")

const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
const clearBtn = document.getElementById('clear-btn');

let products = [];

createBtn.onclick = ()=>{
    //console.log("On click from JS");
    //add new product
    const newProduct = getProductFromForm();
    products.push(newProduct);
    addProductToTable(newProduct);
}

clearBtn.onclick= ()=>{
    products = [];
    tableBody.innerHTML= "";
}
function getProductFromForm()
{
    const modelInput = document.getElementById('modelInput');
    const desInput = document.getElementById('decriptionInput');
    const priceInput = document.getElementById('priceInput');
    return {
        id:products.length+1,
        model: modelInput.value,
        description : desInput.value,
        price:+priceInput.value
    }
}
function addProductToTable(product)
{
    tableBody.innerHTML += `<tr class="table-light">
                            <th scope="row">${product.id}</th>
                            <td>${product.model}</td>
                            <td>${product.description}</td>
                            <td>${product.price}</td>
                            </tr>`;
}