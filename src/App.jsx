import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import MaintaincePage from "./pages/maintaince/MaintaincePage";
import Booking from "./pages/book/Booking";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<Booking />} />
        {/* Setup others pages in maintaince */}
        <Route path="*" element={<MaintaincePage />} />
      </Routes>
    </Layout>
  );
}

export default App;
