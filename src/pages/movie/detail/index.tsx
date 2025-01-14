import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieByIdAsync } from "../../../store/slices/movieSlice";

const detailMap: any = {
  Title: "Title",
  Runtime: "Duration",
  Genre: "Genre",
  Director: "Director",
  Actors: "Cast",
  imdbRating: "IMDb Rating",
};

const Detail = () => {
  const params = useParams();
  const { IMDbId } = params;
  const dispatch = useDispatch();
  const {
    detail: { data, error, loading },
  } = useSelector((state: any) => state.movie);

  useEffect(() => {
    dispatch(fetchMovieByIdAsync(IMDbId));
  }, [dispatch, fetchMovieByIdAsync, IMDbId]);

  if (error)
    return (
      <Container>
        <Typography>{error}</Typography>
      </Container>
    );

  if (!data || loading) {
    return (
      <Container>
        <Typography>Movie Loading...</Typography>
      </Container>
    );
  }

  const renderDetails = Object.keys(detailMap).map((detailMapKey: any) => (
    <Box
      sx={{
        display: "flex",
        gap: 2,
      }}
      key={detailMapKey}
    >
      <Box
        sx={{
          minWidth: 100,
        }}
      >
        <Typography fontWeight="bold">{detailMap[detailMapKey]}</Typography>
      </Box>
      <Box>{data[detailMapKey]}</Box>
    </Box>
  ));

  return (
    <Container>
      <Card>
        <CardHeader title={data.Title} />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              gap: 2,
            }}
          >
            <Box>
              <img src={data.Poster} alt={data.Title} />
            </Box>
            <Box>{renderDetails}</Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Detail;
