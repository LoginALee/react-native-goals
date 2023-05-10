import { Pressable, StyleSheet, Text } from 'react-native'

export default function GoalItem({ text, deleteGoal, id }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={() => deleteGoal(id)}
    >
      <Text style={styles.goal}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  goal: {
    color: 'white',
    backgroundColor: 'violet',
    padding: 6,
    marginTop: 5,
  },
  pressedItem: {
    opacity: 0.4,
  },
})
