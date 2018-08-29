import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle = 'Car Rental';
  loading  = true;

  constructor(private authService: AuthService,
              private router: Router,
              private messageService: MessageService) {
      router.events.subscribe((routerEvent: Event) => {
          this.checkRouterEvent(routerEvent);
      });
  }

  checkRouterEvent(routerEvent: Event): void {
      if (routerEvent instanceof NavigationStart) {
          this.loading = true;
      }

      if (routerEvent instanceof NavigationEnd ||
          routerEvent instanceof NavigationCancel ||
          routerEvent instanceof NavigationError) {
          this.loading = false;
      }
  }

  displayMessages(): void {
      this.router.navigate([{ outlets: { popup: ['messages'] } }]);
      this.messageService.isDisplayed = true;
  }

  hideMessages(): void {
      this.router.navigate([{ outlets: { popup: null } }]);
      this.messageService.isDisplayed = false;
  }

  logOut(): void {
     // this.authService.logout();
      this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
