import { IonContent, IonHeader, IonPage, IonChip, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonFab, IonFabButton } from '@ionic/react';
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
                    <IonIcon class="logo_eats_header" icon={logo} />
                    <IonCardTitle>Tus Pedidos</IonCardTitle>
                    <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>
                </IonCardHeader>


                <div style={{ marginLeft: "20px" }}>

                    <IonChip color="dark" style={{ display: "inline-block", marginRight: "5px" }}>
                        <span className="bold_text" style={{color:"black"}}>Recibido</span>
                    </IonChip>

                    <IonChip color="dark" style={{ display: "inline-block", marginRight: "5px", border:"2px solid #F14253"}}>
                        <span className="bold_text" style={{color:"black"}}>En camino</span>
                    </IonChip>

                    <IonChip color="primary" style={{ display: "inline-block", marginRight: "5px", border:"2px solid #F14253" }}>
                        <span className="bold_text" style={{color:"#F14253"}}>Entregado</span>
                    </IonChip>
                </div>


                <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_recibido" />
                <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_recibido" />
                <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_camino" />
                <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_camino" />
                <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_entregado" />
                <Pedido nombre="WcEats" fecha="10/2/2020" descripcion="pizza, hambuuza, pan, aguacate, zacate, zapato, piedra" direccion="casa de pepe" estilo="pedido_entregado" />






            </IonContent>
        </IonPage>
    );
};

export default Tab1;
