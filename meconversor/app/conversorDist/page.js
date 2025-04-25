import Navbar from '../components/Navbar';
import Conversor from './conversorDist';

export default function pageDist() {
    return (
        <div className="distancia__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <h1 className="text-lg">Conversor de Medidas</h1>
            <p className="text-sm">
                Esse é um conversor de medidas de Metro-Pé-Polegada.
            </p>
            <Conversor options={['Metro', 'Pé', 'Polegada']} />
        </div>
    );
}
