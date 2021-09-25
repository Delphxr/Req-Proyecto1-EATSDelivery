import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { close } from 'ionicons/icons';



interface ContainerProps {
    fecha: string,
    nombre: string;
    descripcion: string;
    direccion: string;
    estilo: string;
}

const Pedido: React.FC<ContainerProps> = ({ nombre, descripcion, fecha, direccion, estilo }) => {
    return (
        <IonCard class={estilo}>
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

            <h3 className="bold_text" style={{color:"#F14253"}}>{direccion}</h3>
          </IonCardContent>
        </IonCard>

    );
};

export default Pedido;