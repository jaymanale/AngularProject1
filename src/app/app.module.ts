import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './body/recipe/recipe.component';
import { RecipeListComponent } from './body/recipe/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './body/recipe/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './body/recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './body/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './body/shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
