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
    IonToolbar,
    IonTitle, 
    IonButtons, 
    IonBackButton  } from '@ionic/react';
import './articles.css';

const Nicotine = () => {

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
                    <h1 className='add-titles'>NICOTINE</h1>
                </IonItem>
                
                {/* DESCRIPTION */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>What is Nicotine?</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Nicotine is a plant alkaloid, which means that it's a naturally occurring chemical that contains nitrogen. It's also a highly addictive stimulant. <br/>
                    Nicotine is most popularly known for its use in cigarettes and tobacco products, but it has some other uses.
Although nicotine is predominantly found in tobacco plants, it’s also present in tomatoes, eggplants, potatoes, and green pepper plants. 
And while they all belong to the nightshade family, the quantities of nicotine in these other plants are much lower than in tobacco plants.</p>
                </IonItem>

                {/* EFFECTS */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Effects of Nicotine</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Cigarettes are one of the fastest ways to get nicotine into your system. After an inhale, 
tar with nicotine deposits travels to lungs where it latches on and gets absorbed by the organism. <br/>
It takes up to twenty seconds for nicotine to travel to the brain. Other delivery methods, 
such as chewing tobacco, smokeless tobacco, and e-cigarette systems are slower, but not by much.
When nicotine reaches the brain it attaches to neural receptors usually reserved for acetylcholine. 
This begins a series of chain reactions in the body. First, it starts to stimulate the adrenal glands which start releasing large amounts of adrenaline into the system.
This ‘flight or fight’ hormone elevates the heart rate and breathing. As the heart rate goes up so does the blood pressure and this means that nicotine is also partly 
to blame for numerous vascular diseases. <br/>
<br/>That rush of adrenaline also signals the body to dump sugars into the system –under normal circumstances that sugar would be useful for either the fight or the flight 
response. In this case, it stays in the bloodstream, accumulating and since nicotine suppresses insulin release this means that smokers regularly have elevated blood 
sugar levels.<br/>
High blood sugar is one of the reasons why smokers tend not to feel hungry after a cigarette, regardless of how long it was since their last meal. Nicotine is also responsible for dopamine floods that occur after smoking or chewing tobacco. Dopamine is a neurotransmitter that stimulates the pleasure centers of 
the brain and smoking there for gives smokers the same sensation you would get when eating something you really like or making love. This is where the craving part 
of the addiction comes into play. As nicotine-caused dopamine levels begin to stabilize, smokers get an overwhelming urge for another cigarette – essentially, 
another hit of nicotine. And that is how this vicious circle transforms into a snake biting its own tail.
                    </p>
                </IonItem>

                {/* Withdrawals */}
                <IonItem color='lighterblue' lines='none'>
                    <IonLabel>
                        <h1 className='add-labels'>Withdrawal from Nicotine</h1>
                    </IonLabel>
                </IonItem>
                <IonItem color='lighterblue' lines='none'>
                    <p>Nicotine causes physical addiction which is one of the reasons why it’s hard to kick the habit, even though you might want to. Your body will easily get 
accustomed to elevated sugar levels and regular dopamine that comes with smoking a cigarette and will start showing serious withdrawal symptoms during cessation
attempts.<br/> 
                    <br/>Nicotine withdrawal symptoms include, but are not limited to:
                    <ul>
                        <li>Feelings of anxiety.</li>
                        <li>Depression.</li>
                        <li>Drowsiness.</li>
                        <li>Trouble sleeping.</li>
                        <li>Increased craving for food.</li>
                        <li>Headaches.</li>
                        <li>Tremors.</li>
                        <li>Concentration issues.</li>
                        <li>Memory issues.</li>
                        <li>Nicotine cravings.</li>
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
                    <p>Phone: 021 949 5941 <br/>
                        Cell: 082 745 7779 <br/>
                        Fax: 086 501 8970 <br/>
                        Email: info@stopsmokingclinic.co.za<br/>
                        <br/>SUPPORT: support@stopsmokingclinic.co.za <br/>
                    </p>
                </IonItem>
            </IonContent>
        </IonPage>
    );
};

export default Nicotine;