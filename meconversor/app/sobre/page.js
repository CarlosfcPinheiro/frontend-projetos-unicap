import Navbar from '@/app/components/Navbar';

export default function Sobre() {
    return (
        <div className="sobre__container w-[100%] h-[100vh] flex flex-col items-center gap-5">
            <Navbar />
            <main className="text-left ml-12 mt-32">
                <h1 className="font-bold text-6xl">Sobre</h1>
                <p className="mt-4 w-[50%]">
                    Olá, sou Carlos Pinheiro, e sou o desenvolvedor desse
                    projeto em Next. Atualmente estou cursando Sistemas para
                    Internet na UNICAP e almejo seguir uma carreira acadêmica no
                    ramo da tecnlogia. Minhas principais tecnologias de
                    desenvolvimento atualmente são Java, com o framework Spring,
                    e Javascript com NodeJS.
                </p>
            </main>
        </div>
    );
}
