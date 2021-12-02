import React from 'react';
import Card from '../../components/Card';
import { ALL_SHOES } from './constants';
import './css/index.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            {ALL_SHOES.map((shoe) => {
                return (
                    <Card 
                        productName={shoe.productName}
                        brandName={shoe.brandName}
                        mainImage={shoe.mainImage}
                        price={shoe.price}
                        smallImage1={shoe.smallImage1}
                        smallImage2={shoe.smallImage2}
                    />
                )
            })}
        </div>
    )
}

export default Dashboard;
