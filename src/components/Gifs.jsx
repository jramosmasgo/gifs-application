import { Label } from "@mui/icons-material";

function Gifs({ gif }) {
  return (
    <div>
      <img
        src={`${gif.url}?w=162&auto=format`}
        alt={gif.title}
        loading="lazy"
        style={{
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: "block",
          width: "100%",
        }}
      />
    </div>
  );
}

export default Gifs;
