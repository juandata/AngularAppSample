import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';} //You'll configure the router with Routes in the RouterModule so import those two symbols from the @angular/router library.
import { HeroesComponent }      from './heroes/heroes.component'; //Import the HeroesComponent so you can reference it in a Route.
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: 'dashboard', component: DashboardComponent },
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },


];

@NgModule({
/*You first must initialize the router and start it listening for browser location changes.

Add RouterModule to the @NgModule.imports array and configure it with the routes in one step by calling
 RouterModule.forRoot() within the imports array, like this:
 The method is called forRoot() because you configure the router at the application's root level. The forRoot()
  method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
 */
  imports: [ RouterModule.forRoot(routes) ],
  //Add an @NgModule.exports array with RouterModule in it.
  //Exporting RouterModule makes router directives available for use in the AppModule components that will need them.
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
