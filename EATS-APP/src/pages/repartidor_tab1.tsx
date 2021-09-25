import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonFab, IonFabButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';

import Pedido from '../components/pedido'
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
          <IonCardTitle>Solicitudes de Pedidos</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>          
        </IonCardHeader>

        <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_recibido"/>
        <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_recibido"/>
        <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_recibido"/>
        <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_recibido"/>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
