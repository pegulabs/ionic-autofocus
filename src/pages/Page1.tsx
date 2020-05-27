import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Page1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAGE 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PAGE 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput autofocus placeholder="PAGE 1 FORM" name="page1input" />
        <IonButton type="submit">SUBMIT</IonButton>
        <br />
        <br />
        <br />
        <IonRouterLink routerLink="/page2">PAGE 2</IonRouterLink>
        <br />
        <IonRouterLink routerLink="/page3">PAGE 3</IonRouterLink>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Page1;
