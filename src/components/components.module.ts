import { NgModule } from '@angular/core';
import { CompPostComponent } from './comp-post/comp-post';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CompPostComponent,
    CompPostComponent],
	imports: [IonicModule],
	exports: [CompPostComponent,
    CompPostComponent]
})
export class ComponentsModule {}
