import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

export const EmailSignUp = async (Email , Password) => {
    firebase.auth()
    .createUserWithEmailAndPassword(Email, Password )
    .then(() => {
        // var TrueMail = this.state.Email.split(".").join("")                       
        alert("Firebase :: Email Sign Up Successfull");
     })
    .catch(error => {
      alert(error)
    })  
}



export const EmailLogin = async (Email , Password) => {   
      firebase.auth()
          .signInWithEmailAndPassword( Email , Password)
             .then(() => { 
               try{
                 alert("Login Successful")  
                 let x = firebase.auth().currentUser.uid
                 Actions.Messenger({Id:x})                   
               }  
               catch (e) {
                alert(e)
               }                      
           })  
    .catch(error => alert(error)) 
}








export const GoogleLogin = async () => {  
    try {
     const result = await Google.logInAsync({
         // Get From Expo Google Login Guide 
       androidClientId: "80398670374-jrafsuu0fsmdf1mqfllq1pcmf2e6d5q9.apps.googleusercontent.com",
      // iosClientId: YOUR_CLIENT_ID_HERE,
       scopes: ['profile', 'email'],
     });
 
     if (result.type === 'success') {
       alert("success");
      
       const credential = firebase.auth.GoogleAuthProvider.credential(result.idToken, result.accessToken);
       firebase.auth().signInWithCredential(credential)
         .then(res => {
           console.log(`Firebase :: Google Login : Success , Data :: ${res}`);
           return res
         })
         .catch(error => {
           alert("firebase cred err: " + error);
         });
 
     }  else {
       return { cancelled: true };
     }
   } catch (e) {
     alert(e)
     return { error: true };
   }
 }