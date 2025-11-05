'use client';
import { useTools } from '../../hooks/useTools';
import SearchResults from '../search/SearchResults';
interface CardsListProps {
  URL: string;
}

export default function CardsList({ URL }: CardsListProps) {
  const { items, handleToolClick } = useTools(URL);

  return (
    <div>
      <SearchResults items={items} onToolClick={handleToolClick} itemsPerPage={12} />
    </div>
  );
}