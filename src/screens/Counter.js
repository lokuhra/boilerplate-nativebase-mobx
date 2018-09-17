import React, {Component} from 'react';
import {Container, Button, Text } from "native-base";
import { inject, observer } from 'mobx-react/native'
import { navigationOptions} from "../config/navOptions";

@inject('store')
@observer
class Counter extends Component {
    static navigationOptions = ({navigation}) => ({
        title:"Counter",
        ...navigationOptions
    })

    render() {
        const {store: {counterStore}} = this.props;
        return (
            <Container>
                <Text>Contador actual: {counterStore.count}</Text>
                <Button onPress={() => counterStore.increment()}>
                    <Text>incrementar</Text>
                </Button>
                <Button onPress={() => counterStore.decrement()}>
                    <Text>Decrementar</Text>
                </Button>
            </Container>
        );
    }
}

export default Counter;