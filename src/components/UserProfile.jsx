import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
  const { isOnline, setIsOnline } = useContext(UserContext);
  return (
    <>
      <div>
        User Profile is
        <span> {isOnline ? "Online" : "Offline"}</span>
      </div>
      <button onClick={() => setIsOnline(!isOnline)}>
        click to change user status
      </button>
    </>
  );
}

export default UserProfile;
