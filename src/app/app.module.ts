import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {Location} from '@angular/common';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {TodoDataService} from './todo-data.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TodoListComponent} from './todo-list/todo-list.component';
import {TodoListItemComponent} from './todo-list-item/todo-list-item.component';
import {MyPipePipe} from './myPipe.pipe';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {LoginFormComponent} from './login-form/login-form.component';
import {HighlightDirective} from './highlight.directive';
import {TestHoverHighlightComponent} from './test-hover-highlight/test-hover-highlight.component';
import {RoutingComponent} from './routing/routing.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    TodoListComponent,
    TodoListItemComponent,
    TodoFooterComponent,
    LoginFormComponent,
    HighlightDirective,
    TestHoverHighlightComponent,
    RoutingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [TodoDataService, Location],
  bootstrap: [AppComponent]
})
export class AppModule {
}
