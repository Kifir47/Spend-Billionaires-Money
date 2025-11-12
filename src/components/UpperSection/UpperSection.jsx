import React from 'react';
import styled from "styled-components";
import './UpperSection.css'
import MoneySection from "../MoneySection/MoneySection.jsx";
import Cards from './Cards/Cards.jsx'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const UpperSection = (props) => {

    return (
        <Container>
            <MoneySection
                onSearch={props.onSearch}
                billionaire={props.billionaire}
                billionairesMoney={props.billionairesMoney}
            />
            <div className={`cards-section ${props.isDarkMode ? 'dark-mode' : ''}`}>
                <Cards
                    items={props.items}
                    buyingItem={props.buyingItem}
                    sellingItem={props.sellingItem}
                    billionairesMoney={props.billionairesMoney}
                    isDarkMode={props.isDarkMode}
                />
            </div>
        </Container>
    )
};

export default UpperSection;