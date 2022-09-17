import { IonCard, IonInput, IonTextarea } from "@ionic/react";

function Buttom({ activeNote, onUpdateNote }){
    const onEditField= (key, value) => {
        onUpdateNote({
            ...activeNote,
            [key] : value,
            lastModified: Date.now(),
        })
    };
    if (!activeNote) return <div>Select Note</div>;
     
    return <IonCard>
        <div>
            <div>
                <IonInput type="text" id="title" value={activeNote.title} onIonChange={(e) => onEditField("title", e.target.value)} autoFocus placeholder="Title?"/>
                <IonTextarea id="body" placeholder="Add note" value={activeNote.body} onIonChange={(e) => onEditField("body", e.target.value)} />
            </div>
        </div>
    </IonCard>
}

export default Buttom;