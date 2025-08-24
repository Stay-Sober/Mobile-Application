import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import SignUp from "./pages/Auth/SignUp";
import Articles from './pages/Articles';
import HelpLine from './pages/Helpline';
import Events from './pages/Events';
import Profile from './pages/Profile';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/articles">
          <Articles />
        </Route>
        <Route exact path="/helpline">
          <HelpLine />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/reset">
          <ResetPassword />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
    </IonReactRouter>
  </IonApp>
);

export default App;
