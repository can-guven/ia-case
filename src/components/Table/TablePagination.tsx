/** Dependencies */
import { FC } from "react";
import MUITablePagination from "@mui/material/TablePagination";

/** Types */
import { TablePaginationProps } from "../../types/components/table";

const TablePagination: FC<TablePaginationProps> = ({
  count,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
}) => {
  return (
    <MUITablePagination
      component="div"
      count={parseInt(count)}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default TablePagination;
