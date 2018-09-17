import React from "react";
import {Button, Text} from 'native-base'

export const navigationOptions = ({
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            >
                <Text>Icon</Text>
            </Button>),
        headerStyle:{
            backgroundColor:'red',
        },
    }
)