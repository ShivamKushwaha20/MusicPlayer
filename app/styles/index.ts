import { StyleSheet } from "react-native"
import { colors, fontSize } from "../constants/tokens"


// default styles for the app
export const defaultStyles = StyleSheet.create({
    // container style for app
    container:{
        flex: 1,
        backgroundColor: colors.background,
    },

    // text defualt color for app
    text:{
        fontSize: fontSize.base,
        color : colors.text
    }
})


// creating utiles stylesheet for the app
export const utilsStyles = StyleSheet.create({

})