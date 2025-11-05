export default interface Tool {
    app_id: string;
    name: string;
    icon: string;
    color: string;
    link: string;
}

export interface PaginationResult<T> {
  data: T[];           // itens da página atual
  currentPage: number; // página ajustada (clamped)
  perPage: number;
  totalPages: number;
  startIndex: number;  // índice inicial (inclusive)
  endIndex: number;    // índice final (exclusive)
}

export interface SearchResultsProps {
    items: Tool[];
    onToolClick: (tool: Tool) => void;
}
