export interface PaginationConfig {
  hasNextPage: boolean;
  hasPrevPage: boolean;
  page: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}
