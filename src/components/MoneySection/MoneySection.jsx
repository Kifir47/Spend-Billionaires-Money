import React, {useEffect, useState, useRef} from 'react';
import SearchSection from './SearchSection/SearchSection.jsx'
import './MoneySection.css'

const MoneySection = (props) => {

    const [scrolled, setScrolled] = useState(false)
    const [displayMoney, setDisplayMoney] = useState(props.billionairesMoney)
    const [isChanging, setIsChanging] = useState(false)
    const animationRef = useRef(null)

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

    useEffect(() => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
        }

        setIsChanging(true)

        const startMoney = displayMoney
        const targetMoney = props.billionairesMoney
        const difference = targetMoney - startMoney
        const duration = 500
        const startTime = performance.now()

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)

            const easeOutQuad = progress * (2 - progress)
            const currentMoney = Math.round(startMoney + (difference * easeOutQuad))

            setDisplayMoney(currentMoney)

            if (progress < 1) {
                animationRef.current = requestAnimationFrame(animate)
            } else {
                setIsChanging(false)
            }
        }

        animationRef.current = requestAnimationFrame(animate)

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current)
            }
        }
    }, [displayMoney, props.billionairesMoney])


    return (
        <div className={`money-section d-flex justify-content-center align-items-center flex-column `}>
            {/*<div className={`avatar`}></div>*/}
            <img src={props.billionaire.image} alt="billionaire image"/>
            <h2 className={`text-muted`}>Spend {props.billionaire.name}'s Money</h2>
            <h1 className={`fw-bold ${isChanging ? 'money-changing' : ''} ${scrolled ? 'fixed-top text-center py-2 text-white bg-dark mt-0' : 'mt-3' }`}>{displayMoney.toLocaleString()}$</h1>
            {/*<SearchSection onSearch={props.onSearch}/>*/}
        </div>
    )
};

export default MoneySection;