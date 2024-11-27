
document.write("<p>lorem ipsum</p>")

const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('create-btn');
const clearBtn = document.getElementById('clear-btn');
const theme_Btn = document.getElementById('theme-btn');
const navbar = document.getElementById('navbar');

theme_Btn.onclick = ()=>{
    //console.log("My button clicked!!!");
    if( theme_Btn.innerHTML == 'Dark Header')
    {
       //delete light classes
       navbar.classList.remove('navbar-dark')
       navbar.classList.remove('bg-dark')
       //add dark classes
       navbar.classList.add('navbar-light')
       navbar.classList.add('bg-primary')
       theme_Btn.innerHTML = "Light Header";
      
    }
    else{       

          //delete dark classes
          navbar.classList.remove('navbar-light')
          navbar.classList.remove('bg-primary')
          //add light classes
          navbar.classList.add('navbar-dark')
          navbar.classList.add('bg-dark')
          theme_Btn.innerHTML = "Dark Header";
    }
    
    
}
let products = [];
tableBody.innerHTML = "";
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