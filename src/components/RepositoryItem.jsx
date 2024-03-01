import React from 'react'
import { Image,  View, StyleSheet } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'

const RepositoryItemHeader = ({ ownerAvatarUrl, language, description, fullName,  }) => (
	<View style={{ flexDirection: 'row' , paddingBottom: 2 }}>
		<View style={{ flex: 0 , paddingRight: 10 }}>
			<Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
		</View>
		<View style={{ paddingLeft: 10, flex: 1, justifyContent: 'center' }} >
			<StyledText fontWeight='bold'>{fullName}</StyledText>
			<StyledText color='secundary' >{description}</StyledText>
			<StyledText style={styles.language} >{language}</StyledText>
		</View>
	</View>
)

const RepositoryItem = (props) => {
	return (
		<View
			key={props.id}
			style={styles.container}>
			<RepositoryItemHeader {...props}/>
			<RepositoryStats {...props} />
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
	language: {
		padding: 4,
		color: theme.colors.white,
		backgroundColor: theme.colors.primary,
		alignSelf: 'flex-start',
		borderRadius: 4,
		overflow: 'hidden',
		marginVertical: 4
	},
	image: {
		width: 48,
		height: 48,
		borderRadius: 4
	}
})
export default RepositoryItem
