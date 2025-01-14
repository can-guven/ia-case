/** Dependencies */
import { useCallback, useState } from "react";

/** Types */
import { UsePaginationOptions } from "../types/hooks/use-pagination";

const usePagination = ({
  defaultPage = 0,
  defaultRowsPerPage = 10,
}: UsePaginationOptions) => {
  const [page, setPage] = useState<number>(defaultPage);
  const [rowsPerPage, setRowsPerPage] = useState<number>(defaultRowsPerPage);

  const handleChangePage = useCallback((_event: any, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback((event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }, []);
  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};

export default usePagination;
