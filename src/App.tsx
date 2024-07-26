import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Learn from "./Learn";
import Lesson from "./Lesson";
import Nav from "./Nav";
import "./App.css";
import Home from "./Home";

function App() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const cert = queryParams.get("cert");

  const validCerts = ["AWS", "Azure", "GCP"];
  const isValidCert = validCerts.includes(cert || "");

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <Nav signOut={signOut} userName={user?.signInDetails?.loginId} />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/learn' element={isValidCert ? <Learn cert={cert} /> : <Navigate to='/' />} />
            <Route path='/lesson' element={<Lesson />} />
            {/* <Route path='/lesson' element={<Lesson userName={user?.signInDetails?.loginId} />} /> */}
          </Routes>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
