import React from 'react';

const Checkbox = ({ name, value, onChange, defaultChecked, checked, style, className }) => {

    return (
        <input
            style={style}
            className={className}
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
        />
    );
}

export default Checkbox;
