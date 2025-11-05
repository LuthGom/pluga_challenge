'use client';

import { ReactSVG } from "react-svg";


interface CardProps {
    name: string;
    icon: string;  // URL do SVG
    color: string; // cor que vem da API
    onClick?: () => void;
}
export default function Card({ name, icon, color, onClick }: CardProps) {


    return (
        <div className="w-40 h-40 p-4 border-2 border-solid border-black-500 flex flex-col justify-center items-center gap-4 cursor-pointer" onClick={onClick}>
            <div >
                <ReactSVG src={icon}
                    beforeInjection={(svg) => {
                        // aplica o fill e color do item
                        svg.setAttribute('fill', color);
                        svg.setAttribute('color', color);
                        svg.setAttribute('width', '64px');
                        svg.setAttribute('height', '64px');
                    }} />
            </div>
            <div><h3>{name}</h3></div>
        </div>
    );
}