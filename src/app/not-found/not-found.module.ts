import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NotFoundRoutingModule } from "./not-found.routing";

// Components
import { NotFoundComponent } from "./components/not-found.component";

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule, NotFoundRoutingModule, RouterModule],
})
export class NotFoundModule {}
