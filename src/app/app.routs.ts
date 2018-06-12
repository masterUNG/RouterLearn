import {Route, RouterModule, Routes} from '@angular/router';
import {FirstcomponentComponent} from './components/firstcomponent/firstcomponent.component';
import {SecondcomponentComponent} from './components/secondcomponent/secondcomponent.component';
import {ThirdcomponentComponent} from './components/thirdcomponent/thirdcomponent.component';
import {FourcomponentComponent} from './components/fourcomponent/fourcomponent.component';

const routes : Routes = [
  {path : '', component : FirstcomponentComponent},
  {path : 'second', component : SecondcomponentComponent},
  {path : 'third', component : ThirdcomponentComponent},
  {path : 'four', component : FourcomponentComponent}
  ]

export const routing = RouterModule.forRoot(routes);
