import { useEffect, useMemo, useState } from 'react';
import Tool from '../types';


interface UseToolsReturn {
    items: Tool[];
    loading: boolean;
    error: Error | null;
    selectedTool: Tool | null;
    isOpen: boolean;
    recent: Tool[];
    handleToolClick: (tool: Tool) => void;
    closeModal: () => void;
}

export function useTools(URL: string, itemsPerPage = 12): UseToolsReturn {
    const [items, setItems] = useState<Tool[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
    const [recent, setRecent] = useState<Tool[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!URL) {
            setItems([]);
            return;
        }

        setLoading(true);
        setError(null);

        fetch(URL)
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP error ${res.status}`);
                return res.json();
            })
            .then((data) => {
                // garante que items é um array antes de setar
                setItems(Array.isArray(data) ? (data as Tool[]) : []);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setError(err);
                setItems([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [URL]);

    const handleToolClick = (tool: Tool) => {
        setSelectedTool(tool);
        setIsOpen(true);
        setRecent((prev) => {
            const dedup = [tool, ...prev.filter((t) => t.app_id !== tool.app_id)];
            return dedup.slice(0, 3);
        });
    };

    const closeModal = () => setIsOpen(false);

    return {
        items,
        loading,
        error,
        selectedTool,
        isOpen,
        recent,
        handleToolClick,
        closeModal,
    };
}

export default useTools;
