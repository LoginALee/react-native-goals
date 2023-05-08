import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

export default function GoalInput({ addGoal, updateGoal, currentGoal }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal!"
        value={currentGoal}
        onChange={updateGoal}
      ></TextInput>
      <View style={styles.addGoalBtn}>
        <Button color="white" title="Add goal" onPress={addGoal} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  addGoalBtn: {
    backgroundColor: 'violet',
  },
})
