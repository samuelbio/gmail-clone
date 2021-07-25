import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.page.html',
  styleUrls: ['./mail.page.scss'],
})
export class MailPage implements OnInit {

  emails = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get<any[]>('https://devdactic.fra1.digitaloceanspaces.com/gmail/data.json')
    .subscribe(res => {
      console.log(res);
      this.emails = res;
    });

  }

  // https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
  // private hashCode(str) {
  //   let hash = 0;
  //   for (let i = 0; i < str.length; i++) {
  //     hash = str.charCodeAt(i) + ((hash << 5) - hash);
  //   }
  //   return hash;
  // }

  // private intToRGB(i) {
  //   let c = (i & 0x00FFFFFF)
  //     .toString(16)
  //     .toUpperCase();

  //   return '#' + '00000'.substring(0, 6 - c.length) + c;
  // }
}
