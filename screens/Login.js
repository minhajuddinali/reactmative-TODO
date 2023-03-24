import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View,Image,Button, ScrollView } from 'react-native';

export default function Login({navigation}) {
        function toDo()
        {
            navigation.navigate('main');
        }
  return (
    <View style={styles.container}>
        <ScrollView>
      <View style={styles.innercontainer}>
        <Text style={styles.textstyle}>⋮⋮TODO APP⋮⋮</Text>
      <Image
        style={{width:400,height:150,paddingTop:25}}
        source={require('../assets/ngit.png')}
      />
      </View>
      <View style={styles.innercontainer}>
        <TextInput placeholder='Enter your name..' style={styles.input}/>
        <Button title='continue' color={'black'} onPress={toDo} />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:70,
    paddingHorizontal:10,
    borderWidth:2
  },
  innercontainer:
  {
   
      flex:1,
      flexDirection:'column',
     alignItems:'center',
    
 
  },
  textstyle:
  {
    paddingBottom:30,
    fontSize:40,
    fontWeight:'bold',
  },
  input:
  {
    borderWidth:1,
    width:'90%',
    padding:10,
    fontSize:24,
    
    marginVertical:10,
  },
  
});
