import React from 'react'
import { View, Text } from 'react-native'

const RepositoryItem = (props) => {
	return (
		<View
			key={props.id}
			style={{ padding: 20, paddingBottom: 5, paddingTop: 5 }}>
			<Text style={{ fontWeight: 'bold', marginBottom: 5 }}>
				id: {props.fullName}
			</Text>
			<Text>Full Name: {props.description}</Text>
			<Text>Description: {props.language}</Text>
			<Text>Languaje: {props.stargazersCount}</Text>
			<Text>Stars: {props.stargazersCount}</Text>
			<Text>Forks: {props.forksCount}</Text>
			<Text>Review: {props.reviewCount}</Text>
			<Text>Raiting: {props.ratingAverage}</Text>
		</View>
	)
}
export default RepositoryItem
