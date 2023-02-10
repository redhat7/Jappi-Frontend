import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

// Component
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
      },
      {
        path: "login",
        loadChildren: "./login/login.module#LoginModule",
      },
      {
        path: "registro",
        loadChildren: "./register/register.module#RegisterModule",
      },
      {
        path: "validar",
        loadChildren:
          "./validate-registro/validate-registro.module#ValidateRegistroModule",
      },
      {
        path: "",
        loadChildren: "./admin/admin.module#AdminModule",
      },

      {
        path: "",
        loadChildren: "./motorizado/motorizado.module#MotorizadoModule",
      },
    ],
  },
  {
    path: "**",
    loadChildren: "./not-found/not-found.module#NotFoundModule",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
