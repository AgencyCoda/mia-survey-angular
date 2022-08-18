import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiaSurveyCreatePageComponent, SurveyListPageComponent } from 'projects/agencycoda/mia-survey-panel/src/public-api';
import { MiaSurveyExecutePageConfig, SurveyExecutePageComponent } from 'projects/agencycoda/mia-survey-viewer/src/public-api';

const routes: Routes = [
  { path: 'survey/list', component: SurveyListPageComponent },
  { path: 'survey/create', component: MiaSurveyCreatePageComponent },
  { path: 'survey/edit/:id', component: MiaSurveyCreatePageComponent },
  { 
    path: 'survey/run/:id/:token', 
    component: SurveyExecutePageComponent,
    data: {
      onlyInvitation: true
    } as MiaSurveyExecutePageConfig
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
