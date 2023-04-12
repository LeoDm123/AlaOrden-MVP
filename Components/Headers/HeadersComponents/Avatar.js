import React from 'react'
import { View, Image } from 'react-native'
import styles from '../../../Constants/Styles'
import { assets } from '../../../Constants'

const Avatar = () => {
  return (
    <View style={styles.AvatarSize}>
        <Image
            source={assets.Leo}
            style={styles.AvatarView}
        />
        <Image
            style={styles.AvatarBadge}
            source={assets.badge}
        />
    </View>
  )
}

export default Avatar