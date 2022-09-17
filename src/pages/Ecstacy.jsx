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
    IonBackButton } from '@ionic/react';
import './articles.css';

const Ecstacy = () => {

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
                    <h1 className='add-titles'>ECSTACY</h1>
                </IonItem>
                
                {/* DESCRIPTION */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>What is Ectsacy?</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Ecstasy, also reffered to as "Molly," is a synthetic drug known mainly for its hallucinogenic and stimulant effects. It's known for imparting feelings of increased energy, pleasure, emotional warmth, and distorted sensory and time perception.<br/>
                    Similar to both stimulants and hallucinogens, it produces feelings of increased energy, pleasure, emotional warmth, and distorted sensory and time perception.<br/>
                    While ecstasy was initially used primarily in nightclubs and raves, its use has now spread to a wider range of populations.
                    </p>
                </IonItem>

                {/* EFFECTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Effects of Ecstacy</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Ecstacy affects the brain in the following ways:
                    <ul>
                        <li>Dopamine — this produces higher levels of energy/activity and acts to reinforce behaviors in the reward system.</li>
                        <li>Norepinephrine — this heightens heart rate and blood pressure, which are especially risky for those with heart and blood vessel problems.</li>
                        <li>Serotonin — this affects mood, appetite, sleep, as well as other functions. It also triggers hormones that affect sexual arousal and trust. The release of large amounts of serotonin likely causes the emotional closeness, elevated mood, and empathy felt by those who use ecstacy.</li>
                    </ul>
                    Taking ecstacy also has a number of adverse impacts including:
                    <ul>
                        <li>Disorganized thoughts.</li>
                        <li>Feelings of detachment.</li>
                        <li>Increased heart rate.</li>
                        <li>Nausea.</li>
                        <li>Sweating and hot flashes.</li>
                    </ul>
                    Other health effects include:
                    <ul>
                        <li>Anxiety.</li>
                        <li>Attention problems.</li>
                        <li>Confusion.</li>
                        <li>Decreased libido.</li>
                        <li>Depression.</li>
                        <li>Impulsiveness.</li>
                        <li>Insomnia.</li>
                        <li>Irritability.</li>
                        <li>Memory problems.</li>
                        <li>Reduced appetite.</li>
                    </ul>
                    Ecstacy overdose symptoms include:
                    <ul>
                        <li>Faintness.</li>
                        <li>Panic attacks or extreme anxiety.</li>
                        <li>High blood pressure.</li>
                        <li>Seizures.</li>
                    </ul>
                    Though majority of users take a second dose of ecstacy as the first dose's effects begin to fade, it's effects last about 3 to 6 hours.
                    </p>
                </IonItem>

                {/* Withdrawals */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Withdrawal from Crystal Meth</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Symptoms of ecstacy withdrawal can include:
                    <ul>
                        <li>Decreased interest in sex.</li>
                        <li>Hostility.</li>
                        <li>Mood swings.</li>
                        <li>Loss of appetite.</li>
                        <li>Paranoia.</li>
                        <li>Lack of motor control.</li>
                        <li>Mental confusion.</li>
                        <li>Panic attacks.</li>
                        <li>Depersonalization.</li>
                        <li>Psychosis.</li>
                        <li>Irritability.</li>
                        <li>Hallucinations and delusions.</li>
                    </ul>
                    Generally speaking, withdrawal symptoms may start within 12 hours or so after the last dose of ecstasy and thereafter peak after a few days. It can take time for the brain to stabilize itself and for levels of norepinephrine, dopamine, and serotonin to return to normal. This means that some of the withdrawal symptoms may persist for a few weeks, even months, after stopping use. The longer a person had used ecstasy, and the higher the dosage, the more intense and longer in duration the withdrawal symptoms will likely be.
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

export default Ecstacy;