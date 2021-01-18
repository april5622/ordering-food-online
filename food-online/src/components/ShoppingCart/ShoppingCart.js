import React from 'react';
import { connect } from 'react-redux';
import { DeleteCart, IncreaseQuantity, DecreaseQuantity } from "../../state/action/index";

function ShoppingCart({ items, DeleteCart, IncreaseQuantity, DecreaseQuantity}){
    let listCart = [];
    let totalCart = 0;

    Object.keys(items.carts).forEach(function(item){
        totalCart += items.carts[item].quantity * items.carts[item].price;
        listCart.push(items.carts[item]);
    })

    function totalPrice(price, tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }

    return (
        <div>
            <h1>Shopping Cart</h1>

            <div className="row">
            <div className="col-md-12">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    listCart.map((item,key)=>{
                        return(
                            <tr key={key}>    
                            <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{width:'100px',height:'80px'}}/></td>
                            <td>{item.price} $</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                            </td>
                            <td>{ totalPrice(item.price,item.quantity)} $</td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="5">Total Carts</td>
                    <td>{Number(totalCart).toLocaleString('en-US')} $</td>
                </tr>
                </tbody>
              
            </table>
            </div>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state._reducer
    }
}

export default connect(mapStateToProps,{DeleteCart, IncreaseQuantity, DecreaseQuantity})(ShoppingCart);
