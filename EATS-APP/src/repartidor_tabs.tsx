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
import { ellipse, square, triangle, fastFood, location, cart } from 'ionicons/icons';
import Tab1 from './pages/repartidor_tab1';
import Tab2 from './pages/repartidor_tab2';



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

const Repartidor: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/rep/tab1">
                        <Tab1 />
                    </Route>
                    <Route exact path="/rep/tab2">
                        <Tab2 />
                    </Route>

                    <Route exact path="/rep">
                        <Redirect to="/rep/tab1" />
                    </Route>

                </IonRouterOutlet>
                <IonTabBar class="home_bar" slot="bottom">
                    <IonTabButton class="home_tab" tab="tab1" href="/rep/tab1">
                        <IonIcon icon={location} />
                        <IonLabel>Solicitudes</IonLabel>
                    </IonTabButton>
                    <IonTabButton class="home_tab" tab="tab2" href="/rep/tab2">
                        <IonIcon icon={fastFood} />
                        <IonLabel>Tus Pedidos</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default Repartidor;
