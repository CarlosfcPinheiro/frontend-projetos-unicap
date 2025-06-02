import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Game from '../../components/Game/Game';

export default function Jogo() {
    return (
        <>
            <Navbar />
            <main>
                <section className="w-full min-h-[80vh] flex justify-center">
                    <div className="content__container w-[50%] h-auto pt-20 pb-10 flex flex-col gap-4 justify-center items-center">
                        <Game />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
