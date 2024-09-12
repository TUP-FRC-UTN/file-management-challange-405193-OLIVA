import { Component, Input, input } from '@angular/core';
import { FileItem, FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {
  @Input() inputFiles:FileItem[] = [];
  files:FileItem[] = [];
  fileType = FileType.FILE;

  ngOnChanges(){
    this.files = this.inputFiles;
    this.files.sort((a, b) => {
      if(a.type < b.type) return -1;
      if(a.type > b.type) return 1;
      if(a.name < b.name) return -1;
      if(a.name > b.name) return -1; 
      return 0;
    });
  }
}
