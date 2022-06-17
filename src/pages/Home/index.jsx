import { InputAdornment, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ImageSearch } from "@mui/icons-material";
import ListGifs from "../../components/ListGifs";
import useGifs from "../../hooks/useGifs";
import { CoverImage } from "../../styles/home/homeStyles";
import { InputSearch } from "../../styles/shared/inputs";
import useSearchGifs from "../../hooks/useSearchGifs";

function Home() {
  const [gifs] = useGifs();
  const { value, onChange, handleSubmit } = useSearchGifs("");

  return (
    <div>
      <CoverImage>
        <Box width="60%" textAlign="left">
          <Typography
            color="primary"
            fontWeight={500}
            marginBottom={1}
            variant="h3"
          >
            Gifs App
          </Typography>
          <Typography marginBottom={2} variant="subtitle2">
            Aplicacion realizada para buscar tus gifs favoritos y compartirlos
            con tus amigos.
          </Typography>
          <form onSubmit={handleSubmit}>
            <InputSearch
              type="text"
              value={value}
              onChange={onChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <ImageSearch />
                  </InputAdornment>
                ),
              }}
              placeholder="Search Gifs"
            />
          </form>
        </Box>
      </CoverImage>
      <ListGifs gifs={gifs} />
    </div>
  );
}

export default Home;
