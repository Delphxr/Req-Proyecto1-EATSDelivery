import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import Restaurant from '../components/card_restaurant';
import Categoria from '../components/categoria'
import './Tab2.css';
import { caretForwardCircle, fastFood, location, cart, time } from 'ionicons/icons';



const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>

      <IonContent fullscreen>





        <IonCardHeader>
          
          <button style={{ width: "40px", height: "40px", marginRight: "calc(100%-20px)", marginTop: "20px", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "white" }} > <IonIcon color="dark" icon={logo} style={{position: "absolute", left: "10px", top: "20px", color: "black", fontSize: "55px", marginBottom: "5px", padding: "0px" }}  />  </button>

          <a href="/HistorialU">
          <button type="button" style={{ position: "absolute", right: "20px", width: "40px", height: "40px",border: "2px solid #F14253", marginRight: "20px", marginTop: "20px", boxSizing: "border-box", borderRadius: "10px", color: "black", background: "#F14253" }}> <IonIcon size="large" color="light" icon={time} style={{position: "absolute", right: "1px", top: "2px", color: "white"}} />  </button>
          </a>

          <IonCardTitle>Restaurantes</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>
          <IonSearchbar class="search_bar_eats" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated autocomplete="on" placeholder="Buscar"></IonSearchbar>

        </IonCardHeader>



        <IonCardTitle>
          <strong className="bold_text" color="dark" style={{ marginLeft: "20px" }}>Categorias</strong>
        </IonCardTitle>

        <div style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap", margin: "20px" }} >


          <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

          <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

          <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

          <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

          <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

          <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />




        </div>


        <IonCardTitle>
          <strong className="bold_text" color="dark" style={{ marginLeft: "20px" }}>Popular</strong>
        </IonCardTitle>

        <Restaurant nombre="WcEats" ruta_imagen="../assets/images/burger.jpg" descripcion="San Pedro, Heredia"></Restaurant>

        <Restaurant nombre="Pollo Loco #1" ruta_imagen="../assets/images/burger.jpg" descripcion="San Rafael, Heredia"></Restaurant>



      </IonContent>
    </IonPage>
  );
};

export default Tab2;
