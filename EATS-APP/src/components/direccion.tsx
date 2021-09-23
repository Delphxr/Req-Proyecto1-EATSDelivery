import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { close } from 'ionicons/icons';



interface ContainerProps {
    nombre: string;
    descripcion: string;
}

const Direccion: React.FC<ContainerProps> = ({ nombre, descripcion }) => {
    return (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{nombre}

              <IonButton fill="clear" shape="round" >
                <IonIcon slot="icon-only" color="primary" icon={close} />
              </IonButton>

            </IonCardTitle>

          </IonCardHeader>

          <IonCardContent>
            {descripcion}
          </IonCardContent>
        </IonCard>

    );
};

export default Direccion;