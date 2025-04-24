import Navbar from '../components/Navbar';
import Conversor from './conversorMoeda';

export default function ConversorMoeda() {
    return (
        <div className="moeda__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <h1 className="text-lg">Conversor de Moedas</h1>
            <p className="text-sm">
                Esse é um conversor de moedas Real-Dólar. A cotação utilizada é
                R$ 5.28 (14/04/2025).
            </p>
            <Conversor options={['Real', 'Dólar']} />
        </div>
    );
}
