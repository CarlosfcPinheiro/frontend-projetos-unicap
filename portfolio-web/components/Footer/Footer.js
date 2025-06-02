import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative overflow-hidden h-[12vh] flex flex-col items-center justify-center gap-0.5 text-(--footer-text) text-sm">
            <p>
                desenvolvido por <span>Carlos Pinheiro</span>
            </p>
            <div className="links__container flex flex-row gap-4 mt-2">
                <Link href={'https://www.linkedin.com/in/carlos-pinheiro82/'}>
                    linkedin
                </Link>
                <Link href={'https://www.instagram.com/carlosfabiocp/'}>
                    instagram
                </Link>
                <Link href={'carlosfcpinheiro82@gmail.com'}>e-mail</Link>
                <Link href={'https://github.com/CarlosfcPinheiro'}>github</Link>
            </div>
        </footer>
    );
}
