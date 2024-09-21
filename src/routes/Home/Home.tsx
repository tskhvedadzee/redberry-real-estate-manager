import Navbar from "../../components/Navbar/Navbar";
import ListingCard from "../../components/ListingCard/ListingCard";
import { Container } from "../../components/Container/Container.styled";

const Home = () => {
  return (
    <Container>
      <Navbar />
      <ListingCard />
    </Container>
  );
};

export default Home;
