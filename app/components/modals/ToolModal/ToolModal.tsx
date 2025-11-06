'use client';
import styles from './ToolModal.module.css';
import { ReactSVG } from "react-svg";
import Card from "../../ui/Card/Card";
import Modal from "../Modal/Modal";
import Tool from "@/app/types";


interface ToolModalProps {
    isOpen: boolean;
    onClose: () => void;
    tool: Tool | null;
    onToolClick: (tool: Tool) => void;
    lastedTools: Tool[];
}

export default function ToolModal({ isOpen, onClose, tool, onToolClick, lastedTools }: ToolModalProps) {
    if (!tool) return null;


    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className={styles.modalContent}>
                <div className={styles.modalHeader}>
                    <img
                        src={tool.icon}
                        alt={tool.name}
                        style={{
                            width: '64px',
                            height: '64px',
                            filter: `fill(${tool.color})`
                        }}
                        className={styles.toolIcon}
                    />
                    <div className={styles.toolInfo}>
                        <h3 className={styles.toolTitle}>{tool.name}</h3>

                        <a
                            href={tool.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.accessButton}
                        >
                            Acessar
                        </a>
                    </div>
                </div>

                <div className="w-full">
                    <h2 className="text-lg font-bold mb-4 text-center">ÚLTIMAS FERRAMENTAS VISUALIZADAS</h2>
                    <div className="flex justify-between">

                        {lastedTools.map((tool) =>
                        (
                            <Card
                                key={tool.app_id}
                                name={tool.name}
                                icon={tool.icon}
                                color={tool.color}
                                onClick={() => onToolClick(tool)} />))}
                    </div>
                </div>
            </div>
        </Modal>
    );
}