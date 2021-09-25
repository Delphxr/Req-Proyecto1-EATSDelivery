import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonFab, IonFabButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Direccion from '../components/direccion'
import './Tab1.css';

import logo from '../icons/logo.svg'
import { close, add } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>


      <IonContent fullscreen>

  
      
        <IonCardHeader>
          <IonIcon class="logo_eats_header" icon={logo}/>
          <IonCardTitle>restaurante</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>          
        </IonCardHeader>

        <h2 style={{marginLeft:"20px"}}>Nombre</h2>
        <IonCard>
        <h2 style={{marginLeft:"20px"}}>WcEats</h2>
        </IonCard>


        <h2 style={{marginLeft:"20px"}}>Fotografia</h2>
        <IonCard>
        <img src='../assets/images/burger.jpg' alt="Placeholder-Image" />
        </IonCard>

        <h2 style={{marginLeft:"20px"}}>Direccion</h2>
        <IonCard>
        <h2 style={{marginLeft:"20px"}}>Alajuela, San Pablo</h2>
        </IonCard>


        <h2 style={{marginLeft:"20px"}}>Categoria</h2>
        <IonCard>
        <h2 style={{marginLeft:"20px"}}>Hamburguesa</h2>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
