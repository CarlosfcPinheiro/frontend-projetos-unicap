import Navbar from '../components/Navbar';
import Conversor from './conversorTemp';

export default function ConversorTemperatura() {
    return (
        <div className="temperatura__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <h1 className="text-lg">Conversor de Temperatura</h1>
            <p className="text-sm">Esse é um conversor de Temperatura C°-F°.</p>
            <Conversor options={['Celsius', 'Fahrenheit']} />
        </div>
    );
}
