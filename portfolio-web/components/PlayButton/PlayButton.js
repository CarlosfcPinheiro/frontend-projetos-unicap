'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

import Link from 'next/link';

import { useState } from 'react';

export default function PlayButton() {
    const [hover, setHover] = useState(false);

    return (
        <Link href={'/Jogo'}>
            <div
                className="button__container w-12 h-12 border-1 border-[#7e638d] rounded-full flex justify-center items-center fixed top-[90%] left-[97%] transform -translate-x-1/2 z-10 transition-all duration-200 hover:scale-115 hover:bg-[#7e638d]"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <FontAwesomeIcon
                    icon={faGamepad}
                    className="text-2xl"
                    color={hover ? '#0a0a0a' : '#7e638d'}
                />
            </div>
        </Link>
    );
}
