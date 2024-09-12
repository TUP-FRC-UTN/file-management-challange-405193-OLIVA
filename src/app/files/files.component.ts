import { Component, Input } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {
  @Input() inputFiles:FileItem[] = [];
  fileType = FileType.FILE;
  selectedCheck:Boolean[] = [];
  selectedFiles:FileItem[] = [];

  ngOnChanges(){
    this.inputFiles = this.inputFiles.sort((a, b) => {
      if(a.type === b.type){
        return a.name < b.name ? -1 : 1;
      }
      else{
        return a.type < b.type ? -1 : 1;
      }
    });
  }
}
