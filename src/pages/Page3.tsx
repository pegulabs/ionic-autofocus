import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Page3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAGE 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PAGE 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput autofocus placeholder="PAGE 3 FORM" name="page3input" />
        <IonButton type="submit">SUBMIT</IonButton>
        <br />
        <br />
        <br />
        <IonRouterLink routerLink="/page1">PAGE 1</IonRouterLink>
        <br />
        <IonRouterLink routerLink="/page2">PAGE 2</IonRouterLink>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Page3;
