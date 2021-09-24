import { IonContent, IonHeader, IonPage, IonButtons, IonMenuButton, IonTabBar, IonChip, IonTabButton, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg, IonBackButton } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import { chevronBack } from 'ionicons/icons';
import Ingrediente from '../components/ingrediente';


import './Tab2.css';


const Detalles: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>


            <IonContent fullscreen>

                <IonCardHeader>


                    <a href="/user">
                        <button type="button" style={{ width: "40px", height: "40px", marginRight: "calc(100%-20px)", marginTop: "20px", border: "2px solid #C8C8C8", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "white" }}> <IonIcon color="dark" icon={chevronBack} style={{ color: "black" }} /> <IonBackButton></IonBackButton> </button>
                    </a>
                    <button style={{ position: "absolute", right: "20px", width: "40px", height: "40px", marginRight: "20px", marginTop: "20px", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "white" }}> <IonIcon color="dark" icon={logo} style={{ position: "absolute", right: "-5px", top: "-5px", color: "black", fontSize: "55px", marginBottom: "5px", padding: "0px" }} />  </button>

                </IonCardHeader>

                <IonCard class="detalles_card">
                    <img className="imagen_detalles" src='../assets/images/burger.jpg' />
                </IonCard>


                <div style={{ margin: "20px" }}>
                    <h1 className="bold_text">Hamburguesa Cruda</h1>
                    <h1 className="bold_text" style={{ color: "#F14253" }}>₡7500</h1>

                    <p></p>
                    <h4 style={{ color: "#C8C8C8" }}>Descripcion:</h4>
                    <h3 style={{ color: "#352E2E" }}>
                        24 porciones de pizza con tomate en rodajas y orégano. Con la pizza se incluye una orden pequeña de pan de ajo.
                    </h3>

                    <p></p>
                    <h4 style={{ color: "#C8C8C8" }}>Ingredientes:</h4>

                    <div style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }} >
                        <Ingrediente nombre="Carne Cruda" />
                        <Ingrediente nombre="Carne Cruda" />
                        <Ingrediente nombre="Carne Cruda" />
                        <Ingrediente nombre="Carne Cruda" />
                        <Ingrediente nombre="Carne Cruda" />
                        <Ingrediente nombre="Carne Cruda" />

                    </div>

                    <IonButton shape="round" size="large" fill="clear" href="/user" style={{ float: "none", display: "flex", margin: "auto", marginButton: "20px", marginTop:"20px",width: "90%", background: "linear-gradient(93.36deg, #FE4E4E -1.19%, #D82B5F 96.91%)", borderRadius: "50px" }}>
                        <strong className="bold_text" style={{color: "white" }}>Añadir al Carrito</strong>
                    </IonButton>


                </div>







            </IonContent>
        </IonPage>
    );
};

export default Detalles;
