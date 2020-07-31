import { PhotoModule } from './photo/photo.module';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';

import { PhotoListModule } from './photo-list/photo-list-module';
import { PhotoFormModule } from './photo-form/photo-form.module';

@NgModule({
    imports: [AppRoutingModule, PhotoModule, PhotoFormModule, PhotoListModule]
})

export class PhotosModule {}
