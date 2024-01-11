import { useAuth0 } from "@auth0/auth0-react";
import logo from './logo.svg';
import './App.css';

function App() {
  const { user , loginWithRedirect } = useAuth0();
  console.log("Current Uset", user)
  return (
    <div className="App">
      <div className="heading">Welcome to Proptimize Login Page</div>

      <div>
          <button className="button-el" onClick={e => loginWithRedirect()}>Login</button>
      </div>
    </div>
  );
}

export default App;
