import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import { chevronBack } from 'ionicons/icons';
import Restaurant from '../components/card_restaurant';

import './Tab2.css';


const Categorias_res: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>

            <IonContent fullscreen>


            
                <IonCardHeader>

                        <a href='/user'>
                        <button  type="button" style={{ width: "40px", height: "40px", marginRight: "calc(100%-20px)", marginTop: "20px", border: "2px solid #C8C8C8", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "white" }}> <IonIcon color="dark" icon={chevronBack} style={{ color: "black" }} />  </button>
                        </a>
                    <button style={{ position: "absolute", right: "20px", width: "40px", height: "40px", marginRight: "20px", marginTop: "20px", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "white" }}> <IonIcon color="dark" icon={logo} style={{ position: "absolute", right: "-5px", top: "-5px", color: "black", fontSize: "55px", marginBottom: "5px", padding: "0px" }} />  </button>

                    <IonCardTitle>Restaurantes</IonCardTitle>
                    <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>

                </IonCardHeader>



                <IonCardTitle>
                    <strong className="bold_text" color="dark" style={{ marginLeft: "20px" }}>Hamburguesa</strong>
                </IonCardTitle>



                <Restaurant nombre="WcEats" ruta_imagen="../assets/images/burger.jpg" descripcion="San Pedro, Heredia"></Restaurant>

                <Restaurant nombre="Pollo Loco #1" ruta_imagen="../assets/images/burger.jpg" descripcion="San Rafael, Heredia"></Restaurant>



            </IonContent>
        </IonPage>
    );
};

export default Categorias_res;
