import { IonContent, IonHeader, IonInput, IonPage, IonTitle, IonSearchbar, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFooter, IonText, IonSlides, IonSlide, IonImg } from '@ionic/react';
import { IonGrid, IonRow, IonCol } from '@ionic/react';


import React, { useState } from 'react';
import logo from '../icons/logo.svg'
import Fondo from '../components/fondo_rojo';
import './login.css';

const Login: React.FC = () => {
    const [nombre, setnombre] = useState<string>();
    const [user, setuser] = useState<string>();
    const [direccion, setdireccion] = useState<string>();
    const [correo, setCorreo] = useState<string>();
    const [password, setPassword] = useState<string>();

    const [numero, setnumero] = useState<string>();
    const [codigo, setcodigo] = useState<string>();
    const [fecha, setfecha] = useState<string>();
    return (
        <IonPage>
            <IonHeader>

            </IonHeader>
            <IonContent scrollY={false}>

                <Fondo titulo="" subtitulo="" />



                <div className="login_elements" >

                    <img className="image_eats" src='../assets/images/logo_texto.png' alt="Placeholder-Image" />

                    <form>
                        <IonCard>
                            <IonInput value={nombre} placeholder="Nombre Completo" onIonChange={e => setnombre(e.detail.value!)}></IonInput>
                        </IonCard>

                        <IonCard>
                            <IonInput value={user} placeholder="Usuario" onIonChange={e => setuser(e.detail.value!)}></IonInput>
                        </IonCard>

                        <IonCard>
                            <IonInput value={direccion} placeholder="Direccion" onIonChange={e => setdireccion(e.detail.value!)}></IonInput>
                        </IonCard>

                        <IonCard>
                            <IonInput value={correo} placeholder="Correo Electronico" onIonChange={e => setCorreo(e.detail.value!)}></IonInput>
                        </IonCard>

                        <IonCard>
                            <IonInput value={password} placeholder="Contraseña" type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                        </IonCard>



                        <h4 style={{ marginTop: "50px", marginLeft: "20px", color: "white", textAlign: "left" }}>Metodo de Pago:</h4>

                        <IonCard>
                            <IonInput value={numero} placeholder="Numero Tarjeta" onIonChange={e => setnumero(e.detail.value!)}></IonInput>
                        </IonCard>

                        <IonCard>
                            <IonInput value={codigo} placeholder="Codigo de Seguridad" type="password" onIonChange={e => setcodigo(e.detail.value!)}></IonInput>
                        </IonCard>

                        <IonCard>
                            <IonInput value={fecha} placeholder="Fecha vencimiento" onIonChange={e => setfecha(e.detail.value!)}></IonInput>
                        </IonCard>


                        <IonButton shape="round" size="large" fill="clear" href="/user" style={{ float: "none", width: "calc(100% - 40px)", background: "white", borderRadius: "50px", marginLeft: "20px", marginTop: "20px" }}>
                            <strong className="bold_text" style={{ color: "#D82B5F" }}>Registrarse</strong>
                        </IonButton>
                    </form>
                    <h4 style={{ marginTop: "50px", marginBottom: "50px", color: "#FFC961", textAlign: "center" }}>Ya tiene cuenta? <a href="/" style={{ color: "#FFC961" }}>Inicie Sesión!</a></h4>


                </div>

            </IonContent>
        </IonPage>
    );
};

export default Login;
