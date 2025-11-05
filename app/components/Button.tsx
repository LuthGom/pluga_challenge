'use client';

interface ButtonProps {
    onClick: () => void;
    disabled?: boolean;
    name?: string;
    className?: string;
}
export default function Button({ onClick, disabled, name, className }: ButtonProps) {

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`text-white  underline border-2 rounded-lg  py-2 px-4 hover:text-blue-800 cursor-pointer ${className}`}
        >
            {name}
        </button>)
}