import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import { chevronBack } from 'ionicons/icons';
import History from '../components/history_element'

import './Tab2.css';


const Historial: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>

            <IonContent fullscreen>



                <IonCardHeader>

                    <a href='/user'>
                        <button type="button" style={{ width: "40px", height: "40px", marginRight: "calc(100%-20px)", marginTop: "20px", border: "2px solid #C8C8C8", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "white" }}> <IonIcon color="dark" icon={chevronBack} style={{ color: "black" }} />  </button>
                    </a>
                    <button style={{ position: "absolute", right: "20px", width: "40px", height: "40px", marginRight: "20px", marginTop: "20px", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "white" }}> <IonIcon color="dark" icon={logo} style={{ position: "absolute", right: "-5px", top: "-5px", color: "black", fontSize: "55px", marginBottom: "5px", padding: "0px" }} />  </button>

                    <IonCardTitle>Historial</IonCardTitle>
                    <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>

                </IonCardHeader>



                <IonCardTitle>
                    <strong className="bold_text" color="dark" style={{ marginLeft: "20px" }}>En progreso:</strong>
                </IonCardTitle>

                <History nombre="Eats" fecha="18/18/2020" descripcion="torta de tora, palangana loka, hamburguesa podrida, aguacate sin cate" />
                <History nombre="Eats" fecha="18/18/2020" descripcion="torta de tora, palangana loka, hamburguesa podrida, aguacate sin cate" />
                <History nombre="Eats" fecha="18/18/2020" descripcion="torta de tora, palangana loka, hamburguesa podrida, aguacate sin cate" />
                <History nombre="Eats" fecha="18/18/2020" descripcion="torta de tora, palangana loka, hamburguesa podrida, aguacate sin cate" />

                <IonCardTitle>
                    <strong className="bold_text" color="dark" style={{ marginLeft: "20px" }}>Historial:</strong>
                </IonCardTitle>

                <History nombre="Eats" fecha="18/18/2020" descripcion="torta de tora, palangana loka, hamburguesa podrida, aguacate sin cate" />
                <History nombre="Eats" fecha="18/18/2020" descripcion="torta de tora, palangana loka, hamburguesa podrida, aguacate sin cate" />
                <History nombre="Eats" fecha="18/18/2020" descripcion="torta de tora, palangana loka, hamburguesa podrida, aguacate sin cate" />






            </IonContent>
        </IonPage>
    );
};

export default Historial;
