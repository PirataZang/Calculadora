import { Dimensions, StyleSheet } from 'react-native'

export default StyleSheet.create({
    Botao: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        fontSize: 40,
        padding: 30,
        textAlign: 'center',
        color: '#fff',
        borderWidth: 2,
    },
    BotaoOperacao: {
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        fontSize: 40,
        padding: 30,
        textAlign: 'center',
        backgroundColor: '#ff6333',
        color: '#fff',
        borderWidth: 2,
    },
    BotaoDuplo: {
        width: (Dimensions.get('window').width / 4) * 2,
    },

    BotaoTriplo: {
        width: (Dimensions.get('window').width / 4) * 3,
    },

}); 