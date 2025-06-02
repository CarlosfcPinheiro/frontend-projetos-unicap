import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Link from 'next/link';

export default function Project({ name, description, icon, link }) {
    return (
        <>
            <Link
                href={link}
                className="transition-all duration-200 hover:scale-105 hover:bg-[#161616] rounded-xl"
            >
                <div className="project__container p-2">
                    <FontAwesomeIcon icon={icon} className="text-3xl" />
                    <p className="text-[#f8f8f8] mt-3">{name}</p>
                    <p className="text-[#a7a7a7] max-w-42 mt-1">
                        {description}
                    </p>
                </div>
            </Link>
        </>
    );
}
