import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import NavigationBar from "./components/NavigationBar";
import "./assets/main.css";
import "./assets/experimental.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <NavigationBar signOut={signOut} userName={user?.signInDetails?.loginId} />
          <AppRoutes />
        </main>
      )}
    </Authenticator>
  );
}

export default App;
