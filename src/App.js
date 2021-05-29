import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/pages/common/SignIn";
import SignUp from "./components/pages/common/SignUp";
import StudentProfile from "./components/pages/student/StudentProfile";
import CompanyProfile from "./components/pages/company/CompanyProfile";
import About from "./components/pages/common/About";
import NotFound from "./components/pages/common/NotFound";
// import CompanyHome from "./components/pages/company/CompanyHome";
// import StudentHome from "./components/pages/student/StudentHome";
import Home from "./components/pages/common/Home";
import Logout from "./components/pages/common/Logout";
import StudentCreate from "./components/pages/student/StudentCreate";
import StudentEdit from "./components/pages/student/StudentEdit";
import CompanyCreate from "./components/pages/company/CompanyCreate";
import CompanyEdit from "./components/pages/company/CompanyEdit";
import AdminProfile from "./components/pages/campus-admin/AdminProfile";

function App() {
  const [loginUser, setLoginUser] = useState([]);

  // RUN ONCE when the app start
  useEffect(() => {
    getLocal();
  }, []);

  const getLocal = () => {
    if (localStorage.getItem("loginUser") === null) {
      localStorage.setItem("loginUser", JSON.stringify([]));
    } else {
      let result = JSON.parse(localStorage.getItem("loginUser"));
      setLoginUser(result);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar loginUser={loginUser} />
        <Switch>
          {/* Student */}
          <Route
            exact
            path="/student-profile"
            render={(props) => <StudentProfile loginUser={loginUser} />}
          />
          <Route exact path="/student-create" component={StudentCreate} />
          <Route
            exact
            path="/student-profile/edit/:id"
            component={StudentEdit}
          />

          {/* Company */}
          <Route exact path="/company-create" component={CompanyCreate} />
          <Route
            exact
            path="/company-profile"
            render={(props) => <CompanyProfile loginUser={loginUser} />}
          />
          <Route
            exact
            path="/company/view/:id"
            render={(props) => <CompanyProfile loginUser={loginUser} />}
          />
          <Route
            exact
            path="/company-profile/edit/:id"
            component={CompanyEdit}
          />

          {/* Campus Admin */}
          <Route
            exact
            path="/admin-profile"
            render={(props) => <AdminProfile loginUser={loginUser} />}
          />

          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/about" component={About} />
          <Route
            exact
            path="/"
            render={(props) => <Home loginUser={loginUser} />}
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
