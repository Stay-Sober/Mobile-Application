import { 
    IonCard, 
    IonImg, 
    IonThumbnail, 
    IonItem, 
    IonLabel, 
    IonItemGroup, 
    IonContent, 
    IonPage, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonButtons, 
    IonBackButton  
} from '@ionic/react';
import './articles.css';

const Heroin = () => {

    return (
        <IonPage>
            <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={`/Home`} />
          </IonButtons>
          <IonTitle>Articles</IonTitle>
        </IonToolbar>
      </IonHeader>
            <IonContent color='lighterblue' fullscreen>
                <IonItem color='lighterblue'>
                    <h1 className='add-titles'>HEROIN</h1>
                </IonItem>
                
                {/* DESCRIPTION */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>What is Heroin?</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Heroin is a very addictive drug made from morphine, a psychoactive (mind-altering) substance taken from the resin of the seed pod of the opium poppy plant. 
Heroin’s color and look depend on how it is made and what else it may be mixed with. It can be white or brown powder, or a black, sticky substance called 
“black tar heroin.” <br/>
Heroin is part of a class of drugs called opioids. Other opioids include some prescription pain relievers, such as codeine, oxycodone, and hydrocodone.
Heroin is mixed with water and injected with a needle. It can also be sniffed, smoked, or snorted. People who use heroin sometimes combine it with other drugs, 
such as alcohol or cocaine (a “speedball”), which can be particularly dangerous and raise the risk of overdose.</p>
                </IonItem>

                {/* EFFECTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Effects of Heroin</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>When heroin enters the brain, it attaches to molecules on cells known as opioid receptors. These receptors are located in many areas of the brain and body, 
especially areas involved in the perception of pain and pleasure, as well as a part of the brain that regulates breathing.
                    <br/>Short-term effects of heroin include a rush of good feelings and clouded thinking. These effects can last for a few hours, 
and during this time people feel drowsy, and their heart rate and breathing slow down. When the drug wears off, 
people experience a depressed mood and often crave the drug to regain the good feelings.
                    </p>
                </IonItem>

                {/* Withdrawals */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Withdrawal from Heroin</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Heroin withdrawal will not be the same for everyone.The longer someone uses heroin, how it was abused, and how much was taken each time will all be factors in
how dependent the brain and body are to the substance. 
Therefore, the severity and duration of withdrawal will differ as well. Someone with a history of mental illness or prior opioid withdrawal may have a more intense
withdrawal experience. 
Symptoms of withdrawal from heroin can include:
                    <ul>
                        <li>Nausea.</li>
                        <li>Abdominal cramps.</li>
                        <li>Tearing.</li>
                        <li>Runny nose.</li>
                        <li>Sweats.</li>
                        <li>Chills.</li>
                        <li>Yawning a lot.</li>
                        <li>Muscle and bone aches.</li>
                        <li>Vomiting.</li>
                        <li>Diarrhea.</li>
                        <li>Agitation.</li>
                        <li>Restlessness.</li>
                        <li>Tremors.</li>
                        <li>Trouble concentrating.</li>
                        <li>Goose bumps.</li>
                    </ul>
                    </p>
                </IonItem>

                {/* CONTACTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Contact Information for Help</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>432 York Ave <br/>
                        Randburg 2194 <br/>
                        Johannesburg <br/>
                        Gauteng <br/>
                        South Africa <br/>
                        Phone: 011 787 9142 <br/>
                        Emergency Mobile: 079 770 7532 </p>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Heroin;