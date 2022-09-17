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
    IonMenu,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent
} from '@ionic/react';
import { 
    journal,
    chatbubble,
    person
} from 'ionicons/icons';

const LandingPage = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Fight against Substance Abuse </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonCard>
                    <IonCardHeader>
                        <img 
                            scr ="https://www.verywellmind.com/thmb/lsFmMvHcfL8Y78dska1FYqsfYlI=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-951636492-64ab53c465c4447cb67f6c704ed0fa55.jpg" 
                            alt="image of substance abuse" 
                        />   
                        <IonCardSubtitle>OVERCOME ADDICTION</IonCardSubtitle>
                        <IonCardTitle>A FIGHT AGAINST SUBSTANCE ABUSE</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                        <p>
                            Substance abuse, such as alcohol, marijuana, cocaine, prescription drugs, and others, can lead to major health problems as well as serious difficulties with family, friends, coworkers, employment, money, and the law. 
                            Despite these issues, many continue to utilize the drug. 
                            Why? Addiction is defined as a physical addiction to a chemical substance. 
                            When a person quits taking the drug, they experience unpleasant symptoms known as withdrawal.People typically start taking addictive substances because they like it at first.
                            The pleasure is typically gone by the time addiction has established. 
                            The desire to avoid the unpleasant withdrawal symptoms is the motivating cause for continuing usage.
                        </p>	
                        <p>
                            Substance addiction is a serious matter that should not be taken lightly. It occurs when you consume too much or in the incorrect way alcohol, prescription medications, and other legal and illicit drugs.
                        </p>
                        <p>
                            Addiction is not the same as substance misuse. Many people who struggle with drug misuse are able to quit or adjust their destructive habits.
                            On the other hand, addiction is a sickness. It implies that you are unable to quit utilizing despite the fact that your condition is causing you damage.
                            COME LET US HELP YOU
                        </p>
                        <img scr ="./pages/we care.jpg" alt="image of substance abuse" />
                    </IonCardContent>
                </IonCard>
                
            </IonContent>
        </IonPage>
    );
}

export default LandingPage;