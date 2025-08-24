import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
// import {auth , db } from "../firebase";
import {useHistory } from 'react-router-dom'
// import { createUserWithEmailAndPassword } from "firebase/auth";
import '../Form.css';
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
  IonLoading,
  IonSelect,
  IonSelectOption
} from '@ionic/react';
import {
  query,
  collection,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getDocs,
  where,
  doc,
  setDoc,
} from "firebase/firestore";

const SignUp = () => {
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ surname , setSurname ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ password1, setPassword1 ] = useState('');
  const [ password2, setPassword2 ] = useState('');
  const [ addictionType , setAddictionType ] = useState('');
  const [ showLoading, setShowLoading ] = useState(false);
  

  const history = useHistory();

  const handleSubmit = (e) => {
    setShowLoading(true);
    e.preventDefault();

    // validate password
    let password;
    if (password1 === password2) {
      password = password1
    } else { 
      alert("passwords do not match")
    }

    // write to database
    // createUserWithEmailAndPassword(auth , email , password)
    //   .then((res) => {
    //     const info = {
    //       email : email,
    //       name : name,
    //       surname : surname,
    //       username : username,
    //       addictionType : addictionType,
    //       userID : res.user.uid
    //     };
    //     db.doc(`Users/${res.user.uid}`).set(info).then((res) => {
    //         console.log("from firestore", res);
    //         setShowLoading(false);
    //         history.push("/Login")
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //         setShowLoading(true);
    //       });
    //     setShowLoading(false);
    //   })
    //   .catch((error) => {
    //     alert(error.message);
    //     setShowLoading(false);
    //   });
  }; 

  return (
  <IonPage>
    <IonHeader>
      <IonToolbar color="light">
        <IonButtons slot="start">
        </IonButtons>
        <IonTitle>Sign up</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="form">
      <IonLoading isOpen={showLoading} message="Creating account..."  onDidDismiss={() => setShowLoading(false)}/>
      <form  onSubmit={handleSubmit}  /*method="post" ref={formRef} action="" */>
        <IonList>
          <IonItem>
            <IonLabel position={'floating'}>Name</IonLabel>
            <IonInput name="name" type="text" required value={name} onInput={e => setName(e.currentTarget.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Surname</IonLabel>
            <IonInput name="name" type="text" required value={surname} onInput={e => setSurname(e.currentTarget.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Username</IonLabel>
            <IonInput name="username" type="text" required value={username} onInput={e => setUsername(e.currentTarget.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Email</IonLabel>
            <IonInput name="email" type="email" required value={email} onInput={e => setEmail(e.currentTarget.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Addiction Type</IonLabel>
           {/*  {<IonInput name="name" type="text" required value={addictionType} onInput={e => setAddictionType(e.currentTarget.value)} />} */}
            <IonSelect required value={addictionType} onInput={e => setAddictionType(e.currentTarget.value)} interface="popover">
              <IonSelectOption value="crystal meth">Crystal Meth</IonSelectOption>
              <IonSelectOption value="heroin">Heroin</IonSelectOption>
              <IonSelectOption value="cocaine">Cocaine</IonSelectOption>
              <IonSelectOption value="nicotine">Nicotine</IonSelectOption>
              <IonSelectOption value="alcohol">Alcohol</IonSelectOption>
              <IonSelectOption value="ecstacy">Ecstacy</IonSelectOption>
              <IonSelectOption value="amphetamine">Amphetamine</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Password 1</IonLabel>
            <IonInput name="password" type="password" required value={password1} onInput={e => setPassword1(e.currentTarget.value)} />
          </IonItem>
          <IonItem>
            <IonLabel position={'floating'}>Password 2</IonLabel>
            <IonInput name="name" type="password" required value={password2} onInput={e => setPassword2(e.currentTarget.value)} />
          </IonItem>
          <IonButton expand="block" type="submit" >Sign up</IonButton>
        </IonList>
      </form>
      <div className="below-form">
        <Link to='/Login'>Already have an account? sign in</Link>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default SignUp;
