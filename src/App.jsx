import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<StartGame />}/>
          <Route path="play" element={<GamePlay />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
