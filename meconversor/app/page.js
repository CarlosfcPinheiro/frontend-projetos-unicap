import Navbar from '@/app/components/navbar';

export default function Home() {
    return (
        <div className="home__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <main className="text-left ml-12 mt-32">
                <h1 className="font-bold text-6xl">Seja Bem-vindo!</h1>
                <div className="text__container flex flex-col gap-2 mt-4 w-[50%]">
                    <p>
                        Essa página tem por objetivo compartilhar um pouco sobre
                        este projeto em Next!
                    </p>
                    <p>
                        O projeto foi desenvolvido através do framework Next,
                        que é construído com base no React, realizando a
                        renderização dos componentes de maneira server-side. O
                        projeto também conta com o uso de paginação nativa do
                        Next, e o melhor de tudo, conversores de medidas que
                        podem ser acessados através da barra de navegação da
                        página!
                    </p>
                </div>
            </main>
        </div>
    );
}
