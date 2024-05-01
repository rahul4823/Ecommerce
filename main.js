let shop = document.getElementById('shop');
let shopItemsData = [{
    id: "va55ivo",
    name: "casual shirt",
    price: 1646,
    desc: "this is a collection of the shirt and pants",
    img: "1.jpg",
},

{
    id: "qa55ivo",
    name: "   formal jeans",
    price: 1646,
    desc: " this is a formal jeans",
    img: "2.jpg",
},

{
    id: "va58ivo",
    name: "jeans",
    price: 599,
    desc: "this is a a collection denim jeans",
    img: "3.jpg",
},

{
    id: "va55hdf",
    name: "jeans pack of 3",
    price: 1399,
    desc: "this is a a collection of pants pack of 3",
    img: "4.jpg",
}];
let basket = [{
    id: "vafvz",
    item: 1,
}];
let generateshop = () => {
    return shop.innerHTML = shopItemsData
       .map((x) => {
            let { id, name, price, desc, img } = x;
            return `
        <div class="item">
            <img width="220" src="${x.img}" alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="pricequantity">
                    <h2>Rs ${price}</h2>
                    <div class="buttons">
                        <i onclick="decrement('${id}')" class="bi bi-dash"></i>
                        <div id="${id}" class="quantity">0</div>
                        <i onclick="increment('${id}')" class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
        })
       .join("");
};
generateshop();
let increment = (id) => { 
    let selectedItem = shopItemsData.find((x) => x.id === id);
    let search = basket.find((x) => x.id === selectedItem.id);
    // console.log(selectedItem.id);
    if(search === undefined){
        basket.push({
            id : selectedItem.id,
            item : 1,
        });
    }
    else{
        search.item += 1;
    }
    // console.log(basket);
    update(selectedItem.id);
};

let decrement = (id) => {
    let selectedItem = shopItemsData.find((x) => x.id === id);
    let search = basket.find((x) => x.id === selectedItem.id);
    // console.log(selectedItem.id);
    if(search.item === 0) 
        return;
    else{
        search.item -= 1;
    }
    // console.log(basket);  
    update(selectedItem.id);
};
let update = (id) => {
    let search = basket.find((x) => x.id === id);
    console.log(search.item);
};


 