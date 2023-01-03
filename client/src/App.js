import { GetNotes, NewNote } from "./components";

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
