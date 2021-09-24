import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import { close, add, remove } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import Carrito from '../components/carrito'
import Login from './login'
import './Tab3.css';

const Tab3: React.FC = () => {
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

        <Carrito nombre="Sopa de mondongo" ruta_imagen='../assets/images/burger.jpg' precio={1500} cantidad={2} />

        <Carrito nombre="Salchipulpos" ruta_imagen='../assets/images/burger.jpg' precio={17000} cantidad={5} />


        <IonGrid>
          <IonRow>
            <IonCol>
              <div style={{ marginLeft: "20px" }}>
                <IonCardSubtitle style={{ marginBottom: "20px" }}>
                  Metodo de Pago
                </IonCardSubtitle>

                <IonCardSubtitle style={{ marginBottom: "20px" }}>
                  Direccion de entrega
                </IonCardSubtitle>

                <IonCardTitle style={{ marginBottom: "20px" }}>
                  Subtotal
                </IonCardTitle>

                <IonCardSubtitle style={{ marginBottom: "20px" }}>
                  Costo de envio
                </IonCardSubtitle>

                <IonCardTitle style={{ marginBottom: "20px" }}>
                  Total
                </IonCardTitle>
              </div>
            </IonCol>

            <IonCol>
              <div style={{ marginRight: "20px" }}>
                <IonCardSubtitle style={{ marginBottom: "20px", textAlign: "right"}}>
                  Tarjeta de Credito
                </IonCardSubtitle>

                <IonCardSubtitle style={{ marginBottom: "20px", textAlign: "right" }}>
                  Trabajo
                </IonCardSubtitle>

                <IonCardTitle style={{ marginBottom: "20px", textAlign: "right" }}>
                  ₡7500
                </IonCardTitle>

                <IonCardSubtitle style={{ marginBottom: "20px", textAlign: "right" }}>
                  ₡750
                </IonCardSubtitle>

                <IonCardTitle style={{ marginBottom: "20px", textAlign: "right" }}>
                  ₡8250
                </IonCardTitle>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>


          <IonButton  shape="round" size="large" fill="clear" href="/ordenf" style={{float: "none",display: "flex", margin: "auto",marginButton: "20px", width:"90%", background:"linear-gradient(93.36deg, #FE4E4E -1.19%, #D82B5F 96.91%)", borderRadius: "50px"}}>
          <strong className="bold_text" style={{color: "white"}}>Pagar</strong>
          </IonButton>

      

        

      </IonContent>
    </IonPage>
  );
};

export default Tab3;
