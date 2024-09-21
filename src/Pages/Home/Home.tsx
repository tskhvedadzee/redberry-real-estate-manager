import Navbar from "../../components/Navbar/Navbar";
import ListingCard from "../../components/ListingCard/ListingCard";
import { Container } from "../../components/Container/Container.styled";

export const Home = () => {
  return (
    <Container>
      <Navbar />
      <ListingCard />
    </Container>
  );
};
