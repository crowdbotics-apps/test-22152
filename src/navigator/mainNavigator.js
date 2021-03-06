import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile165717Navigator from '../features/UserProfile165717/navigator';
import Tutorial165716Navigator from '../features/Tutorial165716/navigator';
import NotificationList165688Navigator from '../features/NotificationList165688/navigator';
import Settings165687Navigator from '../features/Settings165687/navigator';
import Settings165679Navigator from '../features/Settings165679/navigator';
import UserProfile165677Navigator from '../features/UserProfile165677/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile165717: { screen: UserProfile165717Navigator },
Tutorial165716: { screen: Tutorial165716Navigator },
NotificationList165688: { screen: NotificationList165688Navigator },
Settings165687: { screen: Settings165687Navigator },
Settings165679: { screen: Settings165679Navigator },
UserProfile165677: { screen: UserProfile165677Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
