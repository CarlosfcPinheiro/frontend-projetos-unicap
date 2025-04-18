import SquareConversor from '@/app/components/SquareConversor';

export default function Conversor({ options }) {
    return (
        <div className="conversor__container flex flex-row items-center gap-2">
            <SquareConversor options={options} />
            <p>
                <strong>=</strong>
            </p>
            <SquareConversor options={options} />
        </div>
    );
}
