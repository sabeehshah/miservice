import { DbService } from './services/db.service';
import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  isLoggedIn:boolean
  loggedInUser:string;
  isVerified:boolean;

  user:User;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private auth: AuthService,
    private router:Router,
    private db:DbService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


    this.auth.getAuth().subscribe(auth =>{
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email
        if(auth.emailVerified){
          this.isVerified = true;
        }else{
          this.isVerified = false;
        }

        console.log(auth)

        this.db.getUser(this.loggedInUser).subscribe(u => {
          this.user = u[0]
          console.log(this.user.name)
        })
      }
      
    })

  }

  closeMenu(){
    this.menu.close();
  }

  signout(){
    this.auth.signOut();
    console.log("sign out")
    this.router.navigate(['login'])
    
  }
}
