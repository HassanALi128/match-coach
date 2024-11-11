import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../../core/services/settings.service';

interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  videoShareNotifications: {
    email: boolean;
    push: boolean;
  };
  commentReplyNotifications: {
    email: boolean;
    push: boolean;
  };
}

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent implements OnInit {
  settings: NotificationSettings = {
    emailNotifications: false,
    pushNotifications: false,
    videoShareNotifications: {
      email: false,
      push: false,
    },
    commentReplyNotifications: {
      email: false,
      push: false,
    },
  };
  private settingsService = inject(SettingsService);
  constructor() {}

  ngOnInit() {
    this.loadSettings();
  }

  loadSettings() {
    this.settingsService
      .getNotificationSettings()
      .subscribe((settings) => (this.settings = settings));
  }

  toggleMainSetting(setting: 'emailNotifications' | 'pushNotifications') {
    this.settings[setting] = !this.settings[setting];
    this.settingsService.updateNotificationSettings(this.settings).subscribe();
  }

  toggleSetting(category: string, type: 'email' | 'push') {
    if (category === 'videoShare') {
      this.settings.videoShareNotifications[type] =
        !this.settings.videoShareNotifications[type];
    } else if (category === 'commentReply') {
      this.settings.commentReplyNotifications[type] =
        !this.settings.commentReplyNotifications[type];
    }

    this.settingsService.updateNotificationSettings(this.settings).subscribe();
  }
}
