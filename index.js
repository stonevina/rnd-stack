import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('rnd', () => App);


if (Platform.OS === 'web') {
  /**
  * 以下内容是转换 web 页面的关键，
  * 等会还会创建一个对应的 html 模板，
  * 视图对应 id 为 'react-root'
  */
  AppRegistry.runApplication('rnd', {
    rootTag: document.getElementById('react-root')
  });
}