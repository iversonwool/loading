import React from 'react'

import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  Platform
} from 'react-native'
import PropTypes from 'prop-types'

export default function LoadingView(props) {
  const { label } = props
  return (
    <View style={{ position: 'absolute', left: 0, top: 0, bottom : 0, right: 0}}>
      <View style={styles.container}>
        <View style={styles.squareView}>
          <ActivityIndicator size={Platform.OS === 'ios' ? 'small' : 'large'} />
          {label && <Text allowFontScaling={false} style={styles.label}>{label}</Text>}
        </View>
      </View>
    </View>
  )
}

LoadingView.protoTypes = {
  label: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000070'
  },
  squareView: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  label: {
    marginTop: 15,
    fontSize: 12,
    color: 'white',
    alignSelf: 'center'
  }
})
