'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Game() {
    const [inputValue, setInputValue] = useState();
    const [chances, setChaces] = useState(0);
    const [password, setPassword] = useState([]);
    const [userPassword, setUserPassword] = useState([]);
    const [point, setPoint] = useState(0);
    const [gameStarted, setGameStarted] = useState(true);

    function numbersGenerate() {
        const copyPassword = [];

        while (copyPassword.length < 5) {
            const randomNumber = Math.floor(Math.random() * 10).toString();
            if (!copyPassword.includes(randomNumber)) {
                copyPassword.push(randomNumber);
            }
        }

        setPassword(copyPassword);
        setGameStarted(false);
        setUserPassword([]);
        setChaces(0);
        setPoint(0);
    }

    function displayNumber() {
        alert(`A senha é ${password}`);

        setGameStarted(true);
        setPassword([]);
        setUserPassword([]);
        setChaces(0);
        setPoint(0);
    }

    function sendPassword(numbersInputValue) {
        setUserPassword([
            ...userPassword,
            numbersInputValue.toString().split('')
        ]);
        displayPoints(numbersInputValue.toString().split(''));
    }

    function compareNumbers(value, index) {
        if (value === password[index]) {
            return styles.correct_position;
        }
        if (password.some((caracter) => value == caracter)) {
            return styles.incorret_position;
        }
        return styles.wrong_position;
    }

    function displayPoints(value) {
        let points = 0;

        value.forEach((digit, index) => {
            if (digit === password[index]) {
                points++;
            }
        });
        setPoint(points);
    }

    return (
        <main className={styles.game__container}>
            <section className={styles.section}>
                {point === 5 ? (
                    <h1 className={styles.title}>Você Ganhou!</h1>
                ) : chances === 10 ? (
                    <h1 className={styles.title}>Voce perdeu :(</h1>
                ) : null}

                <section className={styles.password_section}>
                    {userPassword.map((passwordDisplay, i) => (
                        <div
                            key={`${i}Password`}
                            className={styles.divPassword}
                        >
                            {passwordDisplay.map((digit, index) => (
                                <p
                                    key={`${index}IndexValue`}
                                    className={compareNumbers(digit, index)}
                                >
                                    {digit}
                                </p>
                            ))}
                        </div>
                    ))}
                </section>

                <section className={styles.input_section}>
                    <input
                        type="number"
                        min="0"
                        max="9"
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        className="appearence-none outline-0 border-1 rounded-sm pl-2"
                    />

                    <div className={styles.buttons__container}>
                        <button
                            onClick={() => {
                                inputValue.length === 5
                                    ? sendPassword(inputValue)
                                    : alert(
                                          'Você deve inserir 5 números para gerar uma tentativa!!'
                                      );
                                setChaces(chances + 1);
                            }}
                            disabled={
                                gameStarted || chances === 10 || point === 5
                            }
                        >
                            Enviar senha
                        </button>

                        <button
                            onClick={() => {
                                numbersGenerate();
                                setGameStarted(false);
                            }}
                        >
                            Gerar Senha
                        </button>

                        <button
                            onClick={() => {
                                displayNumber();
                            }}
                            disabled={
                                gameStarted || chances === 10 || point === 5
                            }
                        >
                            Mostrar Senha
                        </button>
                    </div>
                </section>
            </section>
        </main>
    );
}
