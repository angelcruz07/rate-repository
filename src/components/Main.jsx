import React from 'react'
import { View, Text, } from 'react-native'
import RepositoryList from './RepositoryList'
import { Navigate, Route, Routes, } from 'react-router-native'
import AppBar from './AppBar'

const Main = () => {
	return (
		<View style={{flex: 1 }}>
			<AppBar/>
			<Routes>
				<Route path='/'  element={<RepositoryList />} exact>
				</Route>
				<Route path='/signin' element={<Text>Working on it </Text>} exact></Route>
				<Route path='*' element={<Navigate to='/' />} />
			</Routes>
		</View>
	)
}

export default Main
