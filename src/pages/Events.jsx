import React, { useState, useRef } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButtons, IonBackButton} from '@ionic/react';
import './Tab3.css';

const Events = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/home`} />
          </IonButtons>
          <IonTitle>Events</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

      </IonContent > 
    </IonPage>
  );
};
   
export default Events;