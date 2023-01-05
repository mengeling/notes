import "./styles/_index.css";
import { NoteBody, SideNav } from "./components";

const App = () => {
  return (
    <div className="app-wrapper">
      <SideNav />
      <NoteBody />
    </div>
  );
};

export default App;
