import './App.css';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <button onClick={async () => {
        const res = await axios.post("http://localhost:8080/data/user", null, {headers: {"x-auth-token": ""}});
        console.log(res);
      }}>USER</button>
      <button onClick={async () => {
        const res = await axios.post("http://localhost:8080/data/admin", null, {headers: {"x-auth-token": ""}});
        console.log(res);
      }}>ADMIN</button>
      <button onClick={() => {
        const param = new URLSearchParams();
        param.append("username", "houei");
        param.append("password", "pass");
        axios.post("http://localhost:8080/login", param, undefined).then((res) => {
          console.log(res.headers);
        });
      }}>LOGIN</button>
    </div>
  );
}

export default App;
