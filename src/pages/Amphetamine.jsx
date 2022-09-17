import { 
    IonCard,
    IonImg, 
    IonThumbnail, 
    IonItem, 
    IonLabel, 
    IonItemGroup, 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonButtons, 
    IonBackButton 
} from '@ionic/react';
import './articles.css';

const Amphetamine = () => {

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
                    <h1 className='add-titles'>AMPHETAMINE</h1>
                </IonItem>
                
                {/* DESCRIPTION */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>What is Amphetamine?</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Amphetamine is a colourless liquid with an acrid taste and a faint odour. The most commonly used preparation of the drug is amphetamine sulfate - marketed under the name Benzedrine - which is a white powder with a slightly bitter, numbing taste.<br/>
                    The use of amphetamines, whether legal or illegal, can lead to physiological and neurological changes from which the brain becomes reliant on substance use for the presence of amphetamines to function properly.<br/>
                    When a person has been using amphetamines for a long period of time or at high doses, they are likely to experience psychological and physiological effects and symptoms if they drastically reduce their dose or abruptly quit taking the drug. This is called amphetamine withdrawal syndrome, which can be difficult to get through without support.
                    </p>
                </IonItem>

                {/* EFFECTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Effects of Amphetamine</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Psychic effects of amphetamine include:
                    <ul>
                        <li>Wakefulness.</li>
                        <li>Mental alertness.</li>
                        <li>Increased initiative and confidence.</li>
                        <li>Euphoria.</li>
                        <li>Lessened sense of fatigue.</li>
                        <li>Talkativeness.</li>
                        <li>Increased ability to concentrate.</li>
                    </ul>
                    </p>
                </IonItem>

                {/* Withdrawals */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Withdrawal from Amphetamine</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Symptoms of amphetamine withdrawal can include:
                    <ul>
                        <li>Fatigue.</li>
                        <li>Insomnia or hypersomnia.</li>
                        <li>Psychomotor agitation or retardation.</li>
                        <li>Increased appetite.</li>
                        <li>Vivid.</li>
                        <li>Unpleasant dreams.</li>
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
                    <p>Houghton House <br/>
                        432 York Ave <br/>
                        Randburg 2194 <br/>
                        Johannesburg <br/>
                        South Africa <br/>
                        Phone (24 Hr.): 011 787 9142 <br/>
                        Emergency Mobile: 079 770 7532 </p>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Amphetamine;