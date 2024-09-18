import Logo from "../../assets/images/LOGO-02 3.png";
import { Container } from "../Container/Container";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Container>
        <img className="header__logo" src={Logo} alt="" />
      </Container>
    </div>
  );
};

export default Header;
