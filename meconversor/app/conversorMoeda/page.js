import Navbar from '../components/navbar';
import Conversor from '../components/Conversor';

export default function ConversorMoeda() {
    return (
        <div className="moeda__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <h1>Conversor de Moedas</h1>
            <Conversor options={['Real', 'Dólar']} />
        </div>
    );
}
