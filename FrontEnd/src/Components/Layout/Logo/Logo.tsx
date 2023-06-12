import { NavLink } from "react-router-dom";
import "./Logo.css";

function Header(): JSX.Element {
  return (
    <div className="Header">
      <NavLink to="/">
        <h1>&#123;N D V a c a t i o n &#125;</h1>
      </NavLink>
    </div>
  );
}

export default Header;
