import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

const Home: React.FC = () => {
    const [showAlert, setShowAlert] = useState(false);
    const initDb = (): void => {
        console.log('initDB fired!');
        try {
            SQLite.create({
                name: 'data.db', location: 'default'
            }).then(async (db: SQLiteObject) => {
                try {
                    await db.executeSql("CREATE TABLE IF NOT EXISTS Usuario (Id IDENTITY(1,1) PRIMARY KEY NOT NULL, Nombre VARCHAR(64) NOT NULL, " +
                        "Apellido VARCHAR(64) NOT NULL, Username VARCHAR(32) NOT NULL, Password VARCHAR(32) NOT NULL, TipoUsuario INT NOT NULL)");

                    await db.executeSql("CREATE TABLE IF NOT EXISTS DireccionesXUsuario ( " +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdUsuario INT NOT NULL," +
                        "Nombre VARCHAR(32) NOT NULL," +
                        "Descripcion VARCHAR(256) NOT NULL," +
                        "Activo BIT NOT NULL," +
                        "FOREIGN KEY (IdUsuario) REFERENCES Usuario(Id))");

                    await db.executeSql("CREATE TABLE IF NOT EXISTS MetodosDePago" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdUsuario INT NOT NULL," +
                        "Nombre VARCHAR(32)," +
                        "NumeroDeTarjeta VARCHAR(16) NOT NULL, " +
                        "MesVencimiento INT NOT NULL, " +
                        "YearVencimiento INT NOT NULL," +
                        "CodigoSeguridad INT NOT NULL, " +
                        "Activo BIT NOT NULL," +
                        "FOREIGN KEY (IdUsuario) REFERENCES Usuarip(Id)" +
                        ")");


                    await db.executeSql("CREATE TABLE IF NOT EXISTS Categoria " +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL, " +
                        "Nombre VARCHAR(32) NOT NULL, " +
                        "Imagen VARCHAR(128) NOT NULL " +
                        ")");

                    await db.executeSql("CREATE TABLE IF NOT EXISTS Restaurante" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdCategoria INT NOT NULL," +
                        "Nombre VARCHAR(32) NOT NULL," +
                        "Direccion VARCHAR(64) NOT NULL," +
                        "FOREIGN KEY (IdCategoria) REFERENCES Categoria(Id)" +
                        ")");


                    await db.executeSql("CREATE TABLE IF NOT EXISTS EncargadoXRestaurante" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdEncargado INT NOT NULL," +
                        "IdRestaurante INT NOT NULL," +
                        "FOREIGN KEY (IdEncargado) REFERENCES Usuario(Id), " +
                        "FOREIGN KEY (IdRestaurante) REFERENCES Restaurante(Id)" +
                        ")");


                    await db.executeSql("CREATE TABLE IF NOT EXISTS ProductosMenu" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdRestaurante INT NOT NULL," +
                        "Nombre VARCHAR(32) NOT NULL," +
                        "Descripcion VARCHAR(64) NOT NULL," +
                        "Precio MONEY NOT NULL," +
                        "CantidadDisponible INT NOT NULL," +
                        "Activo BIT NOT NULL," +
                        "FOREIGN KEY (IdRestaurante) REFERENCES Restaurante(Id)" +
                        ")")



                    await db.executeSql("CREATE TABLE IF NOT EXISTS IngredientesXProducto" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdProducto INT NOT NULL," +
                        "Nombre VARCHAR(32) NOT NULL," +
                        "Descripcion VARCHAR(64) NOT NULL," +
                        "Cantidad INT NOT NULL," +
                        "UnidadDeMedida VARCHAR(16) NOT NULL," +
                        "FOREIGN KEY (IdProducto) REFERENCES ProductosMenu(Id)" +
                        ")");



                    await db.executeSql("CREATE TABLE IF NOT EXISTS Pedidos" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdUsuario INT NOT NULL," +
                        "IdDireccion INT NOT NULL," +
                        "IdRestaurante INT NOT NULL," +
                        "IdRepartidor INT NULL," +
                        "FOREIGN KEY (IdUsuario) REFERENCES Usuario(Id)," +
                        "FOREIGN KEY (IdDireccion) REFERENCES DireccionesXUsuario(Id)" +
                        "FOREIGN KEY (IdRestaurante) REFERENCES Restaurante(Id), " +
                        "FOREIGN KEY (IdRepartidor) REFERENCES Usuario(Id)" +
                        ")");


                    await db.executeSql("CREATE TABLE IF NOT EXISTS EstadoPedido" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdPedido INT NOT NULL," +
                        "Estado INT NOT NULL," +
                        "FechaHora DATETIME NOT NULL," +
                        "FOREIGN KEY (IdPedido) REFERENCES Pedidos(Id)" +
                        ")")


                    await db.executeSql("CREATE TABLE IF NOT EXISTS ProductosXPedido" +
                        "(" +
                        "Id IDENTITY(1,1) PRIMARY KEY NOT NULL," +
                        "IdPedido INT NOT NULL," +
                        "IdProducto INT NOT NULL," +
                        "Cantidad INT NOT NULL," +
                        "FOREIGN KEY (IdPedido) REFERENCES Pedidos(Id), " +
                        "FOREIGN KEY (IdProducto) REFERENCES ProductosMenu(Id)" +
                        ")");


                    /*const insert = await db.executeSql('insert into danceMoves (name) values (?)', ['Macarena']);
                    await console.log('Inserted Macarena: ', insert);*/
                } catch (e) {
                    console.log('SQL error: ', e);
                }
            })
        } catch (e) {
            setShowAlert(true);
            console.log('please use a device: ', e)
        }

    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Blank</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={initDb}>Init DB</IonButton>
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header={'Mamma mia!'}
                    message={'This will only work on a device. Please refer to the README.'}
                    buttons={['OK']}
                />

            </IonContent>
        </IonPage>
    );
};

export default Home;