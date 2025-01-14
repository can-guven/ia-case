export interface UsePaginationOptions {
  page?: number;
  setPage: (value) => void;
  defaultRowsPerPage?: number;
}
