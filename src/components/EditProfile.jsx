import React, { useState, useRef } from 'react';
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
  IonList
} from '@ionic/react';
import './Tab3.css';

const EditProfile = () => {
  const [ image , setImage ] = useState(null)
  const [ name, setName ] = useState('');
  const [ surname , setSurname ] = useState('');
  const [ username, setUsername ] = useState('');
  const [ addictionType , setAddictionType ] = useState('');
  const [ showLoading, setShowLoading ] = useState(false);
  const [upImg, setUpImg] = useState('');
  let num = 0;
  const [counter, setCounter] = useState(num);
  const [text, setText] = useState();
  const [number, setNumber] = useState();

  const handleChange = (e) =>{
    setUpImg(URL.createObjectURL(e.target.files[0]))
  }
  const fileInput = useRef(null);

  return (
    <IonPage>
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
          <IonList>
          <IonItemDivider>Name</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter your name" /* onIonChange={e => setText(e.detail.value!)} */></IonInput>
          </IonItem>

          <IonItemDivider>Surname</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Enter your surname" /* onIonChange={e => setText(e.detail.value!)} */ clearInput></IonInput>
          </IonItem>

          <IonItemDivider>User Name</IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="Whats your user name?" /* onIonChange={e => setText(e.detail.value!)} */></IonInput>
          </IonItem>

          <IonItemDivider>addiction type </IonItemDivider>
          <IonItem>
            <IonInput value={text} placeholder="state what you addicted to?" /* onIonChange={e => setText(e.detail.value!)} */></IonInput>
          </IonItem>
		  
		 <ionbutton>
         <IonButton color="purple">Edit Info</IonButton>
		 <IonButton expand="block">Block Button</IonButton>
		 <IonButton expand="block" fill="outline">Outline + Block</IonButton>
		 </ionbutton>
        </IonList>
        </IonCard>
      </IonContent > 
    </IonPage>
  );
};
   
export default EditProfile;