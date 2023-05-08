import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [currentGoal, setCurrentGoal] = useState('')

  const updateGoal = (e) => {
    setCurrentGoal(e.nativeEvent.text)
  }

  const addGoal = () => {
    setGoals([...goals, { text: currentGoal, id: Math.random().toString() }])
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        addGoal={addGoal}
        updateGoal={updateGoal}
        currentGoal={currentGoal}
      />
      <View style={styles.goalsList}>
        <FlatList
          data={goals}
          renderItem={({ item }) => {
            return <GoalItem text={item.text} />
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 60,
    marginHorizontal: 40,
    flexDirection: 'column',
    flex: 1,
  },
  goalsList: {
    marginVertical: 50,
    flex: 12,
  },
})
