import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-restricted-page',
  templateUrl: './restricted-page.component.html',
  styleUrls: ['./restricted-page.component.scss']
})
export class RestrictedPageComponent implements OnInit {

  constructor(private authService: MsalService) { }

  getName () : string | undefined {
    if (this.authService.instance.getActiveAccount() == null) {
      return 'unknown'
    }
    console.log(this.authService.instance.getAllAccounts());
    console.log(this.authService.instance.getActiveAccount()?.username)
    // return this.authService.instance.getActiveAccount()?.name ? '' : ''
    return this.authService.instance.getActiveAccount()?.name
  }


  ngOnInit(): void {
  }

}
