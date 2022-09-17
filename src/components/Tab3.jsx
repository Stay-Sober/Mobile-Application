import React, { useState, useRef } from 'react';
import { doc, updateDoc , getDoc } from "firebase/firestore";
import {db } from "../firebase"
import { getAuth } from "firebase/auth";
import {
  query,
  collection,
  orderBy,
  serverTimestamp,
  onSnapshot,
  getDocs,
  where,
  setDoc,
} from "firebase/firestore";
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonButtons, 
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonItem,
  IonGrid, 
  IonRow, 
  IonCol, 
  IonImg, 
  IonActionSheet,
  IonInput,
  IonButton,
  IonItemDivider,
  IonList,
  IonListHeader,
  IonLoading
} from '@ionic/react';
import './Tab3.css';

const Tab3 = () => {
  const [upImg, setUpImg] = useState('');
  let num = 0;
  const [counter, setCounter] = useState(num);
  const [text, setText] = useState();
  const [number, setNumber] = useState();
  const [active, setActive] = useState(true)
  const [name , setName ] = useState("");
  const [surname, setSurname ] = useState("");
  const [username , setUsername ] = useState("");
  const [photoURL , setPhotoURL ] = useState("")
  const [addictionType , setAddictionType ] = useState("");
  const [showLoading , setShowLoading] = useState(false)
  let email;
  let id;
  const auth = getAuth();
  const user = auth.currentUser;

  if (user !== null) {
    
    email = user.email;
    id = user.uid;
    console.log(id);
  }

  const handleChange = e => setUpImg(URL.createObjectURL(e.target.files[0]))

  const handleSubmit = e => {
    setShowLoading(true);
    e.preventDefault();

    const info = {
      name: name,
      surname: surname,
      username: username,
      addictionType: addictionType
    };
    db.doc(`Users/${id}`)
      .set(info)
      .then((res) => {
        setShowLoading(false)
        setActive(false)
      })
      .catch((error) => {
        alert(error);
        setShowLoading(false)
      })
  };

  /* const UserInfoRef = doc(db , "users" , `${id}`)
  const userDocSnap = await getDoc(UserInfoRef);

  if(userDocSnap.exists()) {

  } */

  const fileInput = useRef(null);

  return(
    <IonPage>
      { active ? (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref={`/Home`} />
            </IonButtons>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonLoading isOpen={showLoading} message="please wait..."  onDidDismiss={() => setShowLoading(false)}/>
          <IonCard>
            <div
              style={{
                height:"200px"
              }}
            >
              <IonButton
                  color="primary"
                  expand="block"
                  onClick={() => {
                    fileInput?.current?.click();
                    setCounter(+1);
                  }}>
                  Upload Profile Picture
                </IonButton>
                <IonCardContent>
                  <>
                    <input
                      ref={fileInput}
                      hidden
                      type="file"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </>
                  <IonRow>
                    <IonCol>
                      <IonItem lines='none'>
                        <IonCard>
                          <IonCardContent>
                            <img src={upImg} alt="image" />
                          </IonCardContent>
                        </IonCard>
                      </IonItem>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
            </div>
          </IonCard> 

          <form onSubmit={handleSubmit}>
            <IonItemDivider>Personal Information </IonItemDivider>
            <IonList>
              <IonItem>
              <IonLabel position={'floating'}>Name</IonLabel>
              <IonInput name="name" type="text" value={name} onInput={e => setName(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position={'floating'}>Surname</IonLabel>
              <IonInput name="name" type="text" value={surname} onInput={e => setSurname(e.currentTarget.value)} />
            </IonItem>
            <IonItem>
              <IonLabel position={'floating'}>Username</IonLabel>
              <IonInput name="username" type="text" value={username} onInput={e => setUsername(e.currentTarget.value)} />
            </IonItem>
              <IonItemDivider>addiction type </IonItemDivider>
              <IonItem>
              <IonLabel position={'floating'}>Addiction type</IonLabel>
              <IonInput name="name" type="text" value={addictionType} onInput={e => setAddictionType(e.currentTarget.value)} />
              </IonItem>
            </IonList>
            <IonButton type="submit" expand="block" >Save</IonButton>
          </form>
        </IonContent > 
      </>
      ) : (
      <>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref={`/Home`} />
            </IonButtons>
            <IonTitle>Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
          <div style={{
            height:"130px"
          }}>
            <IonCardContent>
              <>
                <input
                  ref={fileInput}
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                />
              </>
              <IonRow>
                <IonCol>
                  <IonItem lines='none'>
                    <IonCard>
                      <IonCardContent>
                        <img src={upImg} alt="image" />
                      </IonCardContent>
                    </IonCard>
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </div>
        </IonCard>
          <IonList>
            <IonListHeader><h2 style={{textAlign:"center"}}>Personal Information</h2></IonListHeader>
            <IonItemDivider>
              <IonLabel>Full Name</IonLabel>
            </IonItemDivider>
            <IonItem lines="none">
              <IonLabel>{name + " " + surname}</IonLabel>
            </IonItem>
            <IonItemDivider>
              <IonLabel>User Name</IonLabel>
            </IonItemDivider>
            <IonItem lines="none">
              <IonLabel>{username}</IonLabel>
            </IonItem>
            <IonItemDivider>
              <IonLabel>Email</IonLabel>
            </IonItemDivider>
            <IonItem lines="none">
              <IonLabel>{email}</IonLabel>
            </IonItem>
            <IonItemDivider>
              <IonLabel>Addiction type</IonLabel>
            </IonItemDivider>
            <IonItem lines="none">
              <IonLabel>{addictionType}</IonLabel>
            </IonItem>
          </IonList>
          <IonButton expand="block" onClick={e => setActive(true)}>Edit</IonButton>
        </IonContent > 
      </>
      )}
  </IonPage>
  )
};
   
export default Tab3;
