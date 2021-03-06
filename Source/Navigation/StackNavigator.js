import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../Screens/dashboard/Dashboard';
import Profile from '../Screens/profile/Profile';
import TabNavigator from './TabNavigator';
import TabViewExample from '../Screens/signin/SignIn';
import EmailId_View from '../Components/EmailId_View';
import MobileNo_View from '../Components/MobileNo_View';
import SignIn_Component from '../Components/SignIn_Component';
import SignUp from '../Screens/signin/SignUp';
import Services from '../Screens/dashboard/Services';
import Main_HeaderComponent from '../Components/Main_HeaderComponent';
import Header_Component from '../Components/Header_Component';
import ConstructionMaterials from '../Screens/dashboard/services/ConstructionMaterials';
import ConstructionVehicles from '../Screens/dashboard/services/ConstructionVehicles';
import ConstructionChemicals from '../Screens/dashboard/services/ConstructionChemicals';
import LandingScreen from '../Screens/LandingScreen';
import NotificationTab from '../Screens/Notifications';
import Profile_Details from '../Screens/profile/Profile_Details';
import Company_Details from '../Screens/profile/Company_Details';
import Company_Address from '../Screens/profile/Company_Address';
import Site_AddressBook from '../Screens/profile/Site_AddressBook';
import Help from '../Screens/profile/Help';
import About_Us from '../Screens/profile/About_Us';
import Feedback from '../Screens/profile/Feedback';
import ForgetPasswordScreen from '../Screens/signin/ForgetPasswordScreen';
import ResetPasswordScreen from '../Screens/signin/ResetPasswordScreen';
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LandingScreen">
      <Stack.Screen name="TabViewExample" component={TabViewExample} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Email" component={EmailId_View} />
      <Stack.Screen name="Mobile" component={MobileNo_View} />
      <Stack.Screen name="SignInComponent" component={SignIn_Component} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="Main_Header" component={Main_HeaderComponent} />
      <Stack.Screen name="Header" component={Header_Component} />
      <Stack.Screen name="NotificationTab" component={NotificationTab} />
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="Site_AddressBook" component={Site_AddressBook} />
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="About_Us" component={About_Us} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      <Stack.Screen
        name="ConstructionMaterials"
        component={ConstructionMaterials}
      />
      <Stack.Screen
        name="ConstructionVehicles"
        component={ConstructionVehicles}
      />
      <Stack.Screen
        name="ConstructionChemicals"
        component={ConstructionChemicals}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
