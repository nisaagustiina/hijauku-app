import * as React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

//component
import Tweets from './Tweets'
import Replies from './Replies'

//utils
import {colors, fonts} from '../../utils';

const FirstRoute = () => (
  <Tweets />
);

const SecondRoute = () => (
  <Replies />
);

const initialLayout = { width: Dimensions.get('window').width };

const Manage = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Menunggu Verifikasi' },
    { key: 'second', title: 'Terverifikasi' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const renderTabBar = props => (
    <TabBar 
      {...props}
      indicatorStyle={{backgroundColor: colors.primary}}
      style={{backgroundColor: 'white'}}            
      pressColor={colors.disable}
      renderLabel={({route}) => (
        <Text style={styles.text}>
          {route.title}
        </Text>
      )}
    />
  )

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

export default Manage;

const styles = StyleSheet.create({  
  text:{
    fontSize: 13,   
    color: colors.text.primary,
    fontFamily: fonts.secondary[600],    
  }
});
