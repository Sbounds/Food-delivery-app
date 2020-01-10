import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {  NavController, AlertController, ToastController } from '@ionic/angular';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore'; // required for app->firestore communication
import { auth } from 'firebase/app';
import { defineBase, restoreView } from '@angular/core/src/render3';
import { AngularFirestore } from '@angular/fire/firestore'
import { UserService } from '../user.service';
import { Register} from '../models/register';
import {  MenuController } from '@ionic/angular';
import { ResturantService } from '../resturant.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {
  createSuccess = false;
  username: string = ""
  password: string = ""
  cpassword: string = ""
  
  
  navController: any
  
  //user attributes
  userType: string = ""

  resID: string = ""
  uid: string = ""
  user_firstName: string = ""
  user_lastName: string = ""
  contactNumber: string = ""
  streetAddress: string = ""
  city: string = ""
  state: string = ""
  zipcode: number

  resturantName: string = ""
  resContactNumber: string = ""



  

  constructor(
    public afAuth: AngularFireAuth,
    private alertCtrl: AlertController,
    private nav: NavController,
    public afstore: AngularFirestore,
    public rest: ResturantService,
    private us: UserService,
    public menuCtrl: MenuController,
    public toast: ToastController
    ) { 
      //rest.setResturantID(this.resID)
      //console.log(this.resID)
    }
    ionViewWillEnter() {
      this.menuCtrl.enable(false);
    }
  ngOnInit() {
  }

  
  async custClick() {
    console.log(this.userType)
  }
  

  async register() {
    let db = firebase.firestore();
    const { username, password, cpassword, userType } = this
    if(password !== cpassword ) {
      await this.presentAlert('Error',"Passwords do not match")
    }
    else {
      if(password == cpassword )
     
    try{
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username, password).then(async user=>
        {

          if(userType == "customer"){ //if the checkbox is NOT checked (not an owner)
            console.log("customerchecked")
            if(isNaN(this.zipcode)||!this.username||!this.user_firstName||!this.user_lastName||!this.contactNumber||!this.streetAddress||!this.city||!this.state){
              const toast3 = await this.toast.create({
                message: 'Please enter all fields correctly!',
                duration: 1000,
                position: 'top'
              })
              return await toast3.present();
            }
            else{
              console.log("in else")
              try{
                db.collection("users").doc(user.user.uid).set({
                  user_name: username,
                  user_type: 0,
                  user_id: user.user.uid,
                  user_firstName: this.user_firstName,
                  user_lastName: this.user_lastName,
                  contactNumber: this.contactNumber,
                  streetAddress: this.streetAddress,
                  city: this.city,
                  state: this.state,
                  zip: this.zipcode
                });
              }
                catch{
                  console.log("error in submitting");
                }
              }
          }
          
          else if (userType == "owner") {
            let resid = this.afstore.createId();
            db.collection("users").doc(user.user.uid).set({
             // uid: this.uid,
              user_name: username,
              user_type: 1,
              res_id: resid,
              user_id: user.user.uid,
              user_firstName: this.user_firstName,
              user_lastName: this.user_lastName,
              contactNumber: this.contactNumber
            }).then((data)=>{
              console.log(data)
            }).catch((error)=>{
              console.log
            })
            try{
              db.collection('resturant').doc(resid).set({
                resturantName: this.resturantName,
                res_id:resid,
                resContactNumber: this.resContactNumber,
                streetAddress: this.streetAddress,
                city: this.city,
                state: this.state,
                zip: this.zipcode
                
              });
      
            } catch(error){
              console.dir(error)
            }
          }
          
          else if(userType == "deliver"){
            db.collection("users").doc(user.user.uid).set({
              user_name: username,
              user_type: 2,
              user_id: user.user.uid,
              user_firstName: this.user_firstName,
              user_lastName: this.user_lastName
            }).then((data)=>{
              console.log(data)
            }).catch((error)=>{
              console.log
            })
          }
          
        })
      console.log(res)
      console.log("complete create user")
    } catch(error) {
      console.dir(error)
    }
    }

   /* this.us.getCurrentUID().subscribe(uid=>
      {
        this.uid = uid;

      })*/
      //doesn't read until after then cant use the uid
    //console.log(this.uid)
    //need to create the same uid as the one in firebase
    
    //need to add error handling for when a user type is not selected
  }
async presentAlert(title,text) {   
  let alert = await this.alertCtrl.create({
        header: title,
        message: text,
        buttons: [
          {
            text:"OK",
            handler: (data) => {
              if(this.createSuccess){
                this.navController.navigateRoot('/login');              
              }
              
            }
            }
        ]
      }); 
    return await alert.present();
  }
}