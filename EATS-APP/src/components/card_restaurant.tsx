import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';



import './card_restaurant.css';

interface ContainerProps {
    nombre: string;
    ruta_imagen: string;
    descripcion: string;
}

const Restaurant: React.FC<ContainerProps> = ({ nombre, ruta_imagen, descripcion }) => {
    return (
        <IonCard button={true} type="button">
            <img className="image_card" src={ruta_imagen} />
            <IonCardHeader>
                <IonCardTitle class="bold_text" color="primary">{nombre}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {descripcion}
            </IonCardContent>
        </IonCard>
    );
};

export default Restaurant;