import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  service_url : string = '';

  constructor(private http: HttpClient, private globalservice : GlobalService) {}

  uploadImage(selectedFile : any): void {
    if (!selectedFile) {
      console.log('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile, selectedFile.name);

    this.service_url = this.globalservice.base_serviceUrl + 'upload/UploadImage';

    this.http.post<any>(this.service_url, formData).subscribe({
     next  : (response) => console.log('Image uploaded successfully.'),
     error : (error)  => console.log("failed log..")
    });
  }
}
