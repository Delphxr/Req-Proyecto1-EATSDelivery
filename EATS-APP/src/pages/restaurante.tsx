import { IonContent, IonHeader, IonPage, IonTabBar,IonChip, IonTabButton, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import { chevronBack } from 'ionicons/icons';
import Menu from '../components/card_menu';


import './Tab2.css';


const MenuRestaurante: React.FC = () => {
    const [searchText, setSearchText] = useState('');
    return (
        <IonPage>
            <IonHeader>

            </IonHeader>
            <IonContent scrollY={false}>


                <div  >
                    <img className="image_restaurant_header" src='../assets/images/burger.jpg' />

                    <section className="restaurant_title">
                        <h1 className="bold_text" style={{ textAlign: "center", fontSize: "45px", overflow: "hidden", whiteSpace: "nowrap" }}>WcEats</h1>
                        <h3 style={{ textAlign: "center" }}>Heredia, San Pablo</h3>
                    </section>

                    <a href='/user'>
                        <button type="button" style={{ position: "absolute", left: "20px", width: "40px", height: "40px", marginRight: "calc(100%-20px)", marginTop: "20px", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "#FFFFFF88" }}> <IonIcon color="dark" icon={chevronBack} style={{ color: "black" }} />  </button>
                    </a>
                </div>



                <div style={{ height: "100%", overflow: "scroll", paddingBottom: "200px" }}>


                    <Menu nombre="Hamburguesa Cruda" descripcion="Deliciosa hamburguesa sin cocinar, con un toque se salmonella y especias verdes" precio="3500" ruta_imagen='../assets/images/burger.jpg'/>
                    <Menu nombre="Hamburguesa Cruda" descripcion="Deliciosa hamburguesa sin cocinar, con un toque se salmonella y especias verdes" precio="3500" ruta_imagen='../assets/images/burger.jpg'/>
                    <Menu nombre="Hamburguesa Cruda" descripcion="Deliciosa hamburguesa sin cocinar, con un toque se salmonella y especias verdes" precio="3500" ruta_imagen='../assets/images/burger.jpg'/>
                    <Menu nombre="Hamburguesa Cruda" descripcion="Deliciosa hamburguesa sin cocinar, con un toque se salmonella y especias verdes" precio="3500" ruta_imagen='../assets/images/burger.jpg'/>
                    


                </div>

            </IonContent>
        </IonPage>
    );
};

export default MenuRestaurante;
