import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  const [goals, setGoals] = useState([])
  const [currentGoal, setCurrentGoal] = useState('')

  const updateGoal = (e) => {
    setCurrentGoal(e.nativeEvent.text)
  }

  const addGoal = () => {
    setGoals([...goals, currentGoal])
    console.log(goals)
  }

  return (
    <View style={styles.appContainer}>
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
      <View style={styles.goalsList}>
        {goals.map((goal) => (
          <Text style={styles.goal}>{goal}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 70,
    flexDirection: 'column',
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  addGoalBtn: {
    backgroundColor: 'violet',
  },
  goalsList: {
    marginTop: 50,
    flex: 12,
  },
  goal: {
    color: 'white',
    backgroundColor: 'violet',
    padding: 6,
    marginTop: 5,
  },
})
