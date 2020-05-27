import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonRouterLink, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import React, { createRef } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Page2: React.FC = () => {
  const inputRef = createRef<HTMLIonInputElement>();

  useIonViewDidEnter(() => {
    console.log("PAGE 2 ENTERED");
    console.log(inputRef);
    if (inputRef.current) {
      inputRef.current.setFocus();
    }
  }, [inputRef]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PAGE 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PAGE 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput ref={inputRef} autofocus placeholder="PAGE 2 FORM" name="page2input" />
        <IonButton type="submit">SUBMIT</IonButton>
        <br />
        <br />
        <br />
        <IonRouterLink routerLink="/page1">PAGE 1</IonRouterLink>
        <br />
        <IonRouterLink routerLink="/page3">PAGE 3</IonRouterLink>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Page2;
