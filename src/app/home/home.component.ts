import { RecipesService } from './../recipes.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  recipes: any[] = [];
  loading: boolean = false;

  constructor(private recipesService: RecipesService) {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.loading = true;
    this.recipesService.getRecipes().subscribe(
      (response: any) => {
        this.recipes = response;
        this.loading = false;
      }
    );
  }
  scrollToRecipes() {
    const element = document.getElementById('recipe-section');
    if (element) {
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}



