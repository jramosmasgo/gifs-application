import { Typography } from "@mui/material";
import { ContentGif, ContentGifTitle } from "../styles/Gifs/gifStyle";

function Gifs({ gif }) {
  return (
    <ContentGif>
      <img
        src={`${gif.url}?w=162&auto=format`}
        alt={gif.title}
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
      <ContentGifTitle>
        <Typography>{gif.title}</Typography>
      </ContentGifTitle>
    </ContentGif>
  );
}

export default Gifs;
