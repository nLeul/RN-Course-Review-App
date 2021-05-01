import React from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,ActivityIndicator} from 'react-native';

import Star from './Star';

class Rating extends React.Component{

    state = {
        numOfRatedStar:-1,
        colors : ['#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3']
    }

    starClick = (num,click)=>{  
        let updateColors = ['#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3','#D3D3D3'];
            updateColors = updateColors.map((item,i)=>{
                let color = '';
                    if(i <= num-1){
                        if(click === "click"){
                            color = '#FFD700';
                        }else if(click === 'over'){
                            color = 'lightblue';
                        }
                        
                    }else{
                        color = item;
                    }
                    return color;
                });
        this.setState({numOfRatedStar:num, colors:updateColors});
    }

    render(){

      let stars = [1,2,3,4,5].map((val,index)=><Star key={val} 
        rating={val} 
        starClick={this.starClick}
        color = {this.state.colors[index]}
        />);

        return (
            <View style={{marginLeft:'25%',flexDirection: 'row',marginBottom:'5%'}}>
               {stars}
            </View>
        );
    }
}

export default Rating;