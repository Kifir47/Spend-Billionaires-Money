import React, {useEffect, useState} from 'react';
import SearchSection from './SearchSection/SearchSection.jsx'
import './MoneySection.css'

const MoneySection = (props) => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {

            const myScrollY = window.scrollY

            if (myScrollY > 612) {
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };

    }, [])


    return (
        <div className={`money-section d-flex justify-content-center align-items-center flex-column `}>
            {/*<div className={`avatar`}></div>*/}
            <img src={props.billionaire.image} alt="billionaire image"/>
            <h2 className={`text-muted`}>Spend {props.billionaire.name}'s Money</h2>
            <h1 className={`fw-bold  ${scrolled ? 'fixed-top text-center py-2 text-white bg-dark mt-0' : 'mt-3' }`}>{props.billionairesMoney}$</h1>
            {/*<SearchSection onSearch={props.onSearch}/>*/}
        </div>
    )
};

export default MoneySection;