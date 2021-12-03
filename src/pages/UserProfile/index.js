import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {IlNullPhoto} from '../../assets';
import {Gap, Header, List, Profile, Status} from '../../components';
import {colors} from '../../utils';

const UserProfile = ({navigation}) => {
  return (
    <ScrollView style={styles.root}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <Profile
        name="Mirai Yuki"        
        pic={IlNullPhoto}
        profile
      />
      <Gap height={20} />
      <Status 
        name="660"           
        desc="Point Kamu"     
        icon="icon"          
        name2="Master"           
        desc2="Rank kamu"     
        rank="icon"                    
      />      
      <Gap height={20} />
      <List
        name="Edit Profile"        
        type="next"
        icon="edit-profile"
        onPress={() => navigation.navigate("UpdateProfile")}
      />      
      <Gap height={10} />
      <List
        name="Leaderboard"        
        type="next"
        icon="leaderboard"
        onPress={() => navigation.navigate("Leaderboard")}
      />
      <Gap height={10} />
      <List
        name="Berbagi Aplikasi"        
        type="next"
        icon="share"
      />
      <Gap height={10} />
      <List
        name="Tentang Pengembang"        
        type="next"
        icon="rate"
      />
      <Gap height={10} />
      <List
        name="FAQ"        
        type="next"
        icon="setting"
      />
      <Gap height={10} />
      <List
        name="Log out"        
        type="next"
        icon="signout"
      />
      <Gap height={30} />
    </ScrollView>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  root: {
    // backgroundColor: colors.white,
    flex: 1,
  },
});
