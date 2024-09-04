import { Route, Routes } from "react-router-dom";
import Lesson from "../pages/Lesson";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/lesson' element={<Lesson />} />
      {/* <Route path='/lesson' element={<Lesson userName={user?.signInDetails?.loginId} />} /> */}
    </Routes>
  );
}

export default AppRoutes;
