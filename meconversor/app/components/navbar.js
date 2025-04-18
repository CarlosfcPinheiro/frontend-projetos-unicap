import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav__container mt-8">
                <ul className="flex flex-row justify-center gap-5 border-2 rounded-xl p-4">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <Link href="/sobre" className="hover:underline">
                        Sobre
                    </Link>
                    <Link href="/conversorMoeda" className="hover:underline">
                        Dólar-Real
                    </Link>
                    <Link href="/conversorTemp" className="hover:underline">
                        Celsius-Fahrenheit
                    </Link>
                    <Link href="/conversorDist" className="hover:underline">
                        Metro-Pé-Polegada
                    </Link>
                </ul>
            </div>
        </nav>
    );
}
