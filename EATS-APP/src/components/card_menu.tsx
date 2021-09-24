import { IonContent, IonHeader,IonChip, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';



import './card_restaurant.css';

interface ContainerProps {
    nombre: string;
    ruta_imagen: string;
    descripcion: string;
    precio: string;
}

const Menu: React.FC<ContainerProps> = ({ nombre, ruta_imagen, descripcion, precio }) => {
    return (
        <IonCard button={true} type="button" href="/Detalles">
            <img className="image_card" src={ruta_imagen} />
            <IonChip color="primary" style={{ float: "right", margin: "15px" }}>
                <span className="bold_text">{precio}</span>
            </IonChip>
            <IonCardHeader>
                <IonCardTitle class="bold_text" color="primary">{nombre}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                {descripcion}
            </IonCardContent>

        </IonCard>
    );
};

export default Menu;