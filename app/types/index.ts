export default interface Tool {
    app_id: string;
    name: string;
    icon: string;
    color: string;
    link: string;
}

export interface PaginationResult<T> {
  data: T[];           
  currentPage: number; 
  perPage: number;
  totalPages: number;
  startIndex: number;  
  endIndex: number;    
}

export interface SearchResultsProps {
    items: Tool[];
    onToolClick: (tool: Tool) => void;
}
