import { Component, Input, input } from '@angular/core';
import { FileItem } from '../../models/file.item.model';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [],
  templateUrl: './files.component.html',
  styleUrl: './files.component.css'
})
export class FilesComponent {
  @Input() inputFiles:FileItem[] = []
}
