'use client';
import { useState, useEffect } from "react";
import Card from "./Card";
import ToolModal from "./ToolModal";
import Button from "./Button";

interface Tool {
    name: string;
    icon: string;
    color: string;
    link: string;
}

interface CardsListProps {
    // tools: Tool[];
    URL: string;
}

export default function CardsList({ URL }: CardsListProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
    const [items, setItems] = useState<Tool[]>([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const itemsPerPage = 12;


    const [lastClickedTools, setLastClickedTools] = useState<Tool[]>([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => setItems(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [])


    const totalPages = Math.ceil(items.length / itemsPerPage);
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = items.slice(start, end);

    const handleToolClick = (tool: Tool) => {
        setSelectedTool(tool);
        setIsOpen(true);

        setLastClickedTools((prevTools) => {
            const updatedLastTools = [tool, ...prevTools];

            setLastClickedTools([...updatedLastTools])
            if (lastClickedTools.length > 2) {
                lastClickedTools.pop();
            }
            setLastClickedTools([...updatedLastTools])


            return prevTools
        })

    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };


    return (
        <div>
            <div className="w-4/5 mx-auto grid grid-cols-4 auto-rows-fr justify-items-center items-center h-[80vh] overflow-hidden">
                {paginatedItems.map((tool, index) => (
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
                lastedTools={lastClickedTools}
            />

            {/* Controles de paginação */}
            <div className="flex justify-center mt-4">
                <Button
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={page === 1}
                    name="Anterior"
                    style="bg-[#41BAFF]"
                >

                </Button>

                <span className="px-2">
                    Página {page} de {totalPages}
                </span>

                <Button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    disabled={page === totalPages}
                    name="Próxima"
                    style="bg-[#41BAFF]"
                >

                </Button>
            </div>
        </div>
    );
}