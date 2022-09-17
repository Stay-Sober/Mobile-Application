import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

// pages
import Home from './pages/Home';
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import SignUp from "./pages/SignUp";
import Tab2 from "./components/Tab2";
import Tab3 from "./components/Tab3"
import Meth from './pages/Meth';
import Heroin from './pages/Heroin';
import Cocaine from './pages/Cocaine';
import Nicotine from './pages/Nicotine';
import Alcohol from './pages/Alcohol';
import Ecstacy from './pages/Ecstacy';
import Amphetamine from './pages/Amphetamine';
import LandingPage from "./pages/LandingPage"
import Top from "./pages/Top";
import Bottom from "./pages/Bottom";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/LandingPage">
          <LandingPage />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/ResetPassword">
          <ResetPassword />
        </Route>
        <Route exact path="/SignUp">
          <SignUp />
        </Route>
        <Route exact path="/tab2">
          <Tab2 />
        </Route>
        <Route exact path="/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/Meth">
          <Meth />
        </Route>
        <Route exact path="/Heroin">
          <Heroin />
        </Route>
        <Route exact path="/Cocaine">
          <Cocaine />
        </Route>
        <Route exact path="/Nicotine">
          <Nicotine />
        </Route>
        <Route exact path="/Alcohol">
          <Alcohol />
        </Route>
        <Route exact path="/Ecstacy">
          <Ecstacy />
        </Route>
        <Route exact path="/Amphetamine">
          <Amphetamine />
        </Route>
        <Route exact path="/Top">
          <Top />
        </Route>
        <Route exact path="/Bottom">
          <Bottom />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
