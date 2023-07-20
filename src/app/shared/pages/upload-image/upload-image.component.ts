import { Component } from '@angular/core';
import { FileuploadService } from 'src/app/core/services/fileupload.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent {
  selectedFile: File | null = null;

  constructor(private fileupload: FileuploadService) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadImage(): void {
    if (!this.selectedFile) {
      console.log('No file selected.');
      return;
    } else {
      this.fileupload.uploadImage(this.selectedFile);
    }
  }
}
