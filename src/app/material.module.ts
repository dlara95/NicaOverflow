import { NgModule } from '@angular/core';
import { MatIconModule, MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatListModule, MatGridListModule, MatRadioModule, MatProgressSpinnerModule } from '@angular/material';

const modules = [
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatGridListModule,
    MatRadioModule,
    MatProgressSpinnerModule
]
@NgModule({
    imports: modules,
    exports: modules
})
export class MaterialModule {}