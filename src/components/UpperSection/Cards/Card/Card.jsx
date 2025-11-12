import React, {useState} from 'react';

const Card = (props) => {

    let [amount, setAmount] = useState(0)

    const handleQuantityChange = (e) => {
        const newAmount = parseInt(e.target.value) || 0
        if (newAmount < 0) return

        const difference = newAmount - amount

        if (difference > 0) {
            // Check if we have enough money before increasing quantity
            const totalCost = props.item.price * difference
            if (props.billionairesMoney < totalCost) {
                // Calculate maximum affordable quantity
                const maxAffordable = Math.floor(props.billionairesMoney / props.item.price)
                const maxPossibleAmount = amount + maxAffordable
                setAmount(maxPossibleAmount)
                if (maxAffordable > 0) {
                    props.buyingItem(props.item.price * maxAffordable)
                }
                return
            }
            // Can afford the increase
            setAmount(newAmount)
            props.buyingItem(totalCost)
        } else if (difference < 0) {
            // Decreased quantity - add money back
            setAmount(newAmount)
            props.sellingItem(props.item.price * Math.abs(difference))
        }
    }

    const buyItem = () => {
        if (props.billionairesMoney >= props.item.price) {
            setAmount(amount + 1)
            props.buyingItem(props.item.price)
        }
    }

    const sellItem = () => {
        if(amount <= 0){
            return
        }
        setAmount(amount - 1)
        props.sellingItem(props.item.price)
    }


    return (
        <div className="card">
            <div className="card-header">
                <div className="image d-flex justify-content-center align-items-center">
                    <img src={props.item.image} alt="image"/>
                </div>
            </div>
            <div className={`card-body d-flex ${props.isDarkMode ? 'dark-mode' : ''} flex-column`}>
                <div className={`price-section ${props.isDarkMode ? 'dark-mode' : ''} d-flex justify-content-between align-items-center fs-5`}>
                    <p className="name">{props.item.item}</p>
                    <p className="price">{props.item.price}$</p>
                </div>
                <div className="buttons-section d-flex justify-content-between gap-2 align-items-center">
                    <button className='btn btn-danger' onClick={sellItem}>SELL</button>
                    <input
                        type="number"
                        value={amount}
                        onChange={handleQuantityChange}
                        min="0"
                        className="form-control text-center fw-bold"
                        style={{width: "80px"}}
                    />
                    <button className='btn btn-success' onClick={buyItem}>BUY</button>
                </div>
            </div>
        </div>
    )
};

export default Card;