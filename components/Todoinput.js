import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';


export default function Todoinput(props)
{
    const [enteredTodoText,setEnteredTodoText]=useState('');

    function todoinputhandler(enteredText)
    {
    // console.log(enteredText);
    setEnteredTodoText(enteredText);

    }
    function addtodohandler()
    {
      
        props.onAddTodo(enteredTodoText);
    }
    return(
    <View style={styles.inputcontainer}>
        <TextInput 
        placeholder='Enter your Todo'
         style={styles.textinput}
         onChangeText={todoinputhandler}
         />
        <Button title='Add Todo'
        onPress={addtodohandler}
        />
         
      </View>
    );

}
const styles = StyleSheet.create({
    inputcontainer:
    {
        flex:1,
        flexDirection:'row',
       alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:3,
        borderBottomColor:'cyan',
        
    },
    textinput:
    {
      borderWidth:2,
      width:'70%',
      padding:8,
      fontSize:20,
      borderRadius:15,
    }
  });