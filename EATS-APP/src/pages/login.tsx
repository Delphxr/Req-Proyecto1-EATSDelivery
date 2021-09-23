import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import ExploreContainer from '../components/ExploreContainer';
import './login.css';

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>

      </IonHeader>
      <IonContent fullscreen>
        

      <IonCardHeader>
          <IonIcon class="logo_eats_header" icon={logo} />
          <IonCardTitle>Carrito</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>

        </IonCardHeader>


      </IonContent>
    </IonPage>
  );
};

export default Login;
