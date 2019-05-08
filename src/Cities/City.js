import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

import { colors } from '../theme'

export default class City extends Component {
    static navigationOptions = (props) => ({
        title: props.navigation.state.params.city.city,
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: '400'
        }
    })

    state = {
        name: '',
        info: ''
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    submit = () => {
        if (this.state.name == '' || this.state.info == '') return

        const { city } = this.props.navigation.state.params
        const location = {
            name: this.state.name,
            info: this.state.info
        }
        // this.props.screenProps.addLocation(location, city)
        this.props.screenProps.addCity(city)
        this.setState({
            name: '',
            info: ''
        })
    }

    render() {
        const { city } = this.props.navigation.state.params
        console.log('city: ',city)
        return (
            <View style={{ flex: 1 }}>
                {
                    city.locations.map((location, index) => {
                        return (
                            <View>
                                <Text>{ location.name }</Text>
                            </View>
                        )
                    })
                }
                <TextInput
                    value={this.state.name}
                    placeholder='Location Name'
                    onChangeText={value => this.onChangeText('name', value)}
                    style={styles.input}
                    placeholderTextColor='white'
                />
                <TextInput
                    value={this.state.info}
                    placeholder='Information'
                    onChangeText={value => this.onChangeText('info', value)}
                    style={[styles.input, styles.inputBottom]}
                    placeholderTextColor='white'

                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.submit()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Add Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        position: 'absolute',
        height: 50,
        width: '100%',
        backgroundColor: colors.primary,
        bottom: 104,
        left: 0,
        color: 'white'
    },
    inputBottom: {
        bottom: 54
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    }
})