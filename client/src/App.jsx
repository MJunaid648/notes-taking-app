import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NoteDetail from "./pages/NoteDetail";
import { AppContextProvider } from "./context/AppContext";

import EditPage from "./pages/EditPage";
function App() {
  return (
    <div className=" flex flex-col gap-6 font-sans p-4">
      <Router>
        <AppContextProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div
                  className="m-auto mt-[15%] border-2 p-8 rounded-lg 
                text-center text-[5dvw]  text-white font-bold
                hover:-translate-y-2 hover:cursor-pointer hover:transition-all  hover:shadow-2xl"
                >
                  <Link to="home/"> Go to Home Page</Link>
                </div>
              }
            />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/details" element={<NoteDetail />} />
            <Route path="/home/edit" element={<EditPage />} />
          </Routes>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
