import React from 'react';
import Card from '../Cards/Card/Card.jsx'
const Cards = (props) => (
    <div className="cards-area">
            {props.items.map((item, index) => (
                <Card
                    item={item}
                    key={index}
                    onSearch={props.onSearch}
                    buyingItem={props.buyingItem}
                    sellingItem={props.sellingItem}
                    billionairesMoney={props.billionairesMoney}
                    isDarkMode={props.isDarkMode}
                />
            ))}
    </div>
);

export default Cards;