import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { auth } from "../firebase";
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import './Form.css';
import {
  IonBackButton, 
  IonButtons, 
  IonButton, 
  IonHeader,
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonPage,
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonLoading
} from '@ionic/react';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ showLoading, setShowLoading ] = useState(false);
  const [ loggedIn , setLoggedIn ] = useState(false)

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setShowLoading(false)
        setLoggedIn(true)
        
        const auth = getAuth();
        onAuthStateChanged(auth, (res) => {
          if (res) {
            const uid = res.uid;
            console.log(uid)
          }
        })
        history.push("/home")
      })
      .catch((error) => {
        alert(error);
        setShowLoading(false)
      })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonButtons slot="start">
           {/*  <IonBackButton defaultHref={`/`} /> */}
          </IonButtons>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="form">
        <IonLoading isOpen={showLoading} message="Logging in..."  onDidDismiss={() => setShowLoading(false)} />
        <form onSubmit={handleSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position={'floating'}>Email</IonLabel>
              <IonInput required type="email" value={email}  onInput={e => setEmail(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position={'floating'}>Password</IonLabel>
              <IonInput required type="password" value={password} onInput={e => setPassword(e.currentTarget.value)} />
            </IonItem>
            <IonButton expand="block" type="submit">Log in</IonButton>
          </IonList>
        </form>
        <div className="below-form">
          <Link to='/SignUp'>Don't have an account? sign up instead</Link>
          <Link to='/ResetPassword'>Forgot Password?</Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
