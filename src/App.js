import { Route } from "react-router-dom";
import Gramsevak from "./routes/GramSevak/Gramsevak";
import User from "./routes/User/User";
import Admin from "./routes/Admin/Admin";
import PageOne from "./components/utilities/PageOne";

import { AuthProvider } from "./context/AuthContext";
import Motion from "./components/Motion/Motion";

function App() {
  return (
    <>
      <AuthProvider>
        <Route exact path="/">
          <PageOne />
        </Route>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/gramsevak">
          <Gramsevak />
        </Route>

        <Route path="/user">
          <User />
        </Route>
      </AuthProvider>
    </>
  );
}

export default App;
