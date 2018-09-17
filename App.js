import React from 'react';

import {Root} from 'native-base';
import { Font, AppLoading } from "expo";

import {observer} from 'mobx-react/native';
import {Provider} from 'mobx-react';
import store from './src/stores';

import AppNavigation from './AppNavigation'

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fontLoading: true };
    }
    async componentWillMount() {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ fontLoading: false });
    }
  render() {
      if (this.state.fontLoading) {
          return (
              <Root>
                  <AppLoading />
              </Root>
          );
      }
    return (
        <Provider store={store}>
            <AppNavigation/>
        </Provider>
    );
  }
}

