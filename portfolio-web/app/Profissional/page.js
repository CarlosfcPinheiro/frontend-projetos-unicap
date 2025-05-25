import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import PlayButton from '../../components/PlayButton/PlayButton';

import styles from '../page.module.css';
import stylesModule from './page.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Profissional() {
    return (
        <>
            <Navbar />
            <main>
                <PlayButton />
                <section className="w-full h-[80vh] flex justify-center">
                    <div className="content__container w-[60%] h-auto pt-20 pb-10 flex flex-col gap-4">
                        <h1 className={stylesModule.text_gradient}>
                            # Profissional. Carreira.
                        </h1>
                        <p className={styles.secondary_text}>
                            Minhas experiências profissionais.
                        </p>
                        <div className="text__container flex flex-col gap-4 mt-2">
                            <h2 className="text-xl font-bold mb-2">
                                <span className={styles.purple_colored}>
                                    ##
                                </span>{' '}
                                Experiências{' '}
                                <FontAwesomeIcon
                                    icon={faLightbulb}
                                    width={16}
                                />
                            </h2>
                            <div className="xp__container flex flex-col gap-6">
                                <div className="xp flex flex-col gap-1">
                                    <h3>Assoc, Full-Stack Developer</h3>
                                    <div className="enterprise_container flex flex-row gap-1">
                                        <Link
                                            href={
                                                'https://www.avanade.com/pt-br'
                                            }
                                            className="underline"
                                        >
                                            Avanade Brasil
                                        </Link>
                                        <p className={styles.secondary_text}>
                                            {' '}
                                            • Recife, Pernambuco
                                        </p>
                                    </div>
                                    <p className={styles.secondary_text}>
                                        Jul 2025 - presente
                                    </p>
                                </div>
                                <div className="xp flex flex-col gap1">
                                    <h3>Freelancer Full-Stack</h3>
                                    <p className={styles.secondary_text}>
                                        Recife, Pernambuco
                                    </p>
                                    <p className={styles.secondary_text}>
                                        Jan 2024 - Mai 2025
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
