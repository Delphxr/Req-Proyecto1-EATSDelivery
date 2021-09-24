import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { close } from 'ionicons/icons';



interface ContainerProps {
    fecha: string,
    nombre: string;
    descripcion: string;
}

const History_element: React.FC<ContainerProps> = ({ nombre, descripcion,fecha }) => {
    return (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{fecha}

              <IonButton fill="clear" shape="round" >
                <IonIcon slot="icon-only" color="primary" icon={close} />
              </IonButton>

            </IonCardTitle>

          </IonCardHeader>

          
          
          <IonCardContent color="primary">
          <h2 className="bold_text" style={{color:"#F14253"}}>{nombre}</h2>
   
            {descripcion}
          </IonCardContent>
        </IonCard>

    );
};

export default History_element;