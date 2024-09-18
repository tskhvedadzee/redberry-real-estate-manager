import { Container } from "../../components/Container/Container.styled";
import ListingCard from "../../components/ListingCard/ListingCard";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <ListingCard />
    </Container>
  );
};

export default Home;
