import { 
    IonCard, 
    IonImg, 
    IonIcon, 
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

const Alcohol = () => {
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
                    <h1 className='add-titles'>ALCOHOL</h1>
                </IonItem>
                
                {/* DESCRIPTION */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>What is Alcohol?</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>
                        Alcohol is one of the most popular addictive substances in the world. Some people can control how much they drink, but others have risk factors that prevent 
                        them from drinking responsibly.
                        When these people become addicted to alcohol, they’re often referred to as alcoholics. <br/>
                        Some alcoholics appear to be high-functioning. Although they’re addicted, they can hold a steady job and take care of their daily responsibilities. But most alcoholics experience negative consequences because of their drinking.<br/>
                        <br/> People with mild alcohol problems may be able to quit drinking on their own or with the help of support groups. However, people who are addicted to alcohol 
                        require treatment. Recovery from alcohol 
                        addiction is achievable with assistance from doctors, therapists, peers, friends and family members.
                    </p>
                </IonItem>

                {/* EFFECTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Effects of Alcohol</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>
                        Alcohol addiction causes physical, psychological and social side effects. The most common signs of alcoholism include continuing to 
                        drink despite negative consequences and prioritizing drinking over anything else. 
                        <br/>The disease can also be diagnosed based on other behaviors and health effects. <br/>
                        <br/>Health Effects of Alcohol:<br/>
                        <br/>Alcohol causes a range of health effects, including: <br/>
                        <ul>
                            <li>Short-term side effects of alcohol abuse include alcohol poisoning and blacking out. </li>
                            <li>Long-term health effects of alcohol include depression, anxiety and a variety of diseases and disorders. </li>
                        </ul>
                        <br/>Social Effects of Alcohol include:
                        <ul>
                            <li>Friends and family members of alcoholics also face the consequences of their loved one’s disease.</li>
                            <li>Alcohol addiction causes legal, financial and relationship problems.</li>
                            <li>Alcoholics often struggle to have healthy relationships with loved ones.</li>
                        </ul>
                    </p>
                </IonItem>

                {/* Withdrawals */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Withdrawal from Alcohol</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>
                        5 to 10 hours after your last drink you may experience:
                        <ul>
                            <li>Tremors (shaking).</li>
                            <li>Increase or decrease in blood pressure.</li>
                            <li>Quick breathing.</li>
                            <li>Sweating.</li>
                            <li>Vomiting.</li>
                            <li>Irritability.</li>
                            <li>Trouble sleeping.</li>
                            <li>Anxiety.</li>
                            <li>Rapid pulse.</li>
                            <br/>These symptoms typically peak within 24 to 48 hours.
                        </ul>
                        <br/>12 to 24 hours:
                        <ul>
                            <li>Hallucinations (seeing, hearing, or feeling things that aren’t actually there).</li>
                            <br/>This can last up to 2 days or sometimes longer.
                        </ul> 
                        <br/>24 to 48 hours:
                        <ul>
                            <li>Probable withdrawal-related seizures.</li>
                        </ul>
                        <br/>3 days to a week:
                        <ul>
                            <li>Delirium tremens.</li>
                            <br/>Delirium tremens often requires treatment in an intensive care unit. This condition can cause dehydration, rapid heartbeat, high blood pressure, and reduced blood flow to the brain.
                            Symptoms include confusion, loss of consciousness, angry or nervous behavior, hallucinations, soaking sweats, and disturbed sleep.<br/>
                            Delirium tremens happens in only about 5% of people who go through alcohol withdrawal, but it kills up to 1 in 20 people who develop it, according to Harvard Medical School.<br/>
                        </ul>
                        <br/>5 days after your last drink:
                        <ul>
                            Alcohol withdrawal symptoms tend to improve within 5 days. However, a small number of people have withdrawal symptoms that last
                            for weeks. 
                        </ul>
                        <br/>Weeks to several months:
                        <ul>
                            Take care of your body and your mind. After you’ve gone through alcohol withdrawal, don’t start drinking again.<br/>
                            Getting in an inpatient or outpatient treatment center dramatically improves your chances of staying sober. Also ask your doctor how long-term drinking may have 
                            affected your health. 
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
                        Emergency Mobile: 079 770 7532 
                    </p>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Alcohol;