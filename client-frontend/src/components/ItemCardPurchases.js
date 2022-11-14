function ItemCardPurchases({ specificPurchasedItems }) {
    // console.log(specificPurchasedItems)


    return (
        <div className="card">
            <img src={specificPurchasedItems.item.img_url} alt={specificPurchasedItems.item.item_name} />
            <h4>{specificPurchasedItems.item.item_name}</h4>
            <p>Price: ${specificPurchasedItems.item.price}</p>
            <p>* {specificPurchasedItems.item.description} *</p>
        </div>
    );
}

export default ItemCardPurchases;









// 
// 
// 
// Figure out why cart items are still rendered after function onClick!!
            // window.location.reload(false)

// 
// 
// 