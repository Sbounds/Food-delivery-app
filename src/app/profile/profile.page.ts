import { Component, OnInit } from '@angular/core';
import{ NavController, MenuController, ToastController} from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app'; // required for app->firestore communication
import 'firebase/firestore';
import { Statement } from '@angular/compiler';
import { ResturantService } from '../resturant.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

interface User{
  user_name?: string,
  user_id?: string,
  res_id?:string,
  user_type?: number,
  user_firstName?: string,
  user_lastName?: string,
  contactNumber?: string,
  streetAddress?: string,
  city?: string,
  state?: string,
  zip?: number
}
interface Resturant{
  resturantName?: string,
  resContactNumber?: string,
  streetAddress?: string,
  city?: string,
  state?: string,
  zip?: number,
  description?: string
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  
  file
  resPic
  uid: string = ""
  user: User
  res: Resturant
  user_firstName: string = ""
  user_lastName: string = ""
  contactNumber: string = ""
  streetAddress: string = ""
  city: string= ""
  state: string = ""
  user_type: number
  res_id: string = ""
  resContactNumber: string = ""
  resturantName: string = ""
  username: string = ""
  zip: number
  description: string = ""

  constructor(private us: UserService,
    private router: Router,
    private afs:AngularFirestore,
    private afAuth:AngularFireAuth,
    public navCtrl : NavController,
    private rs: ResturantService,
    private menu: MenuController,
    private toast: ToastController) { 
      


    }
    
   
  
  async ngOnInit() {
    this.uid = "";
     let s1 = this.us.getCurrentUID().subscribe(uid=>
      {
        console.log(uid);
        this.uid = uid;
        
        this.us.getSingleUser(uid).then(user=>
        {
          this.user = user;
          console.log(this.user);
          console.log(this.user.user_type);
          this.user_type= this.user.user_type;
          console.log(this.user_type);
          if(this.user.user_type==0){
              console.log("in item if")
              this.user_firstName = this.user.user_firstName;
              this.user_lastName = this.user.user_lastName;
              this.contactNumber = this.user.contactNumber;
              this.streetAddress = this.user.streetAddress;
              this.city= this.user.city;
              this.state = this.user.state;
              this.zip = this.user.zip;
              this.username = this.user.user_name;


          }
          if(this.user.user_type==1){
            this.user_firstName = this.user.user_firstName;
            this.user_lastName = this.user.user_lastName;
            this.contactNumber = this.user.contactNumber;
            this.res_id = this.user.res_id;
            this.username = this.user.user_name;
            this.rs.getSingleResturant(this.res_id).then(res=>
              {
                this.res = res;
                console.log(this.res);
                this.resturantName = this.res.resturantName;
                this.resContactNumber = this.res.resContactNumber;
                this.streetAddress = this.res.streetAddress;
                this.city = this.res.city;
                this.state = this.res.state;
                this.zip = this.res.zip;
                this.description = this.res.description;

              })

          }
           if(this.user.user_type==2){
            this.user_firstName = this.user.user_firstName;
            this.user_lastName = this.user.user_lastName;
            this.username = this.user.user_name;
          }
      
        });
      });
      
  }
  openFirst() {
    if(this.user_type==0){
      this.menu.enable(true, 'cmenu');
      this.menu.toggle('cmenu');
    }
    if(this.user_type==1){
      this.menu.enable(true, 'rmenu');
      this.menu.toggle('rmenu');
    }
    if(this.user_type==2){
      this.menu.enable(true, 'dmenu');
      this.menu.toggle('dmenu');
    }

    console.log(this.menu.isOpen());
  }
  async updatePassword(){
    var auth = firebase.auth();
    console.log(this.username);
    
    try{
      auth.sendPasswordResetEmail(this.username);
      let toast = await this.toast.create({
        message: 'an email has been sent ',
        duration: 1000,
        position:'top'
      });
      return await toast.present();
    }catch{
      console.log('error');
    }
  }
  async setUpload(event: FileList){
    this.file = event.item(0);
    if(event.item(0)){
      let reader = new FileReader();
      reader.onload = (event:any) => {
        this.resPic = event.target.result;
      }
      reader.readAsDataURL(event.item(0));
    }
  }
  async updateUser(){
    let db = firebase.firestore();
    var userRef = db.collection('users').doc(this.user.user_id);

    if(this.user.user_type==0){
      console.log(userRef);
      
        return userRef.update({
            user_firstName: this.user_firstName,
            user_lastName: this.user_lastName,
            contactNumbber: this.contactNumber,
            streetAddress: this.streetAddress,
            city: this.city,
            state: this.state,
            zip: this.zip
        })
        .then(function() {
            console.log("Document successfully updated!");
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }
    if(this.user.user_type==1){
      
      return userRef.update({
          user_firstName: this.user_firstName,
          user_lastName: this.user_lastName,
          contactNumbber: this.contactNumber
      })
      

      .then(function() {
          
      })
      .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
      
    }
    if(this.user.user_type==2){
      return userRef.update({
          user_firstName: this.user_firstName,
          user_lastName: this.user_lastName
      })
      .then(function() {
          console.log("Document successfully updated!");
      })
      .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
    }
    

  }
  async updateRes(){
    let db = firebase.firestore();
    var resRef = db.collection('resturant').doc(this.user.res_id);
      return resRef.update({
        resturantName: this.resturantName,
        resContactNumber: this.resContactNumber,
        streetAddress: this.streetAddress,
        city: this.city,
        state: this.state,
        zip: this.zip,
        description: this.description
      })
      .then(function() {
        console.log("Document successfully updated!");
      })
      .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }


}
