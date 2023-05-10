import { useState } from 'react'
import { FlatList, StyleSheet, View, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goals, setGoals] = useState([])
  const [currentGoal, setCurrentGoal] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const updateGoal = (e) => {
    setCurrentGoal(e.nativeEvent.text)
  }

  const addGoal = () => {
    setGoals([...goals, { text: currentGoal, id: Math.random().toString() }])
    setCurrentGoal('')
    closeModal()
  }

  const deleteGoal = (id) => setGoals(goals.filter((goal) => goal.id !== id))

  const closeModal = () => setIsModalOpen(false)

  const openModal = () => setIsModalOpen(true)

  return (
    <View style={styles.appContainer}>
      <View style={styles.button}>
        <Button color="white" title="Add new goal!" onPress={openModal} />
      </View>
      <GoalInput
        addGoal={addGoal}
        updateGoal={updateGoal}
        currentGoal={currentGoal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <View style={styles.goalsList}>
        <FlatList
          data={goals}
          renderItem={({ item }) => {
            return (
              <GoalItem text={item.text} id={item.id} deleteGoal={deleteGoal} />
            )
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 80,
    marginHorizontal: 40,
    flexDirection: 'column',
    flex: 1,
  },
  goalsList: {
    marginVertical: 50,
    flex: 12,
  },
  button: {
    backgroundColor: 'violet',
  },
})
