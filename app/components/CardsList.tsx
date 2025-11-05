'use client';
import { useState } from "react";
import Card from "./Card";
import ToolModal from "./ToolModal";

interface Tool {
    name: string;
    icon: string;
    color: string;
    link: string;
}

interface CardsListProps {
    tools: Tool[];
}

export default function CardsList({ tools }: CardsListProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

    const handleToolClick = (tool: Tool) => {
        setSelectedTool(tool);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className="w-3/5 mx-auto grid grid-cols-4 grid-rows-4 gap-y-6 justify-items-center items-center min-h-screen">
                {tools.map((tool, index) => (
                    <Card 
                        key={index}
                        name={tool.name}
                        icon={tool.icon}
                        color={tool.color}
                        onClick={() => handleToolClick(tool)}
                    />
                ))}
            </div>
            <ToolModal 
                isOpen={isOpen}
                onClose={handleCloseModal}
                tool={selectedTool}
                onToolClick={handleToolClick}
            />
        </div>
    );
}