import ListGifs from "../../components/ListGifs";
import useGifs from "../../hooks/useGifs";

function Home() {
  const [gifs] = useGifs();

  return (
    <div>
      <ListGifs gifs={gifs} />
    </div>
  );
}

export default Home;
