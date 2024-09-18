import { Link } from "react-router-dom";
import Logo from "../../assets/images/LOGO-02 3.png";
import { Container } from "../Container/Container.styled";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <Link to="/">
          <img className="header__logo" src={Logo} alt="" />
        </Link>
      </Container>
    </div>
  );
};

export default Header;
