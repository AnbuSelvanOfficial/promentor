import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './components/Splash/SplashScreen';

import EntryScreen from './components/Entry/EntryScreen';

//Admin 
import AdminLoginScreen from './components/Login/AdminLoginScreen';
import AdminHomeScreen from './components/Admin/AdminHomeScreen';
import AddStudentScreen from './components/Admin/AddStudentScreen';
import AddMentorScreen from './components/Admin/AddMentorScreen';
import ViewStudentScreen from './components/Admin/ViewStudentScreen';
import ViewMentorScreen from './components/Admin/ViewMentorScreen';
import AssignMentorScreen from './components/Admin/AssignMentorScreen';

//Mentor
import MentorLoginScreen from './components/Login/MentorLoginScreen';
import MentorHomeScreen from './components/Mentor/MentorHomeScreen';
import MentorViewStudentScreen from './components/Mentor/MentorViewStudentScreen';
import EditRemarkScreen from './components/Mentor/EditRemarkScreen';

//Student
import StudentLoginScreen from './components/Login/StudentLoginScreen';
import StudentScreen from './components/Student/StudentScreen';

import SignupScreen from './components/Signup/SignupScreen';
import AcCreatedSuccessScreen from './components/Success/AcCreatedSuccessScreen';
import MentorProfileScreen from './components/Mentor/MentorProfileScreen';



const Stack = createNativeStackNavigator();

function App({navigation}) {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}} >

        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />

        <Stack.Screen name='Entry' component={EntryScreen} options={{ headerShown: false }} />
        
        <Stack.Screen name="AdminLogin"  component={AdminLoginScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddStudent"  component={AddStudentScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="AddMentor"  component={AddMentorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ViewStudent"  component={ViewStudentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ViewMentor"  component={ViewMentorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AssignMentor"  component={AssignMentorScreen} options={{ headerShown: false }} />

        
        <Stack.Screen name="MentorLogin"  component={MentorLoginScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="MentorHome"  component={MentorHomeScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="MentorViewStudent" component={MentorViewStudentScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="EditRemark"  component={EditRemarkScreen } options={{ headerShown: false }} />
        <Stack.Screen name="MentorProfile" component={MentorProfileScreen} options={{ headerShown: false }} />


        <Stack.Screen name="StudentLogin"  component={StudentLoginScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Student"  component={StudentScreen} options={{ headerShown: false }} /> 

        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} /> 

        <Stack.Screen name="AcSuccess" component={AcCreatedSuccessScreen} options={{ headerShown: false }} />


        
                 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
  
export default App;