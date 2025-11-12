import React from 'react';

const SettingButton = (props) => {
    const onToggleChange = () =>{
        props.onToggleChange()
    }
    return (
        <div className="btn fs-1" onClick={onToggleChange}>
            <i className="bi bi-gear-fill"></i>
        </div>
    )
};

export default SettingButton;