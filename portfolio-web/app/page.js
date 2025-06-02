'use client';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PlayButton from '../components/PlayButton/PlayButton';

import styles from './page.module.css';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
FontAwesomeIcon;

import Link from 'next/link';

import { useState, useEffect } from 'react';

export default function Home() {
    const [catFact, setCatFact] = useState('');

    useEffect(() => {
        const getCatFact = async () => {
            try {
                const response = await fetch(
                    'https://meowfacts.herokuapp.com/?lang=por-br'
                );
                const data = await response.json();
                setCatFact(data.data[0]);
                console.log(data.data[0]);
            } catch (e) {
                console.error(e);
            }
        };

        getCatFact();
    }, []);

    return (
        <>
            <Navbar />
            <main>
                <PlayButton />
                <section className="w-full flex flex-col justify-center h-[90vh]">
                    <div className="text-center">
                        <h1 className="text-6xl font-bold">Carlos Pinheiro</h1>
                        <h2 className="italic text-base">
                            Full-Stack Developer
                            <span className={styles.hidden_text}>
                                , focused on back-end :D
                            </span>
                            <Link href={'#hello'}>
                                <div className="w-10 h-10 border-2 rounded-full flex justify-center items-center text-[#ededed90] animate-bounce absolute top-[85%] left-1/2 transform -translate-x-1/2">
                                    <FontAwesomeIcon
                                        icon={faAngleDown}
                                        width={28}
                                    />
                                </div>
                            </Link>
                        </h2>
                    </div>
                </section>
                <section className="w-full h-auto flex justify-center">
                    <div className="content__container w-[50%] h-auto pt-10 pb-10">
                        <h1 id="hello" className={styles.text_gradient}>
                            # Hello, world!
                        </h1>
                        <div className="p__container mt-3 flex flex-col gap-4 text-[]">
                            <p className={styles.secondary_text}>
                                Meu nome é Carlos Pinheiro, e sou um
                                desenvolvedor{' '}
                                <span className="font-bold">Full-Stack</span>.
                                Estou sempre em busca de me conectar com as
                                pessoas e de aprender novas tecnologias, Além
                                disso, também tenho muito apreço pela ciência
                                ligada à{' '}
                                <span className="text-[#f8f8f8]">
                                    computação
                                </span>
                                .
                            </p>
                            <p className={styles.secondary_text}>
                                Me mantenho presente em comunidades de
                                tecnologia, e um gosto especial por{' '}
                                <span className="text-[#f8f8f8] ">
                                    open-source
                                </span>
                                . Esse Portfólio é destinado para que eu possa
                                apresentar um pouco sobre mim e como estou
                                posicionado no mercado atualmente, de forma
                                acadêmica e profissional.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="tailed_windows__container h-[80vh] flex justify-center">
                    <div className="content__container w-[50%]">
                        <div className={styles.tiled_window__container}>
                            <div className={styles.top_window_bar__container}>
                                <div className="dot1 w-6 h-6 rounded-full bg-(--green-mac)"></div>
                                <div className="dot2 w-6 h-6 rounded-full bg-(--yellow-mac)"></div>
                                <div className="dot3 w-6 h-6 rounded-full bg-(--red-mac) mr-3"></div>
                            </div>
                            <img src="/githubpage.gif" width={1480}></img>
                        </div>
                        <div className="cat_fact__container">
                            <p className="text-center text-sm mt-2 text-transparent hover:text-(--hidden_color)">
                                {catFact}
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
