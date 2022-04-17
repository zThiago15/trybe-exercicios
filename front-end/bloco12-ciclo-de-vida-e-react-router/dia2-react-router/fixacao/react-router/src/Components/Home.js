import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import Contact from "./Contact";
import Profile from './Profile';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/contact">Contact</Link>
    </>
  )
}

export default Home;