import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Learn from "../pages/Learn";
import Lesson from "../pages/Lesson";
import Home from "../pages/Home";

function AppRoutes() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cert = queryParams.get("cert");

  const validCerts = ["aws", "azure", "gcp"];
  const isValidCert = validCerts.includes(cert || "");

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/learn' element={isValidCert ? <Learn /> : <Navigate to='/' />} />
      <Route path='/lesson' element={<Lesson />} />
      {/* <Route path='/lesson' element={<Lesson userName={user?.signInDetails?.loginId} />} /> */}
    </Routes>
  );
}

export default AppRoutes;
