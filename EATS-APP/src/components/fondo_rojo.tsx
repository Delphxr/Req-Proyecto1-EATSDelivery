import { IonContent, IonHeader, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { close } from 'ionicons/icons';

import './fondo_rojo.css';

interface ContainerProps {
    titulo: string;
    subtitulo: string;
}

const Fondo: React.FC<ContainerProps> = ({ titulo, subtitulo }) => {
    return (
        <div style={{overflow:"hidden", overflowY:"hidden"}}>
            <header>
                <img src='../assets/images/comida_fondo.jpg' alt="Placeholder-Image" />
                <section>
                    <h1 className="bold_text" style={{ textAlign: "center", fontSize: "45px", overflow: "hidden", whiteSpace: "nowrap" }}>{titulo}</h1>
                    <h3 style={{ textAlign: "center" }}>{subtitulo}</h3>
                </section>
            </header>

            
        </div>

    );
};

export default Fondo;