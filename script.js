const Tshirts = [
    { color: "red T shirt", stock: 10 },
    { color: "blue T shirt", stock: 0 },
    { color: "green T shirt", stock: 5 },
    { color: "yellow T shirt", stock: 3 },
];

const input = document.querySelector("#input");
const submit = document.querySelector(".btn");
const productList = document.querySelector("#product-list");

function filterrang(filterColors) {
    productList.innerHTML = "";

    filterColors.forEach(shirts => {
        const button = document.createElement("button");
        button.textContent = `${shirts.color} ${shirts.stock}`;
        button.classList.add("bttn");

        if (shirts.stock === 0) {
            button.disabled = true;
            button.classList.add("disabledButton")
        }
        productList.appendChild(button)
    });
}
submit.addEventListener("click",() => {
    const inputvalue = input.value;
    const filtershirt = Tshirts.filter(color => 
    color.color.includes(inputvalue)
);
if(filtershirt.length === 0){
productList.innerHTML = "<p>No products found matching your search.</p>";
}
else if(inputvalue === ""){
alert("plz enter a search term")    
}
else{
    filterrang(filtershirt)
}
})