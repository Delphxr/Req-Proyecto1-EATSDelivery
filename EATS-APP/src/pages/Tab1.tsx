import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

import logo from '../icons/logo.svg'
import { close } from 'ionicons/icons';

const Tab1: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>

        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>


        <IonCardHeader>
          <IonIcon class="logo_eats_header" icon={logo}/>
          <IonCardTitle>Direcciones</IonCardTitle>
          <IonCardTitle><h1 className="title_eats" color="dark">Eats Delivery</h1></IonCardTitle>
          
        </IonCardHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Direccion

              <IonButton fill="clear" shape="round" >
                <IonIcon slot="icon-only" color="primary" icon={close} />
              </IonButton>

            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel odio eget est auctor ultrices. Pellentesque ullamcorper, urna non iaculis mattis, tortor tellus varius ex, quis cursus ex neque at mi. In urna lectus, sagittis a lacus quis, imperdiet hendrerit lorem. Cras a nunc non est aliquam consectetur eget a magna.
          </IonCardContent>
        </IonCard>


      </IonContent>
    </IonPage>
  );
};

export default Tab1;
