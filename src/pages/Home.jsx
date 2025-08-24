import React from "react";
import { Redirect, Route } from "react-router-dom";
import {IonPage, IonContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel} from "@ionic/react";
import { journal, chatbubble, person } from "ionicons/icons";
import Articles from "./Articles";
import HelpLine from "./Helpline";
import Events from "./Events";
import Profile from "./Profile";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/articles" component={Articles} />
            <Route exact path="/helpline" component={HelpLine} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route exact path="/" render={() => <Redirect to="/home" />} /> */}
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="articles" href="/articles">
              <IonIcon icon={journal} />
              <IonLabel>Articles</IonLabel>
            </IonTabButton>
            <IonTabButton tab="helpline" href="/helpline">
              <IonIcon icon={chatbubble} />
              <IonLabel>Helpline</IonLabel>
            </IonTabButton>
            <IonTabButton tab="events" href="/events">
              <IonIcon icon={journal} />
              <IonLabel>Events</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonPage>
  );
};

export default Home;
