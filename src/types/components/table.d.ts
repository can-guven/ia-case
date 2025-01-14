import { ReactNode } from "react";

interface TableColumn {
  name: string;
  key: string;
  render?: (row: any) => any;
}

export interface TableProps {
  columns: TableColumn[];
  rows: any[];
  style?: any;
  loading: boolean;
  rowsPerPage: number;
  empty: boolean;
}

export interface TablePaginationProps {
  count: string;
  page: number;
  rowsPerPage: number;
  handleChangePage: (_event: any, newPage: number) => void;
  handleChangeRowsPerPage: (event: any) => void;
}
