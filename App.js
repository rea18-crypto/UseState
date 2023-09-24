import { useState } from 'react';
import { Image, Text, View } from 'react-native';

const App=() =>{
  const[showFlashlight,setshowFlashlight]=useState(false);
  const[ showCount,setShowCount]=useState(false);
  const[buttonDisabled,setButtonDisabled]=useState(false);
  const[showImage1,setShowImage1]=useState(true);
  const [isToggled,setIsToggled]= useState(false);
  const [count,setCount]= useState(0);

  const buttonFlash=()=>{
setshowFlashlight(!showFlashlight);
setButtonDisabled(true);
  };
  const buttonCounter=()=>{
    setShowCount(!showCount);
    setButtonDisabled(true);
  };
  const toggleImage=()=>{
    setShowImage1(!showImage1);
    setIsToggled(!isToggled);
  };
const increment = ()=>{
  setCount(Count +1);
};
const decrement = ()=>{
  if (count >0){
    setCount(count -1);
  }
};
const toggleComponentVisibility= ()=> {
  setshowFlashlight(null);
  setShowCount(null);
  setButtonDisabled(false);
};

return(
  <View style={{flex: 1,alignments:'center', height:'100%'}}>
    <View style={{flexDirection:'row',marginTop:'40px', marginBottom:'80px',justifyContent:'space-evenly',width:'390px'}}>
<Button title= "Flashlight" onPress = {buttonFlash} disabled={buttonDisabled}/>
<Button title= "Counter" onPress = {buttonCounter} disabled={buttonDisabled}/>
    </View>
< View style ={{width:'390px', justifyContent:'center',alignItems:'center'}}>
  {showFlashlight &&(
    <View style= {{width: '320px',}}>
     <View style= {{marginBottom: '80px',}}>
      {showImage1?(
        <Image source = {{uri:'https://cdn.iconscout.com/icon/premium/png-256-thumb/flashlight-off-647898.png' }}
        style= {{width:'320', height: 320, marginBottom:'50px'}}
        />
      ):(
        <Image source = {{uri: 'https://i.pinimg.com/originals/ea/3e/36/ea3e366de3807e141320695e86d15539.png'}} 
        style= {{width:320,height:320,marginBottom:'50px',backgroundColor:'beige'}}
        />
      )}
      {isToggled?(
        <Button title = "Off" color ={'red'} onPress = {toggleImage} />
      ):(
        <Button title = "On" color ={'#42C32E'} onPress  = {toggleImage}/>
      )}
      </View>
      <Button title= {showFlashlight ? 'Back': 'Show Component'} onPress ={toggleComponentVisibility}/>
      </View>
  )}

  {ShowCount && (
    <View style = {{width:'320px'}}>
      <View style  ={{ justifyContent:'center', alignItems: 'center'}}>
        <Text style = {{ fontSize: 200, fontWeight:'bold'}}>{count}
        </Text>
      </View>
      {<View style = {{flexDirection:'row', justifyContent:'space-evenly',marginTop:'60px'}}>
        <Button title = "-1" color ='GREEN' onPress={decrement}/>
        <Button title = "+1" color ='GREEN' onPress={increment}/>
        </View>}
        <View style = {{width : '320px', marginTop:"125px"}}>
<Button title = {showCount ? 'Back':''} onPress = {toggleComponentVisibility}/>
        </View>
  </View>
)}
</View>
</View>
);
  };
  export default App;