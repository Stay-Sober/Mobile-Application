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
    IonBackButton  } from '@ionic/react';
import './articles.css';

const Cocaine = () => {

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
                    <h1 className='add-titles'>COCAINE</h1>
                </IonItem>
                
                {/* DESCRIPTION */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>What is Cocaine?</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>
                        Cocaine is a powerfully addictive stimulant drug made from the leaves of the coca plant native to South America. 
                        Although health care providers can use it for valid medical purposes, such as local anesthesia for some surgeries, 
                        recreational cocaine use is illegal. As a street drug, cocaine looks like a fine, white, crystal powder. <br/>
                        Street dealers often mix it with things like cornstarch, talcum powder, or flour to increase profits. 
                        They may also mix it with other drugs such as the stimulant amphetamine, or synthetic opioids, including fentanyl. <br/>
                        Adding synthetic opioids to cocaine is especially risky when people using cocaine don’t realize it contains this dangerous additive. 
                        Increasing numbers of overdose deaths among cocaine users might be related to this tampered cocaine.<br/>
                        <br/> People snort cocaine powder through the nose, or they rub it into their gums. Others dissolve the powder and inject it into the bloodstream. 
                        Some people inject a combination of cocaine and heroin, called a Speedball. <br/> Another popular method of use is to smoke cocaine that has been processed to make a rock crystal (also called "freebase cocaine"). 
                        The crystal is heated to produce vapors that are inhaled into the lungs. This form of cocaine is called Crack, 
                        which refers to the crackling sound of the rock as it's heated. <br/>
                        Some people also smoke Crack by sprinkling it on marijuana or tobacco, and smoke it like a cigarette.
                    </p>
                </IonItem>

                {/* EFFECTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Effects of Cocaine</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>
                        Cocaine increases levels of the natural chemical messenger dopamine in brain circuits related to the control of movement and reward.
                    <br/>Normally, dopamine recycles back into the cell that released it, shutting off the signal between nerve cells. 
                    However, cocaine prevents dopamine from being recycled, causing large amounts to build up in the space between two nerve cells, 
                    stopping their normal communication. This flood of dopamine in the brain’s reward circuit strongly reinforces drug-taking behaviors. <br/>
                    With continued drug use, the reward circuit may adapt, becoming less sensitive to the drug. As a result, people take
                    stronger and more frequent doses in an attempt to feel the same high, and to obtain relief from withdrawal.<br/>
                    <br/>Short-term health effects of cocaine include:
                    <ul>
                        <li>Extreme happiness and energy.</li>
                        <li>Mental alertness.</li>
                        <li>Hypersensitivity to sight, sound, and touch.</li>
                        <li>Irritability.</li>
                        <li>Paranoia—extreme and unreasonable distrust of others.</li>
                    </ul>
                    Some long-term health effects of cocaine depend on the method of use and include the following:
                    <ul>
                        <li>Snorting: loss of smell, nosebleeds, frequent runny nose, and problems with swallowing.</li>
                        <li>Smoking: cough, asthma, respiratory distress, and higher risk of infections like pneumonia.</li>
                        <li>Consuming by mouth: severe bowel decay from reduced blood flow.</li>
                        <li>Needle injection: higher risk for contracting HIV, hepatitis C, and other bloodborne diseases, skin or soft tissue infections, as well as scarring or collapsed veins.</li>
                    </ul>
                    </p>
                </IonItem>

                {/* Withdrawals */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Withdrawal from Cocaine</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Cocaine detox brings mostly psychological withdrawal symptoms.<br/>
                    <br/>Symptoms of cocaine withdrawal include:
                    <ul>
                        <li>Difficulty concentrating.</li>
                        <li>Slowed thinking.</li>
                        <li>Slowed activity or physical fatigue after activity.</li>
                        <li>Exhaustion.</li>
                        <li>Restlessness.</li>
                        <li>Inability to experience sexual arousal.</li>
                        <li>Anhedonia, or the inability to feel pleasure.</li>
                        <li>Depression or anxiety.</li>
                        <li>Suicidal thoughts or actions.</li>
                        <li>Vivid, unpleasant dreams or nightmares.</li>
                        <li>Physical symptoms, such as chills, tremors, muscle aches, and nerve pain.</li>
                        <li>Increased craving for cocaine.</li>
                        <li>Increased appetite.</li>
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
                    <p>UK:0800 955 4357 <br/>
                        SA:081 444 7000 <br/>
                        Help@WeDoRecover.com <br/>
                    </p>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Cocaine;