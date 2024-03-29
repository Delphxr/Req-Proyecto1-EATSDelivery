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
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';


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
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/user/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/user/tab2">
            <Tab2 />
          </Route>
          <Route path="/user/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/user">
            <Redirect to="/user/tab2" />
          </Route>

        </IonRouterOutlet>
        <IonTabBar class="home_bar" slot="bottom">
          <IonTabButton class="home_tab" tab="tab1" href="/user/tab1">
            <IonIcon icon={location} />
            <IonLabel>Direcciones</IonLabel>
          </IonTabButton>
          <IonTabButton class="home_tab" tab="tab2" href="/user/tab2">
            <IonIcon icon={fastFood} />
            <IonLabel>Explorar</IonLabel>
          </IonTabButton>
          <IonTabButton class="home_tab" tab="tab3" href="/user/tab3">
            <IonIcon icon={cart} />
            <IonLabel>Carrito</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
