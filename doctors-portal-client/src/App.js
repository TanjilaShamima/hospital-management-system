import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './Components/NotFound/NotFound';
import LoginForm from './Components/LoginForm/LoginForm';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Home from './Components/HomePage/Home/Home';
import Appointments from './Components/Apponitments/Appointments/Appointments';
import DashboardNav from './Components/AdminPortal/DashboardNav/DashboardNav';
import FindDoctorIndex from './Components/FindDoctorPage/FindDoctorIndex/FindDoctorIndex';
import Titlebar from './Components/Shared/Titlebar/Titlebar';
import CombainedLogin from './Components/Shared/CombinedLoginPage/CombainedLogin';
import PatientPortalIndex from './Components/PatientPortal/PatientPortalIndex/PatientPortalIndex';
import DoctorPortalIndex from './Components/DoctorPortal/DoctorPortalIndex/DoctorPortalIndex';
import DoctorRegistration from './Components/Shared/Registration/DoctorRegistration/DoctorRegistration';
import PatientRegistration from './Components/Shared/Registration/PatientRegistration/PatientRegistration';
import Footer from './Components/Shared/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';

function App() {
  return (
    <>
      <Router>
        <Titlebar></Titlebar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/about">
            <AboutUs></AboutUs>
          </Route>
          <Route path="/apponitments">
            <Appointments />
          </Route>
          <Route path="/findDoctor">
            <FindDoctorIndex />
          </Route>
          <PrivateRoute path="/adminportal">
            <DashboardNav />
          </PrivateRoute>
          <PrivateRoute path="/patientportal">
            <PatientPortalIndex />
          </PrivateRoute>
          <PrivateRoute path="/doctorportal">
            <DoctorPortalIndex />
          </PrivateRoute>
          <Route path="/doctorregistration">
            <DoctorRegistration />
          </Route>
          <Route path="/patientregistration">
            <PatientRegistration />
          </Route>
          <Route path="/superlogin">
            <CombainedLogin/>
          </Route>
          <Route path="/login">
            <LoginForm/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
