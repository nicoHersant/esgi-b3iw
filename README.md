# esgi-b3iw
préparation certification Angular

Séance 1 : Introduction à Angular et mise en place de l'environnement
Exemple de code : Création d'une première application Angular avec un composant simple

Création du composant principal

    // app.component.ts
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-root',
    template: `
        <h1>Bienvenue sur ma première application Angular !</h1>
        <app-bienvenue></app-bienvenue>
    `,
    styles: []
    })
    export class AppComponent { }

Création d'un composant enfant

    // bienvenue.component.ts
    import { Component } from '@angular/core';

    @Component({
    selector: 'app-bienvenue',
    template: `
        <p>Bonjour, {{ nom }} !</p>
    `,
    styles: []
    })
    export class BienvenueComponent {
    nom: string = 'cher développeur';
    }

Enregistrement du composant dans le module

    // app.module.ts
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';

    import { AppComponent } from './app.component';
    import { BienvenueComponent } from './bienvenue/bienvenue.component';

    @NgModule({
      declarations: [
        AppComponent,
        BienvenueComponent
      ],
      imports: [
        BrowserModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }

Exercice pratique

Objectif : Créer une application Angular basique avec des composants et du data binding.

Étapes :

Installation de l'environnement :

Installez Node.js et npm sur votre machine.

Installez l'Angular CLI avec la commande :

    npm install -g @angular/cli

Créez un nouveau projet Angular :

    ng new mon-premier-projet

Accédez au répertoire du projet et lancez l'application :

    cd mon-premier-projet
    ng serve --open

Création d'un composant personnalisé :

    Générez un nouveau composant nommé salutation :

    ng generate component salutation

Dans salutation.component.ts, ajoutez une propriété message :

    export class SalutationComponent {
    message: string = 'Bienvenue dans le monde d\'Angular !';
    }

Dans salutation.component.html, affichez le message :

    <h2>{{ message }}</h2>

Utilisation du composant :

Dans app.component.html, insérez le composant salutation en utilisant son sélecteur :

    <app-salutation></app-salutation>

Data Binding :

    Ajoutez un champ de saisie pour modifier le message en temps réel :

Dans salutation.component.html :

    <input [(ngModel)]="message" placeholder="Entrez votre message">
    <h2>{{ message }}</h2>

N'oubliez pas d'importer le module FormsModule dans app.module.ts :

            import { FormsModule } from '@angular/forms';

            @NgModule({
              // ...
              imports: [
                BrowserModule,
                FormsModule
              ],
              // ...
            })

    Exploration supplémentaire :
        Expérimentez avec les styles en ajoutant du CSS dans salutation.component.css.
        Ajoutez un autre composant pour afficher la date et l'heure actuelles.

Séance 2 : Composants avancés, Directives et Pipes
Exemple de code : Utilisation des directives et création d'un pipe personnalisé

    Utilisation des directives *ngFor et *ngIf

    <!-- app.component.html -->
    <h1>Liste des tâches</h1>
    <ul>
    <li *ngFor="let tâche of tâches">
        {{ tâche.nom }}
        <span *ngIf="tâche.terminée">(Terminée)</span>
    </li>
    </ul>

Création d'un pipe personnalisé

    // status.pipe.ts
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
    name: 'status'
    })
    export class StatusPipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'Terminée' : 'En cours';
    }
    }

Utilisation du pipe dans le template

    <!-- app.component.html -->
    <h1>Liste des tâches</h1>
    <ul>
    <li *ngFor="let tâche of tâches">
        {{ tâche.nom }} - {{ tâche.terminée | status }}
    </li>
    </ul>

Enregistrement du pipe dans le module

    // app.module.ts
    import { StatusPipe } from './status.pipe';

    @NgModule({
      declarations: [
        // ...
        StatusPipe
      ],
      // ...
    })
    export class AppModule { }

Exercice pratique

Objectif : Approfondir les notions de data binding, directives, pipes et communication entre composants.

