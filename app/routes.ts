import { DashboardComponent } from "./dashboard/dashboard.component";
import { RouterConfig } from "@angular/router";


export const AppRoutes: RouterConfig = [
    { path: 'dashboard', component: DashboardComponent },
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: 'full'
    },
];