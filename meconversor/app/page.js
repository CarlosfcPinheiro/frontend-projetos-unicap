import Navbar from '@/app/components/navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <h1>Seja Bem-vindo!</h1>
                <p>
                    Essa página tem por objetivo compartilhar um pouco sobre
                    este projeto em Next!
                </p>
                <p>
                    O projeto foi desenvolvido através do framework Next, que é
                    construído em cima do React, realizando a renderização dos
                    componentes de maneira server-side. O projeto também conta
                    com o uso de paginação nativa do Next, e o melhor de tudo,
                    conversores de medidas que podem ser acessados através da
                    barra de navegação da página!
                </p>
            </main>
        </>
    );
}
