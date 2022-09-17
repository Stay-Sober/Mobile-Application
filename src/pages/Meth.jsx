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
import './Home';

const Meth = () => {

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
                    <h1 className='add-titles'>CRYSTAL METH</h1>
                </IonItem>
                
                {/* DESCRIPTION */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>What is Crystal Meth?</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Crystal meth is short for crystal methamphetamine. It is just one form of the drug methamphetamine.
                    Methamphetamine is a white crystalline drug that people take by snorting it (inhaling through the nose), smoking it or injecting it with a needle. 
                    Some even take it orally, but all develop a strong desire to continue using it because the drug creates a false sense of happiness and well-being—a rush 
                    (strong feeling) of confidence, hyperactiveness and energy. One also experiences decreased appetite. <br/>
                    These drug effects generally last from six to eight hours, but can last up to twenty-four hours.
                    The first experience might involve some pleasure, but from the start, methamphetamine begins to destroy the user’s life.</p>
                </IonItem>

                {/* EFFECTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Effects of Crystal Meth</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>People that use the drug are looking for the immediate and long-lasting high for which the drug has gained notoriety. 
                    When the substance is smoked, the vapor moves quickly from the lungs to the bloodstream—where it then travels rapidly to the brain. 
                    <br/>Since the drug acts as a stimulant throughout the brain and body, there is an almost instant euphoria, 
                    followed by an increase in energy and alertness—effects that can last for up to 12 hours. <br/>
                    <br/>Other desired effects of crystal meth include:
                    <ul>
                        <li>An intense, initial “rush” that may persist for 30 minutes.</li>
                        <li>Higher motivation to accomplish goals.</li>
                        <li>Confidence/feelings of improved intellect and ability to solve problems.</li>
                    </ul>
                    Unsurprisingly, the desirable effects quickly give way to the undesirable effects of the substance. 
                    For example, even short-term use can elicit erratic and even violent behavior when taken in large doses.<br/>
                    <br/>Side effects of crystal meth include:
                    <ul>
                        <li>Loss of appetite.</li>
                        <li>Significant weight loss.</li>
                        <li>Change in sleeping patterns.</li>
                        <li>Severe mood swings.</li>
                        <li>Unpredictable behavior.</li>
                        <li>Tremors or convulsions.</li>
                        <li>Hyperthermia.</li>
                        <li>Elevated blood pressure.</li>
                        <li>Rapid heart rate.</li>
                        <li>Irregular heart rhythm.</li>
                    </ul>
                    Taken over a long period of time, crystal meth can cause severe physical and psychological issues as the short-term effects grow in intensity and complexity.<br/>
                    <br/>Signs of long-term crystal meth abuse include:
                    <ul>
                        <li>More persistent psychotic symptoms–including delusions, paranoia, and hallucinations.</li>
                        <li>Increased mental health issues like depression, anxiety and social isolation.</li>
                        <li>Confusion and odd behavior.</li>
                        <li>Feeling of bugs crawling on the skin.</li>
                        <li>Body sores from users picking at their skin.</li>
                        <li>Breathing problems associated with smoke inhalation.</li>
                        <li>Irreversible damage to blood vessels throughout the body, including the heart and brain.</li>
                        <li>Stroke.</li>
                        <li>Coma.</li>
                    </ul>
                    </p>
                </IonItem>

                {/* Withdrawals */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Withdrawal from Crystal Meth</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Symptoms of withdrawal from crystal meth can include:
                    <ul>
                        <li>Feelings of depression.</li>
                        <li>Intense drug craving.</li>
                        <li>Anxiety.</li>
                        <li>Loss of energy.</li>
                        <li>Itchy eyes.</li>
                        <li>Sleep difficulties, ranging from oversleeping to severe insomnia.</li>
                        <li>Increased appetite.</li>
                    </ul>
                    Withdrawal from crystal meth can be very uncomfortable and may lead users to relapse in an attempt to alleviate the symptoms.
                    Being in a medically supervised detox program can ensure the management of symptoms and may help prevent relapse.
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

export default Meth;