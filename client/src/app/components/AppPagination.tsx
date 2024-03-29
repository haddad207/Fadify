import { Box, Pagination, Typography } from "@mui/material";
import { MetaData } from "../models/pagination";

interface Props {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

export default function AppPagination({ metaData, onPageChange }: Props) {
  const { currentPage, pageSize, totalCount, totalPages } = metaData;
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography>
        Displaying {(currentPage - 1) * pageSize + 1}-
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{" "}
        of {totalCount} items
      </Typography>
      <Pagination
        shape="rounded"
        variant="outlined"
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
      />
    </Box>
  );
}
