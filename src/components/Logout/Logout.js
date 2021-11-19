import { useHistory } from "react-router-dom";

function Logout() {
  let history = useHistory();

  function handleLogOut() {
    localStorage.removeItem("user");
    history.push("/");
  }

  return (
    <span type="button" onClick={handleLogOut}>
      Sign Out
    </span>
  )
}

export default Logout;