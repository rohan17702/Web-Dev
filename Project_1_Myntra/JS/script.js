let itemsContainerElement = document.querySelector('.items_container');



itemsContainerElement.innerHTML = ` 
<div class="item_container">
    <img class = item_image src="${item.item_image}" alt="Item_1">
    <div class="rating">
        ${item.rating.stars} ★ | ${item.rating.noOfReviews} 
    </div>
    <div class="company_name">${item.comapany_name}</div>
    <div class="item_name">${item.item_name}</div>
    <div class="price">
        <span class = "current_price">Rs ${item.current_price}</span>
        <span class = "original_price">Rs ${item.original_price}</span>
        <span class = "discount">(${item.discount}% OFF)</span>
    </div>
    <button class="btn_add_to_bag">Add To Bag</button>
</div>`;