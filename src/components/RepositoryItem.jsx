import React from 'react'
import { View, StyleSheet } from 'react-native'
import StyledText from './StyledText'

const RepositoryItem = (props) => {
	return (
		<View
			key={props.id}
			style={styles.container}>
			<StyledText fontWeight='bold' fontSize='subheading'>Full Name: {props.description}</StyledText>
			<StyledText >Description: {props.language}</StyledText>
			<StyledText >Languaje: {props.stargazersCount}</StyledText>
			<StyledText >Stars: {props.stargazersCount}</StyledText>
			<StyledText >Forks: {props.forksCount}</StyledText>
			<StyledText >Review: {props.reviewCount}</StyledText>
			<StyledText >Rating: {props.ratingAverage}</StyledText>
		</View>
	)
}
// Styles container
const styles = StyleSheet.create({
	container: {
		padding: 20,
		paddingBottom: 5,
		paddingTop: 5
	},
})
export default RepositoryItem
