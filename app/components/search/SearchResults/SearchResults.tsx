'use client';
import styles from './SearchResults.module.css';
import React, { useEffect, useState } from 'react';
import Card from '../../ui/Card/Card';
import Button from '../../ui/Button/Button';
import { SearchResultsProps } from '../../../types';



export default function SearchResults({
    items,
    onToolClick,
}: SearchResultsProps) {
    const itemsPerPage = 12;
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        setPage(1);
    }, [search]);

    const q = search.trim().toLowerCase();
    const filtered = q ? items.filter(t => t.name.toLowerCase().includes(q)) : items;
    const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedItems = filtered.slice(start, end);

    return (
        <section className={styles.container}>
            <div className={styles.searchBox}>
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar ferramentas..."
                    className={styles.input}
                />
            </div>

            <div className={styles.grid}>
                {paginatedItems.length > 0 ? (
                    paginatedItems.map(tool => (
                        <Card key={tool.app_id} name={tool.name} icon={tool.icon} color={tool.color} onClick={() => onToolClick(tool)} />
                    ))
                ) : (
                    <div className={styles.emptyMessage}>
                        {q ? `Nenhuma ferramenta encontrada para "${search}"` : 'Nenhuma ferramenta disponível'}
                    </div>
                )}
            </div>

            {paginatedItems.length > 0 && (
                <div className={styles.pagination}>
                    <Button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1} name="Anterior" />
                    <span>Página {page} de {totalPages}</span>
                    <Button onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages} name="Próxima" />
                </div>
            )}
        </section>
    );
}