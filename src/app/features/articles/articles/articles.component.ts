import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ArticleImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})
export class ArticlesComponent implements OnInit {
  articles: ArticleImage[] = [];

  ngOnInit() {
    this.loadArticleImages();
  }

  loadArticleImages() {
    // Liste des images d'articles avec titres et descriptions basés sur les noms
    this.articles = [
      { src: 'casque.jpg', alt: 'Casque', title: 'Casque Audio', description: 'Un choix idéal pour ceux qui recherchent qualité et durabilité dans l\'audio.' },
      { src: 'disque dur.jpg', alt: 'Disque Dur', title: 'Disque Dur Externe', description: 'Stockage fiable et efficace pour toutes vos données importantes.' },
      { src: 'imprimante.jpg', alt: 'Imprimante', title: 'Imprimante Multifonction', description: 'Imprimez, scannez et copiez avec cette imprimante moderne.' },
      { src: 'ordinateurs.jpg', alt: 'Ordinateurs', title: 'Ordinateur Portable', description: 'Puissance et portabilité pour vos tâches quotidiennes.' },
      { src: 'souris et clavier.jpg', alt: 'Souris et Clavier', title: 'Ensemble Souris et Clavier', description: 'Combo ergonomique pour une expérience de frappe confortable.' },
      { src: 'usb.jpg', alt: 'USB', title: 'Clé USB', description: 'Stockage portable et rapide pour vos fichiers essentiels.' }
    ];
  }
}
