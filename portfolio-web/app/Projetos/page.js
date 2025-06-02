import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PlayButton from '../../components/PlayButton/PlayButton';
import Project from '../../components/Project/Project';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserNurse } from '@fortawesome/free-solid-svg-icons';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faKeyboard } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import styles from '../page.module.css';
import stylesModule from './page.module.css';

export default function Projetos() {
    return (
        <>
            <Navbar />
            <main>
                <PlayButton />
                <section className="w-full h-[80vh] flex justify-center">
                    <div className="content__container w-[50%] h-auto pt-20 pb-10 flex flex-col gap-8">
                        <h1 className={stylesModule.text_gradient}>
                            # Projetos. Criar.
                        </h1>
                        <p className={styles.secondary_text}>
                            Durante meus estudos e aplicações em projetos reais,
                            sempre busquei entender a fundo as ferramentas que
                            estou utilizando, tirando o máximo que consigo
                            extrair e refletindo isso para a realidade. Também
                            sou bastante empolgado em trabalhar em projetos
                            diversificados
                        </p>
                        <h2 className="text-2xl font-bold">
                            Projetos Principais
                        </h2>
                        <div className="project__container flex flex-row gap-4">
                            <Project
                                icon={faUserNurse}
                                name={'Pronto Recife'}
                                description={
                                    'Prontuário eletrônico para a cidade do Recife'
                                }
                                link={'https://github.com/Pronto-Recife'}
                            />
                            <Project
                                icon={faShareFromSquare}
                                name={'Sharing page'}
                                description={
                                    'Site para compartilhamento de redes'
                                }
                                link={'https://carlos-p.tech/'}
                            />
                            <Project
                                icon={faKeyboard}
                                name={'GetCode'}
                                description={'Get key code of js inputs'}
                                link={
                                    'https://carlosfcpinheiro.github.io/GetKeyCode_js/'
                                }
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
