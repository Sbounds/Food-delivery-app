import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ConcatSource } from 'webpack-sources';
import { disableBindings } from '@angular/core/src/render3';
import { sanitizeScript } from '@angular/core/src/sanitization/sanitization';
//import {MenuItemService} from './menuItem.service'

interface Cart{
    cart_id?: string,
    user_id?: string,
    res_id?:string,
    status?: number,
    total?: number
  }

  interface CartItem{
      item_price?: number,
      item_name?: string,
      item_qty?: number,
      item_id?: string,
      item_descritption?: string

  }


@Injectable()
export class CartService{

    constructor (private afAuth: AngularFireAuth, private af: AngularFirestore){
    
    }

    getCurCartforRes(userId, resId, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').where("user_id", '==', userId).where("res_id", '==', resId).onSnapshot((snapshot)=>
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

    //returns carts that are active
    getCurCarts(userId, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').where("user_id", '==', userId).where("status", '==', 0).onSnapshot((snapshot)=>
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
    //returns previous orders
    getOldCarts(userId, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').where("user_id", '==', userId).where("status", '==', 4).onSnapshot((snapshot)=>
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
                        };
                })
            })
            observer.next(list);
        }
        )
    }
    getItemsCarts(cartID, list: CartItem[]): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').doc(cartID).collection('items').onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>{
                    if (change.type=="added"){
                        let res = change.doc.data();
                        list.push(res);
                        }
                        if (change.type=="modified")
                        {
                            let docID = change.doc.id 
                            //for each when id matches -> 
                            for (var i = 0; i<list.length; i++){
                                if(list[i].item_id==docID){
                                    list[i] = change.doc.data();
                                }
                            }
                        }
                })
            })
            observer.next(list);
        })
    }
    getCurResCarts(resID, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db=firebase.firestore();
            db.collection('cart').where("res_id", '==', resID).where("status", '==', 1).orderBy("created", 'asc').onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>{
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
            //observer.next(list);
        })
    }
    getCuscomp(cusID, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db=firebase.firestore();
            db.collection('cart').where("cus_id", '==', cusID).where("status", '==', 4).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>
                    {
                        let res=change.doc.data();
                        list.push(res);
                    })
            })
            observer.next(list);
        })
    }
    
    getcomp(delID, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db=firebase.firestore();
            db.collection('cart').where("del_id", '==', delID).where("status", '==', 4).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>
                    {
                        let res=change.doc.data();
                        list.push(res);
                    })
            })
            observer.next(list);
        })
    }
    getrescomp(resID, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db=firebase.firestore();
            db.collection('cart').where("res_id", '==', resID).where("status", '==', 4).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>
                    {
                        let res=change.doc.data();
                        list.push(res);
                    })
            })
            observer.next(list);
        })
    }
  
    getAvailableDel(list): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').where("status", '==', 2).orderBy("created", 'asc').onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>{
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
            }
            )
            observer.next(list);
        })
    }
    getAcceptedDel(userID, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').where("del_id", '==', userID).where("status", '==', 3).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>{
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
            }
            )
            observer.next(list);
        })
    }

    getDelCart(cartID, list): Observable<any>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').where("cart_id", '==', cartID).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(change=>{
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
        })
    }
    getSingleItem(cartID, itemID): Promise<any>{
        return new Promise((resolve)=>
        {
            let db = firebase.firestore();
            console.log(cartID);
            console.log(itemID);
            db.collection('cart').doc(cartID).collection('items').where('item_id','==', itemID).onSnapshot((snapshot)=>
                {
                    console.log("in this");
                    snapshot.docChanges().forEach(change=>{
                        resolve(change.doc.data());
                        console.log(change.doc.data());
                        //list.push(res);
                    })
                })
               // observer.next(list);
        })
    }
 getCartTotal(cartID): Observable<number>{
        return new Observable((observer)=>
        {
            var total: number;
            let db = firebase.firestore();
            db.collection('cart').doc(cartID).collection('items').onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(async change=>{
                    let res = change.doc.data();
                    console.log(res.item_price);
                    console.log(res.item_qty);
                    console.log(res.item_price*res.item_qty);
                    //observer.next(res.item_price*res.item_qty);
                    total+=res.item_price*res.item_qty;
                    observer.next(res.item_price*res.item_qty);
                
                })
            })
            //console.log(total);
            //observer.next(total);
        })
    }
    getCart(cartID): Observable<Cart>{
        return new Observable((observer)=>
        {
            let db = firebase.firestore();
            db.collection('cart').where("cart_id",'==',cartID).onSnapshot((snapshot)=>
            {
                snapshot.docChanges().forEach(async change=>{
                    let res = change.doc.data();
                    observer.next(res);
                
                })
            })
        })
    }
    
}