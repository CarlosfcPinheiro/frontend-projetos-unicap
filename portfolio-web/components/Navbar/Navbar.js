import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="relative overflow-hidden h-[10vh] flex items-center justify-center">
            <ul className="flex flex-row gap-10 justify-center items-center">
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/Sobre'}>Sobre</Link>
                </li>
                <li>
                    <Link href={'/Profissional'}>Profissional</Link>
                </li>
                <li>
                    <Link href={'/Academico'}>Academico</Link>
                </li>
                <li>
                    <Link href={'/Projetos'}>Projetos</Link>
                </li>
            </ul>
        </nav>
    );
}
