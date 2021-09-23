import { IonContent, IonHeader, IonPage, IonSegment, IonSegmentButton, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import { close, add, remove } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
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


        <IonCard>
          <IonButton fill="clear" shape="round" >
            <IonIcon slot="icon-only" color="primary" icon={close} />
          </IonButton>
          <IonGrid>
            <IonRow>
              <IonCol size="5">

                <img className="image_price" src='../assets/images/burger.jpg' />


              </IonCol>
              <IonCol>


                <strong className="bold_text" style={{ paddingTop: "20px", fontSize: "18px", color: "black" }}>Hamburguesa Cruda</strong>
                <p className="bold_text" color="primary" style={{ fontSize: "18px", color: "#D82B5F" }}>₡7500</p>

                <div>

                  <IonGrid>
                    <IonRow>

                      <IonButton color="tertiary" shape="round" size="small" style={{ float: "left" }}>
                        -
                      </IonButton>

                      <strong className="bold_text" style={{fontSize: "18px"}}>5</strong>


                      <IonButton color="tertiary" shape="round" size="small" style={{ float: "left"}}>
                        +
                      </IonButton>
                    </IonRow>
                  </IonGrid>


                </div>


              </IonCol>
            </IonRow>
          </IonGrid>


        </IonCard>




      </IonContent>
    </IonPage>
  );
};

export default Tab3;
