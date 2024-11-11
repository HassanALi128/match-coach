import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface NotificationSettings {
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

export interface ProfileSettings {
  email: string;
  phone: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private apiUrl = '/api/profile/settings';

  constructor(private http: HttpClient) {}

  getNotificationSettings(): Observable<NotificationSettings> {
    return this.http.get<NotificationSettings>(`${this.apiUrl}/notifications`);
  }

  updateNotificationSettings(
    settings: NotificationSettings
  ): Observable<NotificationSettings> {
    return this.http.put<NotificationSettings>(
      `${this.apiUrl}/notifications`,
      settings
    );
  }

  getProfileSettings(): Observable<ProfileSettings> {
    return this.http.get<ProfileSettings>(`${this.apiUrl}/profile`);
  }

  updateProfileSettings(
    settings: ProfileSettings
  ): Observable<ProfileSettings> {
    return this.http.put<ProfileSettings>(`${this.apiUrl}/profile`, settings);
  }
}
