import Navbar from '../components/navbar';
import Conversor from '../components/Conversor';

export default function ConversorTemperatura() {
    return (
        <div className="temperatura__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <h1>Conversor de Temperatura</h1>
            <Conversor options={['Celcius', 'Fahrenheit']} />
        </div>
    );
}
