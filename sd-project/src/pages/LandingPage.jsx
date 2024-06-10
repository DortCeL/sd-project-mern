import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Topbar from "../components/Topbar/Topbar";

function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Topbar />
      <h1>Welcome to my fucking website</h1>
      <Button variant="dark " onClick={() => navigate("lol")}>
        Find Creators
      </Button>
      <Button variant="success" onClick={() => navigate("my-games")}>
        My Games List
      </Button>
    </>
  );
}

export default LandingPage;
