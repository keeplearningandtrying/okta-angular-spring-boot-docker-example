import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoteListComponent } from './note-list/note-list.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteService } from './note.service';
import { NOTE_ROUTES } from './note.routes';
import { SortableHeaderDirective } from './note-list/sortable.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(NOTE_ROUTES),
    NgbModule
  ],
  declarations: [
    NoteListComponent,
    NoteEditComponent,
    SortableHeaderDirective
  ],
  providers: [NoteService],
  exports: []
})
export class NoteModule { }
