import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Article {
  title: string;
  content: string;
  date: string;
}

@Component({
  selector: 'app-add-articles',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-articles.component.html',
  styleUrls: ['./add-articles.component.css']
})
export class AddArticlesComponent {
  articleForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.articleForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.articleForm.valid) {
      const newArticle: Article = {
        title: this.articleForm.value.title,
        content: this.articleForm.value.content,
        date: new Date().toISOString()
      };

      // Récupérer les articles existants du localStorage
      const articles = JSON.parse(localStorage.getItem('articles') || '[]');

      // Ajouter le nouvel article
      articles.push(newArticle);

      // Sauvegarder dans localStorage
      localStorage.setItem('articles', JSON.stringify(articles));

      alert('Article ajouté avec succès!');
      this.articleForm.reset();
    }
  }

  goBack() {
    this.router.navigate(['/articles']);
  }
}
