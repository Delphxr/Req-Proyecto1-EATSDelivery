import { IonContent, IonHeader,IonChip, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';



import './card_restaurant.css';

interface ContainerProps {
    nombre: string;

}

const Ingrediente: React.FC<ContainerProps> = ({ nombre }) => {
    return (
        <IonChip color="secondary" style={{ display: "inline-block", marginTop: "15px", marginRight: "5px" }}>
            <span className="bold_text">{ nombre }</span>
        </IonChip>
    );
};

export default Ingrediente;