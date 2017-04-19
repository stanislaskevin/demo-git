## Introduction à l'algorithmique

### Avec le langage Javascript

  
  

2013-02

  
  
_ [Gnuside](http://www.gnuside.com) / [@gnuside](http://twitter.com/gnuside) _

## Algo-quoi ?

### Objectif

Obtenir de la machine qu'elle effectue un travail à notre place

### Problème

Expliquer à la machine comment elle doit s'y prendre ?

  

_Mais.. comment le lui dire_

_Comment le lui apprendre ?_

_Comment s'assurer qu'elle fait ce travail aussi bien que nous ?_

_Mieux que nous ?_

### Thèmes abordés dans ce cours

  * Apprentissage d'un langage
  * Notions de base
  * Structures de données
  * Résolution de problemes complexes

### Vous en avez déjà fait ...

Briques de LEGO -&gt; Caserne de pompiers

Planches &amp; vis -&gt; Étagères BILLY

Ingrédients -&gt; Forêt noire

## Structure du langage

### Les instructions

    
    
    instruction1;
    instruction2; instruction3;
    
    instruction3;

  

Un point virgule sépare chaque instruction.

### Les espaces

    
    
    instruction_1;
        instruction_1_1;
            instruction_1_2;
            instruction_2;     instruction_3;

  

Le langage n'est pas sensible aux espaces

### Indentation et présentation

    
    
    function toggle(elemID) {
    var elem = document.getElementById(elemID);
    
    if (elem.style.display == 'block') {
    elem.style.display = 'none';	
    } else {
    elem.style.display = 'block';	
    }
    }

  

Le code doit être facile à lire et comprendre : une seule instruction par
ligne, des blocs clairs, etc.

### Commentaires

Commentaire sur une seule ligne

    
    
    instruction_1; // Ceci est ma première instruction
    instruction_2;
    // La troisième instruction ci-dessous :
    instruction_3;

  

Commentaires multi-lignes

    
    
    /* Ce script comporte 2 instructions :
    	- Instruction 1 qui fait autre chose
    	- Instruction 2 qui termine le script
    */ 
    instruction_1; 
    instruction_2;
    

### Utilisation des fonctions

    
    
    myFunction();
    
    alert('Hello world!');
    

_Usage: nomDeLaFonction(parametre1, parametre2, ...)_

## Les variables

### Déclaration

Noms de variables

Assignation de valeur

Sensibilité à la casse

Déclaration &amp; assignation

Déclarations multiples

### Types de variables

### Boites de dialogue

### Console log

### Placer le code dans la page

### Quelques aides

### Coté asynchrone

## Variables

## Operateurs arithmétiques

### Concaténation

### Conversion des types

## Conditions

## Booléens

### If - Else

### Switch

### Ternaires

### Conditions et variables

## Boucles

### Définition

### Incrémentation

### While

### Do - While

### For

## Fonctions

### Définition et idée

### Concevoir des fonctions

### Portée des variables

### Arguments

### Valeurs de retour

### Fonctions anonymes

## Objets

### Définition

### Usage

### Objets littéraux

### Déclaration

## Tableaux

### Parcourir un tableau

### Manipulation d'un tableau

## Fin

### Références

  * [Debian squeeze - Installation Guide](http://www.debian.org/releases/stable/installmanual)
  * [Manuel de référence Debian pour i386](http://www.debian.org/releases/stable/i386/)
  * [Formation Debian GNU/Linux](http://formation-debian.via.ecp.fr/)
  * [Distrowatch](http://distrowatch.com/)

### Des questions ?

