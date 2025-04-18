import Navbar from '../components/navbar';
import Conversor from '../components/Conversor';

export default function ConversorDist() {
    return (
        <div className="distancia__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <h1>Conversor de Distância</h1>
            <Conversor options={['Metro', 'Pé', 'Polegada']} />
        </div>
    );
}