Étapes :

    Data Binding approfondi :
        Créez un composant produit-liste qui affiche une liste de produits.
        Chaque produit doit avoir un nom, un prix et une propriété enStock (booléen).
        Utilisez *ngFor pour afficher la liste des produits dans un tableau.
        Utilisez *ngIf pour afficher "En stock" ou "Rupture de stock" en fonction de la disponibilité.

    Exemple :

    <!-- produit-liste.component.html -->
    <table>
    <tr>
        <th>Nom</th>
        <th>Prix</th>
        <th>Disponibilité</th>
    </tr>
    <tr *ngFor="let produit of produits">
        <td>{{ produit.nom }}</td>
        <td>{{ produit.prix | currency:'EUR' }}</td>
        <td>
        <span *ngIf="produit.enStock; else rupture">En stock</span>
        <ng-template #rupture>Rupture de stock</ng-template>
        </td>
    </tr>
    </table>

Création d'une directive personnalisée :

    Créez une directive surbrillance qui change la couleur de fond d'un élément au survol.
    Appliquez cette directive aux lignes du tableau pour mettre en évidence le produit survolé.

Directive :

    // surbrillance.directive.ts
    import { Directive, ElementRef, HostListener } from '@angular/core';

    @Directive({
    selector: '[appSurbrillance]'
    })
    export class SurbrillanceDirective {
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.style.backgroundColor = '#eef';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.backgroundColor = null;
    }
    }

Utilisation :

    <tr *ngFor="let produit of produits" appSurbrillance>
    <!-- ... -->
    </tr>

    Pipes personnalisés :

        Créez un pipe majuscule qui transforme une chaîne de caractères en majuscules.
        Utilisez ce pipe pour afficher le nom des produits en majuscules.

    Pipe :

    // majuscule.pipe.ts
    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
    name: 'majuscule'
    })
    export class MajusculePipe implements PipeTransform {
    transform(value: string): string {
        return value.toUpperCase();
    }
    }

Utilisation :

    <td>{{ produit.nom | majuscule }}</td>

Communication entre composants :

    Créez un composant produit-détail qui affiche les détails d'un produit sélectionné.
    Dans produit-liste, ajoutez un bouton "Voir détails" pour chaque produit.
    Utilisez @Input pour passer les données du produit au composant produit-détail.
    Dans produit-détail, affichez toutes les informations du produit.
    Ajoutez un bouton "Ajouter au panier" dans produit-détail et utilisez @Output pour émettre un événement vers le composant parent.

Dans produit-liste.component.html :

    <!-- ... -->
    <button (click)="selectProduit(produit)">Voir détails</button>
    <!-- ... -->
    <app-produit-detail [produit]="produitSélectionné" (ajouterPanier)="onAjouterPanier($event)"></app-produit-detail>

Dans produit-liste.component.ts :

    export class ProduitListeComponent {
    produits = [/* ... */];
    produitSélectionné: Produit;

    selectProduit(produit: Produit) {
        this.produitSélectionné = produit;
    }

    onAjouterPanier(produit: Produit) {
        console.log('Produit ajouté au panier :', produit);
    }
    }

Dans produit-detail.component.ts :

    import { Component, Input, Output, EventEmitter } from '@angular/core';

    @Component({
    selector: 'app-produit-detail',
    templateUrl: './produit-detail.component.html',
    styleUrls: ['./produit-detail.component.css']
    })
    export class ProduitDetailComponent {
    @Input() produit: Produit;
    @Output() ajouterPanier = new EventEmitter<Produit>();

    ajouterAuPanier() {
        this.ajouterPanier.emit(this.produit);
    }
    }

Dans produit-detail.component.html :

    <div *ngIf="produit">
      <h2>Détails du produit : {{ produit.nom }}</h2>
      <p>Prix : {{ produit.prix | currency:'EUR' }}</p>
      <p>Description : {{ produit.description }}</p>
      <button (click)="ajouterAuPanier()">Ajouter au panier</button>
    </div>

