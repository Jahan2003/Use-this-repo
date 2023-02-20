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



// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import Cacard from './components/cacard';
// import Dboard from './components/dashboard';
// import Remcard from './components/remcard';
// import App from './components/Login';
// import Calendar from './components/EventCalendar';
// import ODList from './components/odlist';
// import Fpass from './components/forgotPass';
// import Stuatt from './components/StuAtt';
// import Page2 from './components/page2';

// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// const DrawComp=()=>{
//     <Stack.Navigator>
//     <Stack.Screen name="Page1" component={Stuatt} options={{headerShown:false}}/>
//     <Stack.Screen name="Page2" component={Page2} options={{headerShown:false}}/></Stack.Navigator>
// }
// const DrawerHome = () => (
//     <Drawer.Navigator initialRouteName="DashBoard " 
//    screenOptions={{
//     drawerActiveBackgroundColor: '#adafb3',
//         drawerActiveTintColor: 'black',
//         drawerInactiveTintColor: 'black',
        
//    }}>
//             <Drawer.Screen name="DashBoard" component={Dboard} options={{drawerItemStyle: { height: 0 }}}/>
//             <Drawer.Screen name="Student Attendance" component={Stuatt} options={{headerShown:true,}}/>
//             <Drawer.Screen name="Page2" component={Page2} options={{headerShown:true}}/>
//           </Drawer.Navigator>
// );
// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Welcome" component={App} options={{title: 'Welcome'}}/>
//         <Stack.Screen name="DrawerHome" component={DrawerHome} options={{headerShown:false}}/>
//         <Stack.Screen name="Student Attendance" component={Stuatt} options={{headerShown:true}}/>
//         <Stack.Screen name="Calendar" component={Calendar} />
//         <Stack.Screen name="On-duty Request" component={ODList}/>
//         <Stack.Screen name="ForgetPassword" component={Fpass}/>
        
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };
// export default MyStack;



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
// import Notify from './components/Notification';
import EveCard from './components/EveCard';
import EveDash from './components/EveDash';
import AllEvents from './components/SeeAllEvents.js';
import Regform from './components/OdApplication';
import Eventform from './components/EventCreationForm';
import Stuatt from './components/StuAtt';
import Page2 from './components/page2';
import Attendance from './components/Attendance';
import Facatt from './components/FaculAtt';
import StudentAttendance from './components/StudentAttendance';
import FaculDboard from './components_faculty/FacultyDBoard';
import StuAttFac from './components_faculty/StuAttFac';
import Assignment from './components_faculty/Assingnment';
import Notifications from './components_faculty/bell';
import Achievement from './components_faculty/Achievements';
import Favourites from './components_faculty/Favourites';
 
// import AttendanceFac from './components_faculty/AttendanceFac';


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
          <Drawer.Screen name="DashBoard" component={FaculDboard} options={{drawerItemStyle: { height: 0 }}}/>
          <Drawer.Screen name="Student Attendance" component={StuAttFac} options={{headerShown:true}}/>
          {/* <Drawer.Screen name="Faculty Attendance" component={Facatt} options={{headerShown:true}}/> */}
          <Drawer.Screen name="On-duty Request" component={ODList} options={{headerShown:true}}/>
          <Drawer.Screen name="Event Dashboard" component={EveDash} options={{headerShown:true}}/>
        </Drawer.Navigator>
);

const FacultyDrawer = () => (
  <Drawer.Navigator initialRouteName="FaculDboard" 
 screenOptions={{
  drawerActiveBackgroundColor: '#adafb3',
      drawerActiveTintColor: 'black',
      drawerInactiveTintColor: 'black',
      
 }}>
          <Drawer.Screen name="DashBoard" component={FaculDboard} options={{drawerItemStyle: { height: 0 }}}/>
          <Drawer.Screen name="Student Attendance" component={StuAttFac} options={{headerShown:true,}}/>
          <Drawer.Screen name="On-duty Request" component={ODList} options={{headerShown:true,}}/>
          {/* <Drawer.Screen name="Event Dashboard" component={EveDash} options={{headerShown:true}}/> */}
          <Drawer.Screen name="Event Dashboard" component={EveDash} options={{headerShown:true , title:"To-do List"}}/>
        </Drawer.Navigator>
);


const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={App} options={{title: 'Welcome'}}/>
        <Stack.Screen name="DrawerHome" component={DrawerHome} options={{headerShown:false}}/>
        {/* <Stack.Screen name="DashBoard" component={Dboard} /> */}
        <Stack.Screen name="Student Attendance" component={Stuatt} options={{headerShown:true}} />
        <Stack.Screen name="Calendar" component={Calendar} options={{title: "Events"}}/>
        <Stack.Screen name="On-duty Req" component={ODList} options={{title:"On-duty Request"}}/>
        <Stack.Screen name="ForgotPassword" component={Fpass}/>
        {/* <Stack.Screen name="Notification" component={Notify}/> */}
        <Stack.Screen name="Event Dashboard" component={EveDash} />
        <Stack.Screen name="All Events" component={AllEvents}/>
        <Stack.Screen name="On-Duty Application" component={Regform}/>
        <Stack.Screen name="Event Form" component={Eventform}/>
        <Stack.Screen name="Attendance" component={Attendance}/>
        <Stack.Screen name="Attendance List" component={StudentAttendance}/>
        <Stack.Screen name="FaculDboard" component={FacultyDrawer} options={{title:"Dashboard",headerShown:false}}/>
        <Stack.Screen name="StuAttFac" component={StuAttFac} options={{title:"Student Attendance",headerShown:true}}/>
        <Stack.Screen name="Assignment" component={Assignment} options={{title:"Assignment",headerShown:true}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{title:"Notifications",headerShown:true}}/>
        <Stack.Screen name="Achievements" component={Achievement} options={{title:"Achievements",headerShown:true}}/>
        <Stack.Screen name="Favourites" component={Favourites} options={{title:"Favourites",headerShown:true}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;