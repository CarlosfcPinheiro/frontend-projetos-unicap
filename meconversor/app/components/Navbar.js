import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav__container mt-8">
                <ul className="flex flex-row justify-center gap-5 border-2 rounded-xl p-4">
                    <Link href="/" prefetch={true} className="hover:underline">
                        Home
                    </Link>
                    <Link
                        href="/sobre"
                        prefetch={true}
                        className="hover:underline"
                    >
                        Sobre
                    </Link>
                    <Link
                        href="/conversorMoeda"
                        prefetch={true}
                        className="hover:underline"
                    >
                        Dólar-Real
                    </Link>
                    <Link
                        href="/conversorTemp"
                        prefetch={true}
                        className="hover:underline"
                    >
                        Celsius-Fahrenheit
                    </Link>
                    <Link
                        href="/conversorDist"
                        prefetch={true}
                        className="hover:underline"
                    >
                        Metro-Pé-Polegada
                    </Link>
                </ul>
            </div>
        </nav>
    );
}
