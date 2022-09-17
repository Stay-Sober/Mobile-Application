import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonPage,
  IonButtons,
  IonBackButton,
  IonLoading
} from "@ionic/react";

const ResetPassword = () => {
  const [ email, setEmail ] = useState('');
  const [ showLoading , setShowLoading ] = useState(false);
  const [ text , setText ] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setShowLoading(true)

    await sendPasswordResetEmail(auth, email).then((a) => {
      alert("email sent");
      setShowLoading(false);
    })
    .catch((error) => {
      var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
      });
    }

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar color="light">
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/`} />
        </IonButtons>
        <IonTitle>Reset Password</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="form">
    <IonLoading isOpen={showLoading} message={text}  onDidDismiss={() => setShowLoading(false)}/>
      <form onSubmit={e => handleSubmit(e)} action="post">
        <IonList>
          <IonItem>
            <IonLabel position={'floating'}>Email</IonLabel>
            <IonInput type="email" value={email} onInput={e => setEmail(e.currentTarget.value)} />
          </IonItem>
          <IonButton expand="block" type="submit">Reset Password</IonButton>
        </IonList>
      </form>
      <div className="below-form">
        <Link to='/Login'>Back to login</Link>
      </div>
    </IonContent>
  </IonPage>
  );
}

export default ResetPassword;