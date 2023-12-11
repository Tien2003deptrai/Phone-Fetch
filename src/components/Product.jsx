import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { DATA } from './../data/data';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading] = useState(false);
    const [sortBy, setSortBy] = useState('');

    const cardItem = (item) => {
        return (
            <div className="col col-md-3" key={item.id}>
                <div className="card my-5 py-2" key={item.id} style={{ width: "250px" }}>
                    <img style={{ height: "200px" }} src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body text-center">
                        <h5 className="card-title mb-4">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
                </div>
            </div>
        );
    }

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
                <div className='col-md-3'>
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    const sortProduct = (data, sortBy) => {
        let sortedData = [...data];

        switch (sortBy) {
            case 'lowtohigh':
                sortedData.sort((a, b) => a.price - b.price);
                break;
            case 'hightolow':
                sortedData.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }
        return sortedData;
    }

    const ShowProducts = () => {
        const filteredData = DATA.filter(item => {
            return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        });
        const sortedData = sortProduct(filteredData, sortBy);

        return (
            <>
                <div className='buttons d-flex justify-content-center'>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSortBy('lowtohigh')}>Price - Low to high</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('')}>All</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('Iphone')}>Iphone</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('SamSung')}>SamSung</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('Xiaomi')}>Xiaomi</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('Sony')}>Sony</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSearchTerm('OnePlus')}>OnePlus</button>
                    <button className='btn btn-outline-dark me-2'
                        onClick={() => setSortBy('hightolow')}>Price - High to low</button>
                </div>
                <div className="row text-center">
                    {loading ? <Loading /> : sortedData.map(cardItem)}
                </div>
            </>
        );
    }

    return (
        <div>
            <div className="container py-2">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Product</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <ShowProducts />
            </div>
        </div>
    );
}

export default Product;
