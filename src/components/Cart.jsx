import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { delItem } from '../redux/actions/index';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    const state = useSelector((state) => state.addItem);
    const dispatch = useDispatch();

    const handleClose = (item) => {
        dispatch(delItem(item));
    };

    const cartItems = (cartItem) => {
        return (
            <div className="card mb-3" key={cartItem.id}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={cartItem.img} alt={cartItem.title} className="img-fluid rounded-start" style={{ maxHeight: '150px' }} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{cartItem.title}</h5>
                            <p className="card-text lead fw-bold">${cartItem.price}</p>
                            <button onClick={() => handleClose(cartItem)} className="btn btn-danger">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const emptyCart = () => {
        return (
            <div className="card bg-light mb-3">
                <div className="card-body">
                    <h3 className="card-title">Your Cart is Empty</h3>
                </div>
            </div>
        );
    };

    const button = () => {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <NavLink to="/checkout" className="btn btn-primary w-50">
                        Proceed To Checkout
                    </NavLink>
                </div>
            </div>
        );
    };

    return (
        <div className="container my-5">
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()}
        </div>
    );
};

export default Cart;
