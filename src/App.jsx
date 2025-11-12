import './App.css'
import UpperSection from './components/UpperSection/UpperSection.jsx'
import SettingButton from './components/SettingButton/SettingButton.jsx'
import Setting from './components/Settings/Settings.jsx'

import Musk from './assets/images/billionaires/Musk.png';
import Bezos from './assets/images/billionaires/Bezos.png';
import Gates from './assets/images/billionaires/Gates.png';


import baseItems from './assets/data_items/dataItems.jsx'
import React, {useState} from "react";
import {BrowserRouter, Link, Route, Routes, useLocation, useNavigate} from "react-router-dom";

const Billionaires = [
    {
        id: 1,
        name: 'Elon Musk',
        netWorth: 430_900_000_000,
        image: Musk
    },
    {
        id: 2,
        name: 'Jeff Bezos',
        netWorth: 238_200_000_000,
        image: Bezos
    },
    {
        id: 3,
        name: 'Bill Gates',
        netWorth: 107_000_000_000,
        image: Gates
    },

]


const exampleBillionaire =
    {
        id: 1,
        name: 'Elon Musk',
        netWorth: 430_900_000_000,
        image: Musk
    }



// const initialState = {
//     items: baseItems,
//     billionaire: exampleBillionaire,
//     billionaires: Billionaires,
//     billionairesMoney: exampleBillionaire.netWorth
// }

function InnerApp() {
    const [items, setItems] = useState(baseItems);
    const [billionaire, setBillionaire] = useState(exampleBillionaire)
    const [billionaires, setBillionaires] = useState(Billionaires)
    const [billionairesMoney, setBillionairesMoney] = useState(exampleBillionaire.netWorth)
    const navigate = useNavigate()
    const location = useLocation()

    // const [state, dispath] = useReducer(initialState, )

    const handleChangeBillionaire = (billionaireId) => {
        for (const billionaire of Billionaires) {
            if (billionaire.id === billionaireId) {
                setBillionaire(billionaire)
                setBillionairesMoney(billionaire.netWorth)
                console.log(`znalezion ${billionaire.id}`)
                navigate('/')
            } else {
                console.log(`Billionaire with ${billionaireId} no exists`)
            }
        }
    }

    const handleToggleChange = () => {
        if (location.pathname === "/settings") {
            navigate("/")
        } else {
            navigate("/settings")
        }

    }


    const handleBuy = (price) => {
        setBillionairesMoney(billionairesMoney - price)
    }
    const handleSell = (price) => {

        setBillionairesMoney(billionairesMoney + price)

    }


    const handleSearch = (term) => {
        const filteredItems = [...baseItems].filter(x => x.item.toLowerCase().includes(term));
        setItems(filteredItems)
    }

    return (
        <>
            <div style={{ minHeight: '100vh' }}>
                <div className="d-flex justify-content-between px-2 px-md-3">
                    <SettingButton onToggleChange={handleToggleChange}/>
                </div>

                <Routes>
                    <Route path='/' element={
                        <UpperSection
                            items={items}
                            buyingItem={handleBuy}
                            billionaire={billionaire}
                            billionairesMoney={billionairesMoney}
                            sellingItem={handleSell}
                            onSearch={(term) => handleSearch(term)}
                        />}/>
                    <Route path='/settings' element={
                        <Setting
                            id="settings"
                            billionaires={billionaires}
                            onBillionaireChange={handleChangeBillionaire}
                        />
                    }
                    />
                </Routes>
            </div>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <InnerApp/>
        </BrowserRouter>
    )
}

export default App
