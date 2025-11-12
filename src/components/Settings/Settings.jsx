import React, {useEffect, useState} from 'react';
import styled from "styled-components";

const Img = styled.img`
    width: 100px;

`


const Settings = (props) => {

    const [isShowing, setIsShowing] = useState(false)

    useEffect(() => {

        setIsShowing(true)

    });

    const changeBillionaire = (id) => {
        props.onBillionaireChange(id)
    }


    return (
        <div className="section d-flex flex-column justify-content-center align-items-center text-muted">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className="fs-1 text-center mb-5">Choose Billionaire</h1>
                <div className="billionaires-section w-50 d-flex justify-content-center mb-5 gap-5">
                    {isShowing ? (
                        props.billionaires.map((billionaire) => (
                            <a key={billionaire.id} onClick={() => changeBillionaire(billionaire.id)}>
                                <Img
                                    src={billionaire.image}
                                    alt="billionaires images"
                                    className="w-100"
                                    style={{cursor: 'pointer'}}
                                />
                            </a>
                        ))
                    ) : (
                        <span className="loader"></span>
                    )}
                </div>
            </div>

        </div>
    );
};

export default Settings;