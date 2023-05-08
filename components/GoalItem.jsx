import { StyleSheet, Text } from 'react-native'

export default function GoalItem({ text }) {
  return <Text style={styles.goal}>{text}</Text>
}

const styles = StyleSheet.create({
  goal: {
    color: 'white',
    backgroundColor: 'violet',
    padding: 6,
    marginTop: 5,
  },
})
