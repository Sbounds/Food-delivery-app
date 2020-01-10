import { Component } from '@angular/core';
import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public _afAuth: AngularFireAuth,
    private router: Router
    ) {
    this.initializeApp();
    firebase.auth().onAuthStateChanged(function(user)
    {
      if(user){
        console.log(user.uid)
      }
      else{
        router.navigateByUrl('/login');
      }
      })

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
  toggleMenu()
  {
    this.menuCtrl.toggle();
  }
  public async logoutUser(): Promise<any> {

    console.log();

    try {

      return await this._afAuth.auth.signOut();
    } catch (e) {
      console.error("big hu?", e);
    }


  }
  async logout(){
    return firebase.auth().signOut();
  }






}
