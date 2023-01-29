// import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';


// const AP =  createStackNavigator(
//   {
//     Welcome :{screen:App},
//     DashBoard :{screen:Dboard},
//     ForgetPassword :{screen:Fpass},
//     Calendar :{screen:Calendar},
//     Invitations :{screen:ODList}
//   }
// );

// export default createAppContainer(AP);

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Cacard from './components/cacard';
import Dboard from './components/dashboard';
import Remcard from './components/remcard';
import App from './components/Login';
import Calendar from './components/EventCalendar';
import ODList from './components/odlist';
import Fpass from './components/forgotPass';
import Stuatt from './components/StuAtt';
import Page2 from './components/page2';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawComp=()=>{
    <Stack.Navigator>
    <Stack.Screen name="Page1" component={Stuatt} options={{headerShown:false}}/>
    <Stack.Screen name="Page2" component={Page2} options={{headerShown:false}}/></Stack.Navigator>
}
const DrawerHome = () => (
    <Drawer.Navigator initialRouteName="DashBoard " 
   screenOptions={{
    drawerActiveBackgroundColor: '#adafb3',
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'black',
        
   }}>
            <Drawer.Screen name="DashBoard" component={Dboard} options={{drawerItemStyle: { height: 0 }}}/>
            <Drawer.Screen name="Student Attendance" component={Stuatt} options={{headerShown:true,}}/>
            <Drawer.Screen name="Page2" component={Page2} options={{headerShown:true}}/>
          </Drawer.Navigator>
);
const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={App} options={{title: 'Welcome'}}/>
        <Stack.Screen name="DrawerHome" component={DrawerHome} options={{headerShown:false}}/>
        <Stack.Screen name="Student Attendance" component={Stuatt} options={{headerShown:true}}/>
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="On-duty Request" component={ODList}/>
        <Stack.Screen name="ForgetPassword" component={Fpass}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;
// const Drawer = createDrawerNavigator();

// const MyStack = () => {
    
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator
//                 drawerContent={(props) => <CustomSidebarMenu {...props} />}
//             >
//                 <Drawer.Screen name='Dashboard' component={Dboard} />
//                 <Drawer.Screen name='Calendar' component={Calendar} />
//                 <Drawer.Screen name='Od' component={ODList} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }
// export default MyStack;