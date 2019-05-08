import React, { Component } from 'react'

import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities'
import City from './Cities/City'

import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import { colors } from './theme'

const CitiesNav = createStackNavigator({
    Cities: { screen: Cities },
    City: { screen: City }},
    {
    navigationOptions: {
        headerTitleStyle: {
            backgroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
});

const BottomTab = createBottomTabNavigator({
    Cities: { screen: CitiesNav },
    AddCity: { screen: AddCity }
});

const Tabs = createAppContainer(BottomTab);

export default Tabs