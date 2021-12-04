import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import style from "./MySelect.module.css";

interface MySelectProps {
    isPageChanger: boolean,
    value: string | number,
    onChange: any,
    options: {value: string | number, name: string}[]
}

const MySelect : FC<MySelectProps> = ({value, onChange, options, isPageChanger}) => {
    const history = useHistory();

    return (
        <select
            value={value}
            onChange={(event : React.ChangeEvent<HTMLSelectElement>) => {
                onChange(event.target.value)
                if (isPageChanger) {
                    history.push(`${event.target.value}`);
                }
            }}
            className={style.mySelect}
        >
        {options.map(option => 
          <option className={style.myOption} value={option.value} key={option.name}>{option.name}</option>
        )}
        </select>
    );
};

export default MySelect;