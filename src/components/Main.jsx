import React from 'react'
import { View, Text } from 'react-native'
import AppBar from './AppBar'
import RepositoryList from './RepositoryList'
import Login from './Login'
import { Route, Routes } from 'react-router-native'

const Main = () => {
    return (
        <View style={{ flexGrow: 1 }}>
            <AppBar/>
            <Routes>
                <Route path='/' element={<RepositoryList/>}/>
                <Route path='/signin' element={<Login/>}/>
            </Routes>
        </View>

    )
}

export default Main