import { useState } from "react";
import "./App.css";
import UserProfile from "./components/UserProfile";

function App() {

  const [isOnline, setIsOnline] = useState(false);

  return <UserProfile />;
}

export default App;
