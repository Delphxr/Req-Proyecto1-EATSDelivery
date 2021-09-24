import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import Fondo from '../components/fondo_rojo';
import './login.css';

const OrdenF: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>

            </IonHeader>
            <IonContent fullscreen>

                <Fondo titulo="Orden Finalizada!" subtitulo="Ya vamos de camino!"/>
                
                <IonButton class="login_button" shape="round" size="large" fill="clear" href="/user" style={{width: "calc(100% - 40px)", background: "white", borderRadius: "50px" }}>
                    <strong className="bold_text" style={{ color: "#D82B5F" }}>Volver</strong>
                </IonButton>
                
            </IonContent>
        </IonPage>
    );
};

export default OrdenF;
