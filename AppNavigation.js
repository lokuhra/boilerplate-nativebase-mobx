import {createStackNavigator} from 'react-navigation'

import Home from './src/screens/Home'
import Counter from './src/screens/Counter'

const AppNavigation = createStackNavigator({
    Home: {screen : Home},
    Counter : {screen : Counter}
})
export default AppNavigation