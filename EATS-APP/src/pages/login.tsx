import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import Fondo from '../components/fondo_rojo';
import './login.css';

const Login: React.FC = () => {
    const [correo, setCorreo] = useState<string>();
    const [password, setPassword] = useState<string>();
    return (
        <IonPage>
            <IonHeader>

            </IonHeader>
            <IonContent scrollY={false}>

                <Fondo titulo="" subtitulo="" />



                <div className="login_elements">
                    <img className="image_eats" src='../assets/images/logo_texto.png' alt="Placeholder-Image" />

                    <IonCard>
                        <IonInput value={correo} placeholder="Correo Electronico" onIonChange={e => setCorreo(e.detail.value!)}></IonInput>
                    </IonCard>

                    <IonCard>
                        <IonInput value={password} placeholder="Contraseña"  type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                    </IonCard>

                    <IonButton shape="round" size="large" fill="clear" href="/user" style={{ float: "none", width: "calc(100% - 40px)", background: "#FFC961", borderRadius: "50px",marginLeft: "20px", marginTop:"20px" }}>
                        <strong className="bold_text" style={{ color: "white" }}>Iniciar Sesión</strong>
                    </IonButton>

                    <h4 style={{marginTop:"50px",color:"#FFC961", textAlign:"center"}}>No tiene cuenta? Registrese!</h4>

                    <IonButton shape="round" size="large" fill="clear" href="/Register" style={{ float: "none", width: "calc(100% - 40px)", background: "white", borderRadius: "50px",marginLeft: "20px", marginTop:"20px" }}>
                        <strong className="bold_text" style={{ color: "#D82B5F" }}>Registrarse</strong>
                    </IonButton>
                </div>

            </IonContent>
        </IonPage>
    );
};

export default Login;
