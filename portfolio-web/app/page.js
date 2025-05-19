import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

import styles from './page.module.css';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
FontAwesomeIcon;

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="w-full flex flex-col justify-center h-[90vh]">
                <section className="text-center">
                    <h1 className="text-6xl font-bold">Carlos Pinheiro</h1>
                    <h2 className="italic text-base">
                        Full-Stack Developer
                        <span className={styles.hidden_text}>
                            , focused on back-end :D
                        </span>
                        <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center text-[#ededed90] animate-bounce absolute top-[85%] left-1/2 transform -translate-x-1/2">
                            <FontAwesomeIcon icon={faAngleDown} width={28} />
                        </div>
                    </h2>
                </section>
            </section>
            <section className="w-full h-auto flex justify-center">
                <div className="content__container w-[60%] h-auto pt-10 pb-10">
                    <h1 className="text-6xl font-bold">
                        <span className={styles.purple_colored}>#</span> Hello,
                        world!
                    </h1>
                    <div className="p__container mt-3 flex flex-col gap-4 text-[]">
                        <p className={styles.secondary_text}>
                            Meu nome é Carlos Pinheiro, e sou um desenvolvedor
                            Full-Stack. Estou sempre em busca de me conectar com
                            as pessoas e de aprender novas tecnologias, Além
                            disso, também tenho muito apreço pela ciência ligada
                            a tópicos computacionais.
                        </p>
                        <p className={styles.secondary_text}>
                            Além disso, me mantenho presente em comunidades de
                            tecnologia, e um gosto especial por open-source. Em
                            momentos de descanso gosto de fazer artes digitais,
                            uma boa leitura e estudar música.
                        </p>
                    </div>
                </div>
            </section>
            <section className="tailed_windows__container h-[80vh] flex justify-center">
                <div className="content__container w-[60%]">
                    <div className={styles.tiled_window__container}>
                        <div className={styles.top_window_bar__container}>
                            <div className="dot1 w-6 h-6 rounded-full bg-[#00CA4C]"></div>
                            <div className="dot2 w-6 h-6 rounded-full bg-[#FFBD44]"></div>
                            <div className="dot3 w-6 h-6 rounded-full bg-[#FF605C] mr-3"></div>
                        </div>
                        <img src="/githubpage.gif" width={1480}></img>
                    </div>
                </div>
            </section>
            <main></main>
            <Footer />
        </>
    );
}
