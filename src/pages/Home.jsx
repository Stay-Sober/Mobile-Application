import React, { useState } from 'react';
import Tab2 from "../components/Tab2";
import Tab3 from "../components/Tab3"
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
import "./Home.css"

const Home = () => {
  const [page , setPage ] = useState(null);
  
  return (  
    <IonPage>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref={`/Login`} />
        </IonButtons>
        <IonTitle>Articles</IonTitle>
      </IonToolbar>
      
      <IonContent>
        {/* METH ARTICLE */}
        <IonCard color='lighterblue'>
          <div className='add-imgs'>
              <IonImg src='https://d.newsweek.com/en/full/1565582/drugs-stock.jpg?w=1600&h=1200&l=0&t=0&q=88&f=aa782f58b26525acfe65e5580161ceb5' />
          </div>
          <div className='add-text'>
              <IonLabel>
                  <h1>Crystal Meth</h1>
              </IonLabel>
              <p>
                Crystal meth is short for crystal methamphetamine. It is just one form of the drug methamphetamine.
                Methamphetamine is a white crystalline drug that people take by snorting it (inhaling through the nose), smoking it or injecting it with a needle. 
                Some even take it orally, but all develop a strong desire to continue using it because the drug creates a false sense of happiness and well-being—a rush 
                (strong feeling) of confidence, hyperactiveness and energy. One also experiences decreased appetite.
              </p>
              <IonButton color='neonblue' routerLink='./Meth' size='small'>Read More</IonButton>
          </div>
        </IonCard>

        {/* HEROIN ARTICLE */}
        <IonCard color='lighterblue'>
          <div className='add-imgs'>
              <IonImg src='https://www.verywellmind.com/thmb/lsFmMvHcfL8Y78dska1FYqsfYlI=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-951636492-64ab53c465c4447cb67f6c704ed0fa55.jpg' />
          </div>
          <div className='add-text'>
              <IonLabel>
                  <h1>Heroin</h1>
              </IonLabel>
              <p>
                Heroin is a very addictive drug made from morphine, a psychoactive (mind-altering) substance taken from the resin of the seed pod of the opium poppy plant. 
                Heroin’s color and look depend on how it is made and what else it may be mixed with. It can be white or brown powder, or a black, sticky substance called 
                “black tar heroin.” Heroin is part of a class of drugs called opioids. Other opioids include some prescription pain relievers, such as codeine, oxycodone, 
                and hydrocodone. When the drug wears off, 
                people experience a depressed mood and often crave the drug to regain the good feelings.
              </p>
              <IonButton color='neonblue' routerLink='./Heroin' size='small'>Read More</IonButton>
          </div>
        </IonCard>

        {/* COCAINE ARTICLE */}
        <IonCard color='lighterblue'>
          <div className='add-imgs'>
              <IonImg src='https://post.healthline.com/wp-content/uploads/2019/07/Cocaine_732x549-thumbnail.jpg' />
          </div>
          <div className='add-text'>
              <IonLabel>
                  <h1>Cocaine</h1>
              </IonLabel>
              <p>
                Cocaine is a powerfully addictive stimulant drug made from the leaves of the coca plant native to South America. 
                Although health care providers can use it for valid medical purposes, such as local anesthesia for some surgeries, 
                recreational cocaine use is illegal. As a street drug, cocaine looks like a fine, white, crystal powder. Cocaine increases 
                levels of the natural chemical messenger dopamine in brain circuits related to the control of movement and reward.
              </p>
              <IonButton color='neonblue' routerLink='./Cocaine' size='small'>Read More</IonButton>
          </div>
        </IonCard>

        {/* NICOTINE ARTICLE */}
        <IonCard color='lighterblue'>
          <div className='add-imgs'>
              <IonImg src='https://www.news-medical.net/image.axd?picture=2021%2F3%2Fshutterstock_1709594734.jpg' />
          </div>
          <div className='add-text'>
              <IonLabel>
                  <h1>Nicotine</h1>
              </IonLabel>
              <p>
                Nicotine is a plant alkaloid, which means that it's a naturally occurring chemical that contains nitrogen. It's also a highly addictive stimulant. 
                Nicotine is most popularly known for its use in cigarettes and tobacco products, but it has some other uses.
                Although nicotine is predominantly found in tobacco plants, it’s also present in tomatoes, eggplants, potatoes, and green pepper plants. 
                Cigarettes are one of the fastest ways to get nicotine into your system. After an inhale, 
                tar with nicotine deposits travels to lungs where it latches on and gets absorbed by the organism. 
              </p>
              <IonButton color='neonblue' routerLink='./Nicotine' size='small'>Read More</IonButton>
          </div>
        </IonCard>

        {/* ALCOHOL ARTICLE */}
        <IonCard color='lighterblue'>
          <div className='add-imgs'>
              <IonImg src='https://familydoctor.org/wp-content/uploads/2000/09/40913444_l.jpg' />
          </div>
          <div className='add-text'>
              <IonLabel>
                  <h1>Alcohol</h1>
              </IonLabel>
              <p>
                Alcohol is one of the most popular addictive substances in the world. Some people can control how much they drink, 
                but others have risk factors that prevent 
                them from drinking responsibly.
                When these people become addicted to alcohol, they’re often referred to as alcoholics. 
                Some alcoholics appear to be high-functioning. Although they’re addicted, they can hold a steady job and take care of their daily responsibilities. 
                But most alcoholics experience negative consequences because of their drinking.
              </p>
              <IonButton color='neonblue' routerLink='./Alcohol' size='small'>Read More</IonButton>
          </div>
        </IonCard>

        {/* ECSTACY ARTICLE */}
        <IonCard color='lighterblue'>
          <div className='add-imgs'>
              <IonImg src='https://images.ctfassets.net/ip74mqmfgvqf/2sXPaaFQnuI0wOEYKEMmQw/303700804342da3f63786217f0b1892d/FRANK_drug_image_ecstasy.jpg' />
          </div>
          <div className='add-text'>
              <IonLabel>
                  <h1>Ecstacy</h1>
              </IonLabel>
              <p>
                Ecstasy, also reffered to as "Molly," is a synthetic drug known mainly for its hallucinogenic and stimulant effects. 
                It's known for imparting feelings of increased energy, pleasure, emotional warmth, and distorted sensory and time perception. 
                Similar to both stimulants and hallucinogens, it produces feelings of increased energy, pleasure, emotional warmth, and distorted sensory and time perception.
                While ecstasy was initially used primarily in nightclubs and raves, its use has now spread to a wider range of populations.
              </p>
              <IonButton color='neonblue' routerLink='./Ecstacy' size='small'>Read More</IonButton>
          </div>
        </IonCard>

        {/* AMPHETAMINE ARTICLE */}
        <IonCard color='lighterblue'>
          <div className='add-imgs'>
              <IonImg src='https://cdn-prod.medicalnewstoday.com/content/images/articles/221/221211/amphetamine.jpg' />
          </div>
          <div className='add-text'>
              <IonLabel>
                  <h1>Amphetamine</h1>
              </IonLabel>
              <p>
                Amphetamine is a colourless liquid with an acrid taste and a faint odour. 
                The most commonly used preparation of the drug is amphetamine sulfate - marketed under the name Benzedrine - which is a white powder with a slightly bitter, numbing taste. The use of amphetamines,
                whether legal or illegal, can lead to physiological and neurological changes from which the brain becomes reliant on substance use for the presence of amphetamines to function properly.
              </p>
              <IonButton color='neonblue' routerLink='./Amphetamine' size='small'>Read More</IonButton>
          </div>
        </IonCard>
      </IonContent>
      
      <IonTabBar slot="top">
        <IonTabButton tab="tab2" href="/tab2" onClick={a => setPage(1)}>
          <IonIcon icon={journal} />
          <IonLabel>Journal</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3" onClick={a =>setPage(2)}>
          <IonIcon icon={person} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Home;
