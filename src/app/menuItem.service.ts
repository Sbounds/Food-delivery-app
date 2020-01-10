import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';

interface menuItem{
    itemName: string
}

@Injectable()
export class MenuItemService{
    private menuItem: menuItem

    constructor(private afAuth: AngularFireAuth, private af: AngularFirestore){

    }
    setMenuItem(menuItem: menuItem){
        this.menuItem = menuItem
    }


   // getMenuItem(resid, list): Promise<any> {//add another argument with the resturant id
    getMenuItem(list): Promise<any>{
        return new Promise((resolve)=>
        
        {

            let db = firebase.firestore();
            // add query to use only one resturant id let query =
           // db.collection('menuItem').where("res_id", '==', resid).onSnapshot((snapshot)=> {
                db.collection('menuItem').onSnapshot((snapshot)=> {   
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
    // getMenuItem(resid, list): Promise<any> {//add another argument with the resturant id
    getMenuItemForRes(resid, list): Promise<any>{
        return new Promise((resolve)=>
        
        {

            let db = firebase.firestore();
            // add query to use only one resturant id let query =
            db.collection('menuItem').where("res_id", '==', resid).onSnapshot((snapshot)=> {  
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
    
}