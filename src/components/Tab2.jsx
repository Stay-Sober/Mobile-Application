import { useState } from "react"
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
  IonItem
} from '@ionic/react';
/* import uuid from "react-uuid"; */
import Top from "../pages/Top";
import Bottom from "../pages/Bottom";

const Tab2 = () => {
  const[notes, setNotes] = useState([]);
  const[activeNote, setActiveNote] = useState(false);
  let x = Math.random()

  const onAddNote = () => {
    const newNote ={
      id: x,
      title: "Untitled",
      body: "",
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };
  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((notes) => notes.id !== idToDelete))
  };
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if(note.id === activeNote){
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotesArray);
  };
  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/Home`} />
          </IonButtons>
          <IonTitle>Journal</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <div className="App">
      <Bottom activeNote = {getActiveNote()} onUpdateNote={onUpdateNote}/>
      <Top
      notes={notes} 
      onAddNote={onAddNote} 
      onDeleteNote={onDeleteNote}
      activeNote={activeNote}
      setActiveNote={setActiveNote}
      />
    </div>
      </IonContent > 
    </IonPage>
  );
};

export default Tab2;