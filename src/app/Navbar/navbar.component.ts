import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser, faMessage, faUserLarge, faSignOut } from '@fortawesome/free-solid-svg-icons';
import Swal, { SweetAlertResult } from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  user_name:any = '';

  currentTime!: string;
  countdown: number;
  dropdownVisible: boolean = false;
  adminText: string = 'Super Admin';
  faUser = faUser;
  faMessage = faMessage;
  faUserLarge = faUserLarge;
  faSignOut = faSignOut;


  constructor(private router: Router) {
    this.countdown = 60;  //initial value
  }

  ngOnInit(): void {
    this.user_name = sessionStorage.getItem("user_name");
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
    this.startCountdown();
  }

  // Current date and time
  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleString();
  }

  // stop watch
  startCountdown() {
    setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.countdown = 60;  
      }
    }, 1000);
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownVisible = !this.dropdownVisible;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.dropdownVisible = false;
  }

  truncateText(value: string, limit: number = 10, trail: string = '...'): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

 // logout
logoutUser() {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will be logged out of the application.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: 'teal',
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel'
  }).then((result) => {
    if (result.isConfirmed) {
      // Perform logout logic here, such as calling a logout function or navigating to the login page.
      this.router.navigate(['/login'])
    }
  });

} }


