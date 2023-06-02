import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'

const parseThousands = (value) => {
    return value > 1000 ? `${Math.round(value / 100)/ 10}k` : String(value)
}

const RepositoryStants = (repo) => {
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <View>
                <StyledText textAlignCenter bold>Stars</StyledText>
                <StyledText subheading>{parseThousands(repo.stargazersCount)}</StyledText>
            </View>
            <View>
                <StyledText textAlignCenter bold>Forks</StyledText>
                <StyledText subheading>{parseThousands(repo.forksCount)}</StyledText>
            </View>
            <View>
                <StyledText textAlignCenter bold>Review</StyledText>
                <StyledText subheading>{parseThousands(repo.reviewCount)}</StyledText>
            </View>
            <View>
                <StyledText textAlignCenter bold>Rating</StyledText>
                <StyledText subheading>{parseThousands(repo.ratingAverage)}</StyledText>
            </View>
        </View>
    )
}

export default RepositoryStants