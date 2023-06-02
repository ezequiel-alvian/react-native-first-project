import React from 'react'
import { View, Text } from 'react-native'
import theme from '../theme'


const styles=({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    colorPrimary: {
        fontSize: theme.colors.primary
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    textAlignCenter: {
        textAlign:'center'
    }
})

export default function StyledText ({text, bold, colorPrimary, colorSecondary, subheading, textAlignCenter, children, ...restOfProps}) {
    const textStyles =[
        styles.text,
        bold && styles.bold,
        colorPrimary && styles.colorPrimaryd,
        colorSecondary && styles.colorSecondary,
        subheading && styles.subheading,
        textAlignCenter && styles.textAlignCenter
    ]

    return(
        <Text style={textStyles} {...restOfProps}>
            {children}
        </Text>
    )
}