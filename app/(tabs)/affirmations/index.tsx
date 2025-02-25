import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/Appgradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery'
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationsGallery'
import { StatusBar } from 'expo-status-bar'

const Affirmations = () => {
  return (
    <View className='flex-1'>
      <AppGradient 
        colors={["#2e1f58", "#54426b", "#a790af"]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className='text-zinc-50 text-3xl font-bold'>Change Your beleifs with Affirmations</Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => (
              <GuidedAffirmationsGallery
                key={g.title}
                title={g.title}
                previews={g.data}/>
              ))}
          </View>
        </ScrollView>
      </AppGradient>
      <StatusBar style="light" />
      
    </View>
  )
}

export default Affirmations