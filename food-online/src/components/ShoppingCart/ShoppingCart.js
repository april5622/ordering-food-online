import React from 'react';
import { connect } from 'react-redux';
import { DeleteCart, IncreaseQuantity, DecreaseQuantity } from "../../state/action/index";

const ShoppingCart = (props, DeleteCart, IncreaseQuantity, DecreaseQuantity) => {
   
    let listCart = [];
    let totalCart = 0;

    Object.keys(props.carts).forEach(function(item){
        totalCart += props.carts[item].quantity * props.carts[item].price;
        listCart.push(props.carts[item]);
    })

    const totalPrice = (price, tonggia) => {
        let currency = price
        let new_price = Number(currency.replace(/[^0-9.-]+/g,""));
        return Number(new_price * tonggia).toLocaleString('en-US');
    }

    return (
        <div className="shoppingcart-page">
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
                            <td><button className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</button></td>
                            <td>{item.name}</td>
                            <td><img src={item.photo} style={{width:'100px',height:'80px'}}/></td>
                            <td>{item.price}</td>
                            <td>
                                    <button className="btn btn-primary"  onClick={()=>DecreaseQuantity(key)}>-</button>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <button className="btn btn-primary" onClick={()=>IncreaseQuantity(key)}>+</button>
                            </td>
                            <td>${totalPrice(item.price,item.quantity)}</td>
                        </tr>
                        )
                    })
                        
                }
                <tr>
                    <td colSpan="5">Total Carts</td>
                    <td>${Number(totalCart).toLocaleString("en-US")}</td>
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
        props: state._reducer,
        carts: state.carts

    }
}

export default connect(mapStateToProps,{DeleteCart, IncreaseQuantity, DecreaseQuantity})(ShoppingCart);
