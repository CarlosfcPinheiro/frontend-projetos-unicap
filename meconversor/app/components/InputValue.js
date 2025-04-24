export default function InputValue({ onChangeInputValue }) {
    return (
        <div className="square_conversor__container flex flex-col w-60">
            <input
                type="number"
                className="rect_input border-1 h-8"
                onChange={onChangeInputValue}
                placeholder="0"
            ></input>
        </div>
    );
}
