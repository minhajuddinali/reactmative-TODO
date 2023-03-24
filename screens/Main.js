
import { StyleSheet, View } from 'react-native';
import Todoinput from '../components/Todoinput';
import Todooutput from '../components/Todooutput';
import { useState } from 'react';
export default function Main() {

  const [getinput,setTodo]=useState([]);

  function addtodo(enteredTodoText)
  {
    //console.log(enteredTodoText);
    setTodo((fun)=>
    [...fun,enteredTodoText]);
  }
  return (
    <View style={styles.mycontainer}>
        <Todoinput onAddTodo={addtodo}/>
        <Todooutput items={getinput}/>
    </View>
  );
}

const styles = StyleSheet.create({
  mycontainer: {
    flex:1,
   paddingTop:50,
   paddingHorizontal:16,
  },
});
