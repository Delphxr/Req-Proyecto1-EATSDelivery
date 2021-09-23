import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import Restaurant from '../components/card_restaurant';
import Categoria from '../components/categoria'
import './Tab2.css';
import { caretForwardCircle } from 'ionicons/icons';



const Tab2: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>

      <IonContent fullscreen>



        <IonCardHeader>
          <IonIcon class="logo_eats_header" icon={logo} />
          <IonCardTitle>Restaurantes</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>
          <IonSearchbar class="search_bar_eats" value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated autocomplete="on" placeholder="Buscar"></IonSearchbar>

        </IonCardHeader>



        <IonCardTitle>
          <strong className="bold_text" color="dark" style={{ marginLeft: "20px" }}>Categorias</strong>
        </IonCardTitle>

        <IonSlides pager={false} scrollbar={false}>

          <IonSlide>

            <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

            <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

            <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

          </IonSlide>


          <IonSlide>

            <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

            <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

            <Categoria nombre="Hamburguesa" ruta_imagen='../assets/images/pizza.png' />

          </IonSlide>


        </IonSlides>


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
