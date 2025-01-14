/** Dependencies */
import { Box, TableCell, TableRow } from "@mui/material";

const TableNoData = () => {
  return (
    <TableRow>
      <TableCell colSpan={12}>
        <Box>Not found any data for filters.</Box>
      </TableCell>
    </TableRow>
  );
};

export default TableNoData;
