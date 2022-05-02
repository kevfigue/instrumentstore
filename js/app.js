
var products = [
    {
        name:"Stratocaster",
        type: "Electric Guitar",
        price: 1099.99,
        brand: "Fender",
        image: "image/eguitar.png",
        color: "red"
    },
    {
        name:"Jaguar",
        type: "Bass Guitar",
        price: 1299.99,
        brand: "Fender",
        image: "/image/bass.jpg",
        color: "red"

    },
    {
        name:"Yamaha N1X AvantGrand",
        type: "Hybrid Piano",
        price: 9299.00,
        brand: "Yamaha",
        image: ".../image/n1x-hybrid.jpg",
        color: "green"

    },            {
        name:"Casio Compact CDP-S150",
        type: "Digital Piano",
        price: 899.99,
        brand: "Yamaha",
        image: "../image/sps150digital.jpg",
        color: "green"

    },
    {
        name:"Blackwood",
        type: "Acoustic Guitar",
        price: 1299.99,
        brand: "Maton",
        image: "../image/blackwoodacoustic.png",
        color: "blue"
    },
    {
        name:"Betty Blue",
        type: "Electric Guitar",
        price: 1499.99,
        brand: "Maton",
        image: "../image/BB1200.png",
        color: "blue"
    },


];

var cart =[
    {}
];


function eleMaker(val) {
    let popEle = document.createElement("div");
    let wrapperEle = document.createElement("div");
    let nameEle = document.createElement("div");
    let priceEle = document.createElement("div");
    let eleImg = document.createElement("img");
    let colorEle = document.createElement("div");
    let brandEle = document.createElement("div");
    let addCart = document.createElement("button");

    popEle.setAttribute("class", "popUp");
    wrapperEle.setAttribute("class", "product");
    addCart.setAttribute("class", "addBtn");


    document.body.appendChild(popEle);
    document.body.appendChild(wrapperEle);
    wrapperEle.appendChild(eleImg);
    wrapperEle.appendChild(nameEle);
    wrapperEle.appendChild(priceEle);
    wrapperEle.appendChild(colorEle);
    wrapperEle.appendChild(brandEle);
    wrapperEle.appendChild(addCart);

    nameEle.innerHTML="Name: " +val.name;
    brandEle.innerHTML="" +val.brand;
    priceEle.innerHTML="Price: " +val.price;
    addCart.innerHTML="ADD TO CART";
    eleImg.setAttribute('src', val.image);
    popEle.style.display = "none";


    wrapperEle.addEventListener("mouseover", function () {
        wrapperEle.style.backgroundColor = val.color;
        wrapperEle.style.color = "white";

    })
    wrapperEle.addEventListener("mouseleave", function () {
        wrapperEle.style.backgroundColor = "white";
        wrapperEle.style.color = "black";

    })

    let namePop = document.createElement("p");
    let pricePop = document.createElement("p");
    let imgPop = document.createElement("img");
    let brandPop = document.createElement("p");
    let addPop = document.createElement("button");

    popEle.appendChild(imgPop);
    popEle.appendChild(namePop);
    popEle.appendChild(pricePop);
    popEle.appendChild(brandPop);
    popEle.appendChild(addPop);

    imgPop.setAttribute('src', val.image);
    namePop.innerHTML="Name: "+val.name;
    pricePop.innerHTML="Price: "+val.price;
    brandPop.innerHTML="" +val.brand;
    addPop.innerHTML="ADD TO CART";


    wrapperEle.addEventListener("click", function () {
        popEle.style.display = "flex";
    })



    popEle.addEventListener("click", function () {
        if (popEle.style.display === "none") {
            popEle.style.display = "flex"
        } else {
            popEle.style.display = "none";
        }
    })

};

function cartMaker(val){
    let wrapCart = document.createElement("div");


};

function writeItems() {
    for (let i = 0; i < products.length; i++) {
        eleMaker(products[i]);
    }
}
writeItems();

function writeCart() {
    for (let i = 0; i < cart.length; i++) {
        cartMaker(cart[i]);
    }
}
writeCart();

