import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonFab, IonFabButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';

import Menu from '../components/card_menu';
import './Tab1.css';

import logo from '../icons/logo.svg'
import { close, add } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>


      <IonContent fullscreen>

      <IonFab horizontal="center" vertical="bottom" slot="fixed">
        <IonFabButton color="danger"  href= "/editar_dir">

          <IonIcon icon={add} color="light"/>
        </IonFabButton>
      </IonFab>

      
        <IonCardHeader>
          <IonIcon class="logo_eats_header" icon={logo}/>
          <IonCardTitle>Menú</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>          
        </IonCardHeader>

        
        <Menu nombre="Hamburguesa Cruda" descripcion="Deliciosa hamburguesa sin cocinar, con un toque se salmonella y especias verdes" precio="3500" ruta_imagen='../assets/images/burger.jpg'/>
        
        <Menu nombre="Hamburguesa Cruda" descripcion="Deliciosa hamburguesa sin cocinar, con un toque se salmonella y especias verdes" precio="3500" ruta_imagen='../assets/images/burger.jpg'/>
        <Menu nombre="Hamburguesa Cruda" descripcion="Deliciosa hamburguesa sin cocinar, con un toque se salmonella y especias verdes" precio="3500" ruta_imagen='../assets/images/burger.jpg'/>



      </IonContent>
    </IonPage>
  );
};

export default Tab1;
