import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

export default function GoalInput({
  addGoal,
  updateGoal,
  currentGoal,
  closeModal,
  isModalOpen,
}) {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.mainContainer}>
        <Image
          style={styles.goalsIcon}
          source={require('../assets/images/goals.png')}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your goal!"
          value={currentGoal}
          onChange={updateGoal}
        ></TextInput>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button color="white" title="Add goal" onPress={addGoal} />
          </View>
          <View style={styles.button}>
            <Button color="white" title="Cancel" onPress={() => closeModal()} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#AD44B7',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    width: '60%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 10,
  },
  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    marginHorizontal: 10,
    paddingHorizontal: 24,
    backgroundColor: 'violet',
  },
  goalsIcon: {
    height: 100,
    width: 100,
    marginBottom: 30,
  },
})
