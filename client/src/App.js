import "./styles/_index.css";
import { NewNote, SideNav } from "./components";

const App = () => {
  return (
    <div>
      <h1>Notes</h1>
      <SideNav />
      <NewNote />
    </div>
  );
};

export default App;
