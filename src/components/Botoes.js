import { View, Text, TouchableHighlight } from 'react-native'
import BotoesCSS from './BotoesCSS'

export default function Botoes(props) {
    const styleButton = [BotoesCSS.Botao];
    if(props.Double) styleButton.push(BotoesCSS.BotaoDuplo);
    if(props.Operador) styleButton.push(BotoesCSS.BotaoOperacao);
    if(props.Triple) styleButton.push(BotoesCSS.BotaoTriplo);

  return (
    <TouchableHighlight onPress={props.onClick}>
      <Text style={styleButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}