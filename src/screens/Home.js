import React, {Component} from 'react';

import {Container, Button, Text } from "native-base";
import {Col, Grid} from "react-native-easy-grid";

import {inject, observer} from 'mobx-react/native';
import {navigationOptions} from "../config/navOptions";

@inject('store')
@observer
class Counter extends Component {
    static navigationOptions = ({navigation}) => ({
        title:"Home",
        ...navigationOptions
    })
    render() {
        const { navigation } = this.props;
        const {store: {counterStore}} = this.props;
        return (
                <Container>
                    <Grid>
                        <Col style={{ backgroundColor: '#635DB7'}}>
                            <Button onPress={()=>navigation.navigate('Counter')}>
                                <Text>
                                    Click Me!
                                </Text>
                            </Button>
                            <Text>Contador actual: {counterStore.count}</Text>
                        </Col>
                        <Col style={{ backgroundColor: '#00CE9F'}} />
                    </Grid>
                </Container>
        );
    }
}

export default Counter;