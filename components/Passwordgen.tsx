import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState } from 'react'
import Slider from '@react-native-community/slider'
import Icon from "react-native-vector-icons/FontAwesome"
import Clipboard from "@react-native-clipboard/clipboard"


export default function Passwordgen() {
    const [password,setPassword] = useState("")
    const [length,setlength] = useState(4)
    const [numbers,setNumbers] = useState(false)
    const [char,setChar] = useState(false)
    const [capital,setCapital] = useState(false)


function generatePassword(){
    let str="abcdefghijklmnopqrstuvwxyz"
    if(capital){
        str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(numbers){
        str+="0123456789"
    }
    if(char){
        str+="!@#$%"
    }
    let pass=""
    for (let i = 0; i < length; i++) {
        pass+=str[Math.floor(Math.random()*str.length)] 
    }
    setPassword(pass)
 }


 const handlecopy=()=>{
        Clipboard.setString(password)
        Alert.alert("Copied to Clipboard")
    }

  
 return (
    <SafeAreaView>
    <View>
      <View style={styles.conrainer} >
      <Text style={styles.heading}>Password generator</Text>

    <View style={{display:"flex",flexDirection:"row"}}>
    <Pressable style={[capital ? styles.button : styles.selectedButton ]} onPress={()=>setCapital(!capital)}>
            <Text style={capital ? styles.seletedLabel : styles.label}>Capital</Text>     
        </Pressable>
        <Pressable style={[numbers ? styles.button : styles.selectedButton ]} onPress={()=>setNumbers(!numbers)}>
            <Text style={numbers ? styles.seletedLabel : styles.label}>Numbers</Text>     
        </Pressable>
        <Pressable style={char ? styles.button : styles.selectedButton} onPress={()=>setChar(!char)}>
            <Text style={char ? styles.seletedLabel : styles.label}>Characters</Text>
        </Pressable>
    </View>
       
       <View style={styles.inputontainer}>
       <TextInput style={styles.input} onChangeText={newText=>setPassword(newText)} value={password} />
       <Pressable onPress={handlecopy}>
       <Icon name="copy" size={25} color="blue"/>
       </Pressable>
       </View>
        <View style={{display:"flex",alignItems:"center",flexDirection:"row"}}>
            <Text style={styles.label}>{length}</Text>
            <Slider
             style={styles.slider}
             minimumValue={2}
             maximumValue={12}
             step={1}
             value={length}
             onValueChange={setlength}
             minimumTrackTintColor="black"
             maximumTrackTintColor="gray"
             thumbTintColor="coral"
            />
        </View>
        <TouchableOpacity style={styles.submitbtn} onPress={generatePassword}>
            <Text style={{fontSize:18,color:"black",fontWeight:"500"}}>
            click me  
            </Text>
        </TouchableOpacity>    
      </View>
    </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    conrainer:{
        height:"100%",
       display:"flex",
       paddingTop:100,
       alignItems:"center"
    },
    heading:{
        fontSize:26,
        fontWeight:"bold",
        marginBottom:35
    },
    button:{  
        backgroundColor: 'coral',
        borderWidth: 0,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '25%',
    },
    selectedButton:{
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: 'oldlace',
        alignSelf: 'flex-start',
        marginHorizontal: '1%',
        marginBottom: 6,
        minWidth: '25%',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500',
        color: 'coral',
    },
    slider:{
        width: 300,
        height: 40,
         
    },
    submitbtn:{
        backgroundColor: '#9acd32',      
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        elevation: 2, // For Android shadow
        shadowColor: '#000', // For iOS shadow
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        alignItems: 'center',
        marginTop:20
    },
    input:{
        width: '70%',
        fontSize: 21,
    },
    inputontainer:{
        paddingHorizontal: 20,
        marginTop:18,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    label:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',  
    },
    seletedLabel:{
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '500',
    }
})
