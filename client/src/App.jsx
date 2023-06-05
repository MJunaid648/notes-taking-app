import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NoteDetail from "./pages/NoteDetail";
import { AppContextProvider } from "./context/AppContext";
import EditPage from "./pages/EditPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <div className=" flex flex-col gap-6 font-sans p-4">
      <Router>
        <AppContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <HomePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/home/details"
              element={
                <PrivateRoute>
                  <NoteDetail />
                </PrivateRoute>
              }
            />
            <Route
              path="/home/edit"
              element={
                <PrivateRoute>
                  <EditPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </AppContextProvider>
      </Router>
    </div>
  );
}

export default App;
