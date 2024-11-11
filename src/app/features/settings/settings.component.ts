import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsService } from '../../core/services/settings.service';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [SettingsService],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  profileSettings = {
    email: 'abc@gmail.com',
    phone: '+0123456789',
    role: 'Player',
  };

  constructor(
    private settingsService: SettingsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadProfileSettings();
  }

  handleButtonClick(event: MouseEvent, action: string) {
    // Add ripple effect

    // Handle different actions
    switch (action) {
      case 'notifications':
        this.router.navigate(['/settings/notifications']);
        break;
      case 'changePassword':
        // Show password change dialog or feedback
        console.log('Change password clicked');
        this.showFeedback('Change password feature coming soon');
        break;
      case 'deleteAccount':
        // Show delete account confirmation or feedback
        console.log('Delete account clicked');
        this.showFeedback('Delete account feature coming soon');
        break;
    }
  }

  private showFeedback(message: string) {
    // You can implement a toast or snackbar here
    // alert(message); // Replace this with a proper UI feedback component
  }

  private loadProfileSettings() {
    this.settingsService
      .getProfileSettings()
      .subscribe((settings) => (this.profileSettings = settings));
  }
}
