/** Dependencies */
import { Skeleton, Stack, TableCell, TableRow } from "@mui/material";

const TableSkeleton = () => {
  return (
    <TableRow>
      <TableCell colSpan={12}>
        <Stack spacing={3} direction="row" alignItems="center">
          <Skeleton sx={{ width: 120, height: 12 }} />
          <Skeleton sx={{ width: 120, height: 12 }} />
          <Skeleton sx={{ width: 120, height: 12 }} />
          <Skeleton sx={{ width: 120, height: 12 }} />
          <Skeleton sx={{ width: 120, height: 12 }} />
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default TableSkeleton;
