import { Injectable } from '@angular/core'
import { Observable, observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth"; 

interface User{
    user_name?: string,
    user_id?: string,
    res_id?:string,
    user_type?:number
}

@Injectable()
export class UserService{
    private user: User

    constructor(){}
    resetPassword(username: string){
        var auth = firebase.auth();
        auth.sendPasswordResetEmail(username)
          .then(() => console.log("email sent"))
          .catch((error) => console.log(error))
      
    }
    
    setUser(user: User){ 
        this.user = user
    }
  
  getCurrentUID(): Observable<string>
  {
    return new Observable(observer=>
      {
        firebase.auth().onAuthStateChanged(user=>
          {
            console.log(user.uid);
            observer.next(user.uid);
          })
      })
  }


  
  getSingleUser(uid): Promise<User>{
    console.log("in get single user call");
    return new Promise((resolve)=>
        {
            let db = firebase.firestore();
            console.log(uid);
            db.collection('users').where("user_id", '==', uid).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change => {
                    resolve(change.doc.data());
                    console.log(change.doc.data());
                    // list.push(res);
                })
            })
            //resolve(list);
        }
        )
    }
}