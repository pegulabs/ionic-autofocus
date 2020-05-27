import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonRouterLink routerLink="/page1">PAGE 1</IonRouterLink>
        <br />
        <IonRouterLink routerLink="/page2">PAGE 2</IonRouterLink>
        <br />
        <IonRouterLink routerLink="/page3">PAGE 3</IonRouterLink>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
