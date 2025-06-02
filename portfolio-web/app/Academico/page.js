import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import styles from '../page.module.css';
import stylesModule from './page.module.css';

import PlayButton from '../../components/PlayButton/PlayButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

export default function Academico() {
    return (
        <>
            <Navbar />
            <main>
                <PlayButton />
                <section className="w-full h-[80vh] flex justify-center">
                    <div className="content__container w-[50%] h-auto pt-20 pb-10 flex flex-col gap-4">
                        <h1 className={stylesModule.text_gradient}>
                            # Acadêmico. Descoberta.
                        </h1>
                        <p className={styles.secondary_text}>
                            Minhas experiências e formações acadêmicas.
                        </p>
                        <div className="text__container flex flex-col gap-4 mt-2">
                            <h2 className="text-xl font-bold mb-2">
                                <span className={styles.purple_colored}>
                                    ##
                                </span>{' '}
                                Formação{' '}
                                <FontAwesomeIcon
                                    icon={faGraduationCap}
                                    width={16}
                                />
                            </h2>
                            <div className="xp__container flex flex-col gap-6">
                                <div className="xp flex flex-col gap-1">
                                    <h3>Sistemas para Internet (Tecnólogo)</h3>
                                    <div className="enterprise_container flex flex-row gap-1">
                                        <Link
                                            href={'https://portal.unicap.br/'}
                                            className="underline"
                                            target="blank"
                                        >
                                            Universidade Católica de Pernambuco
                                        </Link>
                                        <p className={styles.secondary_text}>
                                            {' '}
                                            • Recife, Pernambuco
                                        </p>
                                    </div>
                                    <p className={styles.secondary_text}>
                                        Apr 2024 - presente
                                    </p>
                                </div>
                                <div className="xp flex flex-col gap1">
                                    <h3>
                                        Desenvolvimento de Sistemas (Técnico)
                                    </h3>
                                    <p className={styles.secondary_text}>
                                        Escola Técnica Estadual Porto Digital •
                                        Recife, Pernambuco
                                    </p>
                                    <p className={styles.secondary_text}>
                                        Jan 2021 - Dez 2023
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
