export default function SelectorOutput({ options, onChangeSelectValue }) {
    return (
        <select className="bg-amber-50 h-8 pl-1" onChange={onChangeSelectValue}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}
