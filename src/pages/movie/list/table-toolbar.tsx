/** Dependencies */
import { useCallback, useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

/** Hooks */
import { useDebounce } from "use-debounce";

/** Stores */
import { setFilters } from "../../../store/slices/movieSlice";
import { TYPES } from "../../../utils/select-options";

const MovieTableToolBar = () => {
  const {
    list: { filters },
  } = useSelector((state: any) => state.movie);

  const [name, setName] = useState(filters.name);
  const [debouncedName] = useDebounce(name, 1000);
  const [year, setYear] = useState(filters.year);
  const [debouncedYear] = useDebounce(year, 1000);

  const dispatch = useDispatch();
  const handleFilterName = useCallback(
    (event: any) => {
      setName(event.target.value);
    },
    [dispatch]
  );

  const handleFilterYear = useCallback(
    (event: any) => {
      setYear(event.target.value);
    },
    [dispatch]
  );

  const handleFilterType = useCallback(
    (event: any) => {
      dispatch(
        setFilters({
          type: event.target.value,
        })
      );
    },
    [dispatch, setFilters]
  );

  useEffect(() => {
    dispatch(
      setFilters({
        name: debouncedName,
        year: debouncedYear,
      })
    );
  }, [debouncedName, debouncedYear]);

  return (
    <Stack
      spacing={2}
      alignItems="center"
      direction={{
        xs: "column",
        md: "row",
      }}
      sx={{
        p: 2.5,
        pr: { xs: 2.5, md: 1 },
      }}
    >
      <TextField
        fullWidth
        value={name}
        onChange={handleFilterName}
        placeholder="Search By Name"
      />
      <TextField
        fullWidth
        value={year}
        type="number"
        onChange={handleFilterYear}
        placeholder="Search By Year"
      />
      <FormControl
        sx={{
          flexShrink: 0,
          width: { xs: 1, md: 200 },
        }}
      >
        <InputLabel>Search By Type</InputLabel>
        <Select
          value={filters.type}
          onChange={handleFilterType}
          label="Search By Type"
        >
          <MenuItem value="" sx={{ fontStyle: "italic" }}>
            Not Choosed
          </MenuItem>
          {(TYPES || []).map((item: any) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default MovieTableToolBar;
