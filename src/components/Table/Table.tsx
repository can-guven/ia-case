/** Dependencies */
import { FC } from "react";
import MUITable from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

/** Types */
import { TableProps } from "../../types/components/table";

/** Components */
import TableSkeleton from "./TableSkeleton";
import TableNoData from "./TableNoData";

const Table: FC<TableProps> = ({
  columns,
  rows,
  style,
  loading,
  rowsPerPage,
  empty,
}) => {
  return (
    <TableContainer>
      <MUITable size="medium" sx={{ minWidth: 475, width: "100%", ...style }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.key}>{column.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading
            ? [...Array(rowsPerPage)].map((_i, index) => (
                <TableSkeleton key={index} />
              ))
            : rows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) =>
                    column.render ? (
                      <TableCell key={`${column.key}-${index}`}>
                        {column?.render(row)}
                      </TableCell>
                    ) : (
                      <TableCell key={`${column.key}-${index}`}>
                        {row[column.key]}
                      </TableCell>
                    )
                  )}
                </TableRow>
              ))}
          {empty && <TableNoData />}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
