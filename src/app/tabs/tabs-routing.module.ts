import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'news',
    component: TabsPage,
    children: [
      {
        path: 'list_news',
        loadChildren: () => import('../new-main/new-main.module').then(m => m.NewMainPageModule)
      },
      {
        path: 'add_news',
        loadChildren: () => import('../add-new/add-new.module').then(m => m.AddNewPageModule)
      },
      {
        path: '',
        redirectTo: '/news/list_news',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/news/list_news',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
