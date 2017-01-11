/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
} from 'react-native';
var imgs = [
  'http://ituring.com.cn/bookcover/1442.796.jpg',
  'http://ituring.com.cn/bookcover/1668.553.jpg',
  'http://ituring.com.cn/bookcover/1521.260.jpg'
];
var MyImage = React.createClass({
  getInitialState: function () {
    var imgs = this.props.imgs;
    return {
      imgs: imgs,
      count: 0
    };
  },
  goNext: function () {
    var count = this.state.count;
    count++;
    if (count < imgs.length) {
      this.setState({
        count: count
      });
    }
  },
  goPreview: function () {
    var count = this.state.count;
    count--;
    if (count >= 0) {
      this.setState({
        count: count
      });
    }
  },
  render: function () {
    return (
      <View style={[styles.flex]}>
        <View style={styles.image}>
          <Image style={styles.img}
            source={{ uri: this.state.imgs[this.state.count] }}
            resizeMode='contain'
            />
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview}>
            <View style={styles.btn}>
              <Text>上一张</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goNext}>
            <View style={styles.btn}>
              <Text>下一张</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
});

var NV=React.createClass({
  render:function(){
    return(
      <NavigatorIOS 
        sytle={{flex:1}}
        initialRoute={{
          component:List,
          title:'哈哈哈',
          passProps:{}//用于页面间传值
        }}
      />
    );
  }
});
var List=React.createClass({
  render:function(){
    return(
        <ScrollView style={states.flex}>
          <Text>曾经这里是一个段落</Text>
          <Text>后来出现这个段落</Text>
          <Text>他们相爱了，并生下了这个段落</Text>
          <Text>他们相爱了，并生下了这个段落2</Text>
          <Text>后来，出现了这个段落</Text>
        </ScrollView>
    );
  },
  goTo:function(){
    this.props.NavigatorIOS.push({
      component:Detail,
      title:'详情页面',
      rightButtonTitle:'小推车',
      onRrightButtonPress:function(){
        alert('进入我的世界');
      }
    });
  }
});
var Detail=React.createClass({
  render:function(){
    return(
      <ScrollView>
        <Text> 走进世界</Text>
        <Text>this a demo  </Text>
      </ScrollView>
    )
  }
});

 export default class Demo extends Component {
  render() {
    return (
        <View style={[styles.flex,{marginTop:40}]}>
        <MyImage imgs={imgs}></MyImage>
        <NV></NV>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 
  flex: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    borderWidth: 1,
    width: 300,
    height: 200,
    borderRadius: 5,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    height: 150,
    width: 200,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  btn: {
    width: 60,
    height: 30,
    borderColor: '#0089FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginRight: 20,
  }
});

AppRegistry.registerComponent('Demo', () => Demo);
