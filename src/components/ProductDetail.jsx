import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { DATA } from '../data/data';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const useProductDetails = () => {
    const { id } = useParams();
    const productId = parseInt(id, 10);

    const proDetail = DATA.filter((x) => x.id === productId);

    if (proDetail.length === 0) {
        console.error(`Product with ID ${productId} not found.`);
        return { product: null };
    }

    return { product: proDetail[0] };
};

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    const { product } = useProductDetails();
    const user = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.addItem);
    const dispatch = useDispatch();

    useEffect(() => {
        const isInCart = cart.some((item) => item.id === product.id);
        setCartBtn(isInCart ? "Remove from Cart" : "Add to Cart");
    }, [product, cart]);

    const handleCart = () => {
        if (user) {
            if (cartBtn === "Add to Cart") {
                dispatch(addItem(product));
                console.log('User state add cart: ', user);
            } else {
                dispatch(delItem(product));
                console.log('User state remove cart: ', user);
            }
        } else {
            console.log("User not logged in. Please log in to add items to the cart.");
        }
    };

    return (
        <div className="container my-5 py-3">
            {product && (
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.img} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <p className="lead">{product.desc}</p>
                        <button onClick={handleCart} className="btn btn-outline-primary my-5">
                            {cartBtn}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;