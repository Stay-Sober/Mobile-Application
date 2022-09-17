import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonListHeader,
    IonLabel,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonButtons,
    IonBackButton,
    IonCard, 
    IonImg, 
    IonThumbnail, 
    IonItem, 
    IonMenu
  } from '@ionic/react';
  import { 
    journal,
    chatbubble,
    person
  } from 'ionicons/icons';

function Top({ notes, onAddNote, onDeleteNote, activeNote, setActiveNote }){
    return <div>
        <IonCard>
        <div>
            
            <IonButton onClick={onAddNote}>Add</IonButton>
        </div>
            <div>
                {notes.map((note) => (
                    <div className={`Notes ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>
                    <div>
                    <IonLabel>
                    <h1>{note.title}</h1>
                    </IonLabel>
                   
      </div>
            <p>{note.body && note.body.substr(0,100) + "..."}</p>
            <small>Last Modified: {new Date(note.lastModified).toLocaleDateString("en-GB",{
                hour: "2-digit",
                minute: "2-digit",
            })}</small> 
            <div>
            <IonButton onClick={() => onDeleteNote(note.id)}>Delete</IonButton>
            </div>
      </div>
                ))}
                
    
      </div>
      </IonCard>
</div>
}

export default Top;