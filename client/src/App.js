import "./styles/_index.css";
import { SideNav } from "./components";
import { NoteBody } from "./containers";

const App = () => {
  return (
    <div className="app-wrapper">
      <SideNav />
      <NoteBody />
    </div>
  );
};

export default App;
