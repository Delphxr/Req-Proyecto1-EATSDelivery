import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle, fastFood, location, cart} from 'ionicons/icons';


/* Importamos las paginas*/ 
import TabsUser from './main_tabs'
import Login from './pages/login';
import OrdenF from './pages/orden_finalizada';
import Categorias_res from './pages/ver_restaurantes_categoria'
import Restaurante from './pages/restaurante'
import Detalles from './pages/detalles_producto'
import Historial from './pages/historial'
import Editar_direccion from './pages/editar_direccion'
import Register from './pages/register'

import TabsRepartidor from './repartidor_tabs'

import Test from './pages/database_test'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';



const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      
      <IonRouterOutlet animated>          

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/user">
              <TabsUser />
            </Route>

            <Route exact path="/ordenF">
              <OrdenF />
            </Route>

            <Route exact path="/CategoriaU">
              <Categorias_res />
            </Route>

            <Route exact path="/RestauranteU">
              <Restaurante />
            </Route>

            <Route exact path="/Detalles">
              <Detalles />
            </Route>

            <Route exact path="/HistorialU">
              <Historial />
            </Route>

            <Route exact path="/editar_dir">
              <Editar_direccion />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>


            <Route exact path="/rep">
              <TabsRepartidor />
            </Route>


            

            <Route exact path="/">
              <Redirect to="/user" />
            </Route>

          </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

///<Route path="/home" component={Test} exact={true} />
