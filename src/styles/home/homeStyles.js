import { styled } from "@mui/system";
import coverImage from "../../assets/images/cover-image01.jpeg";

export const CoverImage = styled("div")({
  color: "white",
  height: "65vh",
  backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.5) 0%, rgba(2,0,36,0.5) 100%), url(${coverImage}) `,
  textAlign: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "scroll",
  marginBottom: "1rem",
  linearGradient: "",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
