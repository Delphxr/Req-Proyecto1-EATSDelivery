import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';

import { close, add, remove } from 'ionicons/icons';


import './card_restaurant.css';

interface ContainerProps {
    nombre: string;
    ruta_imagen: string;
    precio: number;
    cantidad: number;
}



const Carrito: React.FC<ContainerProps> = ({ nombre, ruta_imagen, precio, cantidad }) => {
    return (
        <IonCard>
          <IonButton fill="clear" shape="round" >
            <IonIcon slot="icon-only" color="primary" icon={close} />
          </IonButton>
          <IonGrid>
            <IonRow>
              <IonCol size="5">

                <img className="image_price" src={ruta_imagen} />


              </IonCol>
              <IonCol>


                <strong className="bold_text" style={{ paddingTop: "20px", fontSize: "18px", color: "black" }}>{nombre}</strong>
                <p className="bold_text" color="primary" style={{fontSize: "20px", color: "#D82B5F", marginBottom: "8px", marginTop: "8px" }}>₡{precio}</p>

                <div>

                  <IonGrid>
                    <IonRow style={{ overflow: "visible", whiteSpace: "nowrap"}}>
                      
                      <IonButton color="tertiary" shape="round" size="small" style={{ float: "left" , margin: "0px", padding:"0px"}}>
                      <IonIcon icon={remove} color="dark"/>
                      </IonButton>

                      <span className="bold_text" style={{ fontSize: "18px", paddingTop: "3px", marginLeft: "2px",marginRight: "4px" }}>{cantidad}</span>


                      <IonButton color="tertiary" shape="round" size="small" style={{ float: "left", margin: "0px", padding:"0px"}}>
                        <IonIcon icon={add} color="dark"/>
                      </IonButton>
                    </IonRow>
                  </IonGrid>


                </div>


              </IonCol>
            </IonRow>
          </IonGrid>


        </IonCard>


    );
};

export default Carrito;