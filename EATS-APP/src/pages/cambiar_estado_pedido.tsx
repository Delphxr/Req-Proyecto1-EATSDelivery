import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import Fondo from '../components/fondo_rojo';
import './login.css';

const EstadoPedido: React.FC = () => {
    const [correo, setCorreo] = useState<string>();
    const [password, setPassword] = useState<string>();
    return (
        <IonPage>
            <IonHeader>

            </IonHeader>
            <IonContent scrollY={false}>

                <Fondo titulo="" subtitulo="Desea cambiar el estado del pedido?" />



                

            </IonContent>
        </IonPage>
    );
};

export default EstadoPedido;
