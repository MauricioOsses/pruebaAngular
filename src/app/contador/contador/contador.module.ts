import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "src/app/app.component";import { contadorComponent } from "./contador.component";
 "@angular/core";

@NgModule({
    declarations: [
        contadorComponent
    ],
    exports: [
        contadorComponent
    ],
    imports: [
        CommonModule
    ]
})
export class contadorModule {}

