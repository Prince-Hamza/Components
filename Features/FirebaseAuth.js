import * as Google from 'expo-google-app-auth';
import * as firebase from 'firebase'
import {Actions} from 'react-native-router-flux'

export const EmailSignUp = async (Email , Password) => {
    firebase.auth()
    .createUserWithEmailAndPassword(Email, Password )
    .then(() => {
        // var TrueMail = this.state.Email.split(".").join("")                       
        console.log("Firebase :: Email Sign Up Successfull");
     })
    .catch(error => {
      alert(error)
    })  
}



export const EmailLogin = async (Email , Password) => {   
      firebase.auth()
          .signInWithEmailAndPassword( Email , Password)
             .then(() => { 
               try {
                 console.log("Login Successful")  
                 let x = firebase.auth().currentUser.uid

                 let user1 = ({Id:x , Name:'Humza' , Photo: img1 })
                 let user2 = ({Id:'abc' , Name:'Irza' , Photo:img2 })

                //  Actions.Messenger({User1:user1 , User2:user2})            

               }  
               catch (e) {
                alert(e)
               }                      
           })  
    .catch(error => alert(error)) 
}





export const expoLogin = async (Auth) => {  
    try {
     const result = await Google.logInAsync({
         // Get From Expo Google Login Guide 
       androidClientId: "80398670374-jrafsuu0fsmdf1mqfllq1pcmf2e6d5q9.apps.googleusercontent.com",
      // iosClientId: YOUR_CLIENT_ID_HERE,
       scopes: ['profile', 'email'],
     });
 
     if (result.type === 'success') {
       //alert("success");
      
      //  const Auth = firebase.auth.FacebookAuthProvider

       const credential = Auth.credential(result.idToken, result.accessToken);
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

 var img1 = 'https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png'
 var img2 = 'https://static.thenounproject.com/png/1495532-200.png'
 