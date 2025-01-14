/** Dependencies */
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

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
