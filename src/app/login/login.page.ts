import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {  MenuController, AlertController } from '@ionic/angular';

  ``
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""
  userType: string = ""
  constructor(public menuCtrl: MenuController,public afAuth: AngularFireAuth, private router: Router, public user: UserService,private alert:AlertController) { }
 
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ngOnInit() {
  }
  
  /*resetPassword(username: string) {
    var auth = firebase.auth();
    auth.sendPasswordResetEmail(username)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }*/

async resetPassword(username: string){
  const alert = await this.alert.create({
  header: 'Forgot Password',
  inputs:[
    {
      name:'email',
      type:'text',
      placeholder:'Email'
    },
  ],
    buttons:[
      {
        text:"Cancel",
        role:'cancel',

      },{
        text:'Submit',
        handler: data=> {
          var auth= firebase.auth();
          auth.sendPasswordResetEmail(data.email)
            .then(()=> console.log ("email sent"))
            .catch((error) => console.log("error"))
        }
      }
    ]
  
  });
await alert.present();
}


  
  
async login(){
    let db = firebase.firestore();
    const { username, password } = this
    try{
      //need to fix email thing later
      const res = await this.afAuth.auth.signInWithEmailAndPassword(username, password)
    } catch (err){
        console.dir(err)
        if (err.code = "auth/invalid-email"){
          console.log("User Not Found")
        }
        console.log(username);
  }

    const user = db.collection('users');

    var query1 = user.where('user_name', '==', username).where('user_type', '==', 0);
    const snapshot1 = await query1.get();
    if (!snapshot1.empty){
      this.router.navigateByUrl('/dashboard-cust');
      console.log("in cus if");
    }
    
   var query2 = user.where('user_name', '==', username).where('user_type', '==', 1);
    const snapshot2 = await query2.get();
    if (!snapshot2.empty){
      this.router.navigateByUrl('/dashboard-res');
    }
    var query3 = user.where('user_name', '==', username).where('user_type', '==', 2);
    const snapshot3 = await query3.get();
    if (!snapshot3.empty){
      this.router.navigateByUrl('/dashboard-del');
      console.log("in res if");
    }

    
  }

  
}



