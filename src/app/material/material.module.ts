import { NgModule } from "@angular/core";

// Material Modules
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";

const materialModules = [MatMenuModule, MatDialogModule, MatSelectModule];
@NgModule({
  declarations: [],
  imports: [materialModules],
  exports: [materialModules],
})
export class MaterialModule {}
