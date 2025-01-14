/** Dependencies */
import { useEffect, useMemo } from "react";
import { Button, Card, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
/** Components */
import Table, { TablePagination } from "../../../components/Table";
import MovieTableToolBar from "./table-toolbar";

/** Hooks */
import usePagination from "../../../hooks/use-Pagination";

/** Store */
import { fetchMoviesAsync, setFilters } from "../../../store/slices/movieSlice";

const List = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    list: {
      data: movies,
      loading: moviesLoading,
      count: moviesCount,
      filters: movieFilters,
    },
  } = useSelector((state: any) => state.movie);

  const { rowsPerPage, handleChangePage, handleChangeRowsPerPage } =
    usePagination({
      page: movieFilters.page,
      setPage: (value) => dispatch(setFilters({ page: value })),
      defaultRowsPerPage: 10,
    });

  useEffect(() => {
    dispatch(fetchMoviesAsync(movieFilters));
  }, [dispatch, movieFilters, fetchMoviesAsync]);

  const tableColumns = useMemo(() => {
    return [
      {
        name: "IMDb ID",
        key: "imdbID",
      },
      {
        name: "Name",
        key: "Title",
      },
      {
        name: "Release Date",
        key: "Year",
      },
      {
        name: "Type",
        key: "Type",
      },
      {
        name: "Actions",
        key: "actions",
        render: (row: any) => (
          <Button
            onClick={() => navigate(`/${row.imdbID}`)}
            variant="contained"
          >
            Detail
          </Button>
        ),
      },
    ];
  }, []);

  return (
    <Container maxWidth="md">
      <Card>
        <MovieTableToolBar />
        <Table
          rowsPerPage={rowsPerPage}
          columns={tableColumns}
          rows={movies}
          loading={moviesLoading}
          empty={!moviesLoading && movies?.length == 0}
        />
        <TablePagination
          page={movieFilters.page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          count={moviesCount}
        />
      </Card>
    </Container>
  );
};

export default List;
