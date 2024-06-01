import logo from '../../images/dm_white_logo.png';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <div className="Nav">
      <div>
        <img src={logo} alt="dm logo" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Topics">Topics</Link>
        </li>
      </ul>
    </div>
  );
}
