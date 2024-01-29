let bagItems;
onLoad();

function onLoad() {
let bagItemStr = localStorage.getItem('bagItems');
bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
displayItemsOnShop();
displayBagIcon();
}

function addToBag(itemid){ 
    bagItems.push(itemid);  
    localStorage.setItem('bagItems',JSON.stringify(bagItems));    
    displayBagIcon();  
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag_item_count');
    if (bagItems.length > 0) {
      bagItemCountElement.style.visibility = 'visible';
      bagItemCountElement.innerText = bagItems.length;
    } else{
      bagItemCountElement.style.visibility = 'hidden';
    }
    
    
}

function displayItemsOnShop(){
    let itemsContainerElement = document.querySelector('.items_container');
    if(!itemsContainerElement) {
        return ;
    }

let innerHtml = '';
items.forEach(item => {
    innerHtml += ` 
    <div class="item_container">
        <img class = item_image src="${item.image}" alt="Item_1">
        <div class="rating">
            ${item.rating.stars} ★ | ${item.rating.count} 
        </div>
        <div class="company_name">${item.company}</div>
        <div class="item_name">${item.item_name}</div>
        <div class="price">
            <span class = "current_price">Rs ${item.current_price}</span>
            <span class = "original_price">Rs ${item.original_price}</span>
            <span class = "discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn_add_to_bag" onclick="addToBag(${item.id})">Add To Bag</button>
    </div>`
});

itemsContainerElement.innerHTML = innerHtml;
}

