'use client';

import { useRef } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export default function Modal({ isOpen, onClose, children }: Props) {

    const overlayRef = useRef<HTMLDivElement | null>(null);
    if (!isOpen) return null;
    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/70 flex items-center justify-center"
            onMouseDown={(e) => {
                // fecha ao clicar fora do conteúdo
                if (e.target === overlayRef.current) onClose();
            }}
            aria-modal="true"
        >
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full mx-4">
                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                    >
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
}