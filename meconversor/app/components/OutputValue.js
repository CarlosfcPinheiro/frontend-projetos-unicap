export default function OutputValue({ inputValue }) {
    return (
        <div className="square_conversor__container flex flex-col w-60">
            <input
                type="number"
                className="rect_input border-1 h-8"
                placeholder="0"
                readOnly={true}
                value={inputValue}
            ></input>
        </div>
    );
}
