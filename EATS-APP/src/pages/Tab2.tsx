import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import burger from '../images/burger.jpg'

const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>



        <IonCardHeader>
          <IonIcon class="logo_eats_header" icon={logo} />
          <IonCardTitle>Restaurantes</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>
          <IonSearchbar class="search_bar_eats" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated autocomplete="on" placeholder="Buscar"></IonSearchbar>

        </IonCardHeader>




        <IonCard>
          <img className="image_card" src={burger}/>
          <IonCardHeader>
            <IonCardTitle class="bold_text" color="primary">WcEats</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Heredia, San Pablo
          </IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab2;
