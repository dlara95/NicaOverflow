import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
]
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {}