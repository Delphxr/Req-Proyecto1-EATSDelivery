import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonInput, IonCard, IonCardHeader, IonTextarea, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonFab, IonFabButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Direccion from '../components/direccion'
import './Tab1.css';

import logo from '../icons/logo.svg'
import { close, add } from 'ionicons/icons';

const EditarDireccion: React.FC = () => {
    const [titulo, setTitulo] = useState<string>();
    const [direccion, setdireccion] = useState<string>();
    return (
        <IonPage>


            <IonContent fullscreen>




                <IonCardHeader>
                    <IonIcon class="logo_eats_header" icon={logo} />
                    <IonCardTitle>Direcciones</IonCardTitle>
                    <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>
                </IonCardHeader>


                <IonCard>
                    <IonInput value={titulo} placeholder="Titulo" onIonChange={e => setTitulo(e.detail.value!)}></IonInput>
                </IonCard>

                <IonCard style={{ height: "50%" }}>
                    <IonTextarea placeholder="Escriba aqui la direccion que desea añadir..." value={direccion} onIonChange={e => setdireccion(e.detail.value!)}></IonTextarea>
                </IonCard>

                <IonButton shape="round" size="large" fill="clear" href="/user" style={{ float: "none", display: "flex", margin: "auto", marginButton: "20px", width: "90%", background: "white", borderRadius: "50px", border:"3px solid #F14253" }}>
                    <strong className="bold_text" style={{ color: "#F14253" }}>Cancelar</strong>
                </IonButton>


                <IonButton shape="round" size="large" fill="clear" href="/user" style={{ float: "none", display: "flex", margin: "auto", marginButton: "20px", marginTop: "20px", width: "90%", background: "linear-gradient(93.36deg, #FE4E4E -1.19%, #D82B5F 96.91%)", borderRadius: "50px" }}>
                    <strong className="bold_text" style={{ color: "white" }}>Guardar</strong>
                </IonButton>


            </IonContent>
        </IonPage>
    );
};

export default EditarDireccion;
