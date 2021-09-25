import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonFab, IonFabButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Direccion from '../components/direccion'
import './Tab1.css';

import logo from '../icons/logo.svg'
import { close, add } from 'ionicons/icons';


// aqui estamos generando una lista de items en html 
function generate_items(){
  var cantidad = 25
  var elementos = [];
  for (var i = 0; i < cantidad; i++) {
    elementos.push(<Direccion nombre={"Direccion #" + String(i)} descripcion="prueba 1234"/>);
  }
  return elementos;}

const Direcciones = generate_items();

 

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
          <IonCardTitle>Direcciones</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>          
        </IonCardHeader>

        {Direcciones}


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
