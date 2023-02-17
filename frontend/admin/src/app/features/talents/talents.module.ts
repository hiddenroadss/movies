import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalentsComponent } from './talents.component';
import { TalentsRoutingModule } from './talents-routing.module';
import { TalentsCreateComponent } from './talents-create/talents-create.component';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/components/button/button.module';

@NgModule({
  declarations: [TalentsComponent, TalentsCreateComponent],
  imports: [
    CommonModule,
    TalentsRoutingModule,
    FileUploadModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
})
export class TalentsModule {}
