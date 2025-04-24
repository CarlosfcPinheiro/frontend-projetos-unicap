'use client';
import InputValue from '../components/InputValue';
import OutputValue from '../components/OutputValue';

import SelectorInput from '../components/SelectorInput';
import SelectorOutput from '../components/SelectorOutput';

import { useState } from 'react';

export default function Conversor({ options }) {
    const [inputValue, setInputValue] = useState(1);

    const [selectInputValue, setSelectInputValue] = useState(options[0]);
    const [selectOutputValue, setSelectOutputValue] = useState(options[0]);

    const outputValue = (() => {
        if (selectInputValue == 'Real' && selectOutputValue == 'Dólar') {
            return (inputValue / 5.28).toFixed(2);
        } else if (selectInputValue == 'Dólar' && selectOutputValue == 'Real') {
            return (inputValue * 5.28).toFixed(2);
        } else {
            return inputValue;
        }
    })();

    function handleInputChange(e) {
        if (!e.target.value) {
            return;
        }
        setInputValue(e.target.value);
    }

    function handleSelectInputChange(e) {
        setSelectInputValue(e.target.value);
    }

    function handleSelectOutputChange(e) {
        setSelectOutputValue(e.target.value);
    }

    return (
        <>
            <div className="conversor__container flex flex-row items-center gap-2">
                <div className="unit__container flex flex-col">
                    <InputValue onChangeInputValue={handleInputChange} />
                    <SelectorInput
                        options={options}
                        onChangeSelectValue={handleSelectInputChange}
                    />
                </div>
                <p>
                    <strong>=</strong>
                </p>
                <div className="unit__container flex flex-col">
                    <OutputValue inputValue={outputValue} />
                    <SelectorOutput
                        options={options}
                        onChangeSelectValue={handleSelectOutputChange}
                    />
                </div>
            </div>
        </>
    );
}
