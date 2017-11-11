import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule
]
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {}