import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { caretForwardCircle } from 'ionicons/icons';



interface ContainerProps {
    nombre: string;
    ruta_imagen: string;
}

const Categoria: React.FC<ContainerProps> = ({ nombre, ruta_imagen }) => {
    return (
        <IonCard class="scroll_element" button={true} type="button" style={{margin:"8px", display:"inline-block"}} href="/CategoriaU">
            <IonImg class="image_category" src={ruta_imagen} alt="pizza.png" />

            <IonCardTitle>
                <h6 className="bold_text" color="dark" style={{textAlign:"center"}}>{nombre}</h6>
            </IonCardTitle>

            <IonIcon class="button_category" icon={caretForwardCircle} color="primary"></IonIcon>
        </IonCard>

    );
};

export default Categoria;