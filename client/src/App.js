// import { GetNotes, NewNote } from "./components";
import { GetNotes } from "./components/GetNotes";
import { NewNote } from "./components/NewNote";

const App = () => {
  console.log(process.env);
  return (
    <div>
      <h1>Notes</h1>
      <NewNote />
      <GetNotes />
    </div>
  );
};

export default App;
