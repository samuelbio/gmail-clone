import { AccountPage } from './../account/account.page';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

  emails = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private popOver: PopoverController
  ) { }

  ngOnInit() {

    this.http.get<any[]>('https://devdactic.fra1.digitaloceanspaces.com/gmail/data.json')
    .subscribe(res => {
      console.log(res);
      this.emails = res;
      // .map(email => {
      //   email.color = this.hashCode(email.from);
      //   return email;
      // });
    });
  }

  openDetail(id) {
    this.router.navigate(['tabs', 'mail', id]);
  }

  async  openAccount(ev) {
    const popover = await this.popOver.create({
      component: AccountPage,
      event: ev,
      cssClass: 'custom-popover'
    });

    await popover.present();
  }

  doRefresh(event) {

  }
}

