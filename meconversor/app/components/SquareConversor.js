'use client';
import { useState } from 'react';

export default function SquareConversor({ options }) {
    const [value, setValue] = useState(1);

    return (
        <div className="square_conversor__container flex flex-col w-60">
            <input
                type="number"
                className="rect_input border-1 h-8"
                defaultValue={1}
                value={value}
            ></input>
            <select className="bg-amber-50 h-8">
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
