import {createAppContainer, createMaterialTopTabNavigator, createStackNavigator} from "react-navigation";
import PurchaseSummaryScreen from '../screens/main/cart-summary/PurchaseSummaryScreen'

let view = "PurchaseSummary";

const MainStack = createMaterialTopTabNavigator(
    {
        PurchaseSummary: PurchaseSummaryScreen,
    },
    {
        initialRouteName: view,
        lazy: true,
        tabBarPosition: "bottom",
        tabBarOptions: {
            style: {
                display: "none"
            }
        }
    }
);
const RootStack = createStackNavigator(
    {
        Main: {
            screen: MainStack
        }
    },
    {
        initialRouteName: "Main",
        headerMode: "none"
    }
);

const Navigation = createAppContainer(RootStack);

export default Navigation;

