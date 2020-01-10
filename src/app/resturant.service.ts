import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
//import {MenuItemService} from './menuItem.service'

interface menuItem{
    itemName: string
}

interface Resturant{
    resturantName?: string,
    resContactNumber?: string,
    streetAddress?: string,
    city?: string,
    state?: string
  }

@Injectable()
export class ResturantService{
    private resturant: Resturant

    constructor (private afAuth: AngularFireAuth, private af: AngularFirestore){
    
    }

    getResID(): Promise<any>{
        return new Promise((resolve)=>
        {
            let db = firebase.firestore();
            db.collection('resturant').onSnapshot((snapshot)=> {
                snapshot.docChanges().forEach(change => {
                    resolve(change.doc.data().res_id) //need to add in field for id for each of the objects
                })
            })
        });
    }

    getResturant(list): Promise<any>{
        return new Promise((resolve)=>
        {
            let db = firebase.firestore();
            db.collection('resturant').onSnapshot((snapshot)=> {
                snapshot.docChanges().forEach(change => {
                    if (change.type=="added"){
                        let res = change.doc.data();
                        list.push(res);
                        }
                        if (change.type=="modified")
                        {
                            let docID = change.doc.id 
                            //for each when id matches -> 
                            for (var i = 0; i<list.length; i++){
                                if(list[i].form_id==docID){
                                    list[i] = change.doc.data();
                                }
                            }
                        }
                })
            })
            resolve(list);
        });
    }
    getSingleResturant(resId): Promise<Resturant>{
        return new Promise((resolve)=>
        {
            let db = firebase.firestore();
            db.collection('resturant').where("res_id", '==', resId).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change => {
                    resolve(change.doc.data());
                    console.log(change.doc.data());
                })
            })
        }
        )
    }
    getMenuSubcollection(resId, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('resturant').doc(resId).collection('menuItem').onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change => {
                    if (change.type=="added"){
                        let res = change.doc.data();
                        list.push(res);
                        }
                        if (change.type=="modified")
                        {
                            let docID = change.doc.id 
                            //for each when id matches -> 
                            for (var i = 0; i<list.length; i++){
                                if(list[i].form_id==docID){
                                    list[i] = change.doc.data();
                                }
                            }
                        }
                })
            })
            observer.next(list);
        }
        )
    }
     getResturantName(list): Observable<String>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('resturant').onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change => {
                    let res = change.doc.data().resturantName;
                    list.push(res);
                })
            })
            observer.next(list);
        }
        )
    }
}