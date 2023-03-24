import { ScrollView, StyleSheet, Text,  View } from 'react-native';
export default function Todooutput(props)
{
    return(
       
        <View style={styles.todocontainer}>
           <ScrollView>
          <Text style={styles.textstyle}>List of TODO's...</Text>
         
        {props.items.map((i)=> <Text key={i} style={styles.textstyle1}>{i}</Text>)}
        </ScrollView>
        </View>
        
    )
}
const styles = StyleSheet.create({
 
    todocontainer:
    {
      flex:5,
      padding:10,
    },
    textstyle:
    {
        fontSize:36,
    },
    textstyle1:
    {
        margin:10,
        padding:8,
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        backgroundColor:'cyan',
        borderRadius:30,
    }
  });
  