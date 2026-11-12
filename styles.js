import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20, 
        margin: 20, 
    },
  
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
        backgroundColor: '#eee',
    },

    title1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    title2: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 10,
        backgroundColor: '#eee',
         padding: 5, 
    },

    text: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },

    text1:{
        marginBottom: 10,
    },

    section: {
        borderWidth: 2,
        borderColor: '#333',
        padding: 10,
        marginBottom: 20,
  },
  
    box: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginTop: 10,
    }
});