import { NgModule } from "@angular/core";
import { RouterLinkActive, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./shared/components/home/home.component";
import { UsersComponent } from "./shared/components/users/users.component";
import { ProductsComponent } from "./shared/components/products/products.component";
import { PagenotfoundComponent } from "./shared/components/pagenotfound/pagenotfound.component";


const routes : Routes = [
    {
        path : '', component : HomeComponent
    },
    {
        path : 'users', component : UsersComponent
    },
    {
        path :'products',component : ProductsComponent
    },
    {
        path : 'pagenotfound', component : PagenotfoundComponent
    },
    {
        path : '**', redirectTo : 'pagenotfound'
    }
]


@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class ApproutingModule{

}