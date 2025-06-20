import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PlayButton from '../../components/PlayButton/PlayButton';

import styles from '../page.module.css';
import stylesModule from './page.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Sobre() {
    return (
        <>
            <Navbar />
            <main>
                <PlayButton />
                <section className="w-full h-auto flex justify-center">
                    <div className="content__container w-[50%] h-auto pt-20 pb-10 flex flex-col gap-4">
                        <h1 className={stylesModule.text_gradient}>
                            # Sobre. Conexões.
                        </h1>
                        <p className={styles.secondary_text}>
                            Aqui irei dedicar uma breve apresentação sobre mim.
                        </p>
                        <div className="quote__container flex justify-center">
                            <p className="text-center max-w-[50%] italic font-light text-[#a7a7a790] mt-6">
                                "A mais bela experiência que podemos ter é a do
                                mistério. Ela é a emoção fundamental que
                                permanece no berço da verdadeira arte e da
                                verdadeira ciência. [...] - Carl Sagan."
                            </p>
                        </div>
                        <div className="text__container flex flex-col gap-4 mt-6">
                            <h2 className="text-xl font-bold mb-2">
                                <span className={styles.yellow_colored}>
                                    ##
                                </span>{' '}
                                Olá!{' '}
                                <FontAwesomeIcon icon={faHand} width={16} />
                            </h2>
                            <p className={styles.secondary_text}>
                                Me chamo{' '}
                                <span className=" text-[#f8f8f8]">
                                    Carlos Pinheiro
                                </span>
                                , sou um Desenvolvedor Full-Stack, tenho 20 anos
                                e atualmente resido em{' '}
                                <span className="text-[#f8f8f8]">Recife</span>,
                                no estado de Pernambuco. Sempre fui movido pelo
                                sentimento de descoberta, e foi esse mesmo
                                sentimento que me fez descobrir o mundo da
                                tecnologia, sendo meu primeiro contato antes
                                mesmo de entrar em uma faculdade.
                            </p>
                            <p className={styles.secondary_text}>
                                Além disso, também tenho um grande apreço pelo
                                desenvolvimento acadêmico/científico voltado a
                                tópicos computacionais, tecnologias open-source
                                e muito Linux.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
