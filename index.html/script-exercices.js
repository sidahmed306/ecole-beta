document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const metierId = urlParams.get('metier');
    const metierName = urlParams.get('metierName');
    
    if (metierName) {
        document.getElementById('exercicesTitle').innerHTML = `<i class="fas fa-pen-fancy"></i> Exercices - ${decodeURIComponent(metierName)}`;
        document.getElementById('exercicesDescription').textContent = `Liste des exercices disponibles pour le métier de ${decodeURIComponent(metierName)}`;
    }
    
    // Données des cours pour tous les métiers
    const coursData = {
        1: [ // Développeur Web
            { id: 1, titre: "CHAP1" },
            { id: 2, titre: "CHAP2" },
            { id: 3, titre: "CHAP3" },
            { id: 4, titre: "CHAP4" },
            { id: 5, titre: "CHAP5" }
        ],
        2: [ // Designer Graphique
            { id: 6, titre: "CHAP1" },
            { id: 7, titre: "CHAP2" },
            { id: 8, titre: "CHAP3" }
        ],
        3: [ // Comptable
            { id: 9, titre: "CHAP1" },
            { id: 10, titre: "CHAP2" },
            { id: 11, titre: "CHAP3" }
        ],
        4: [ // Infirmier
            { id: 12, titre: "CHAP1" },
            { id: 13, titre: "CHAP2" },
            { id: 14, titre: "CHAP3" }
        ],
        5: [ // Chef de Projet
            { id: 15, titre: "CHAP1" },
            { id: 16, titre: "CHAP2" },
            { id: 17, titre: "CHAP3" }
        ],
        6: [ // Commercial
            { id: 18, titre: "CHAP1" },
            { id: 19, titre: "CHAP2" },
            { id: 20, titre: "CHAP3" }
        ],
        7: [ // Data Scientist
            { id: 21, titre: "Python pour la Data Science" },
            { id: 22, titre: "Machine Learning" },
            { id: 23, titre: "Visualisation de Données" }
        ],
        8: [ // Photographe
            { id: 24, titre: "Photographie Numérique" },
            { id: 25, titre: "Retouche Photo" },
            { id: 26, titre: "Éclairage Studio" }
        ]
    };
    
    // Exercices pour tous les métiers
    const exercicesData = {
        1: [ // Développeur Web
            { id: 1, cours_id: 1, titre: "Structure HTML", description: "Créez une page HTML de base", enonce: "Implémentez une structure HTML5 complète", solution: "<!DOCTYPE html>...", difficulte: "facile", date: "2023-01-10" },
            { id: 2, cours_id: 1, titre: "Formulaire HTML", description: "Créez un formulaire accessible", enonce: "Développez un formulaire avec validation", solution: "<form>...</form>", difficulte: "facile", date: "2023-01-15" },
            { id: 3, cours_id: 2, titre: "Flexbox Layout", description: "Créez un layout responsive", enonce: "Utilisez Flexbox pour une mise en page", solution: ".container { display: flex; }", difficulte: "moyen", date: "2023-02-05" },
            { id: 4, cours_id: 3, titre: "Fonction JavaScript", description: "Manipulation de tableaux", enonce: "Implémentez map/filter/reduce", solution: "function processArray() {...}", difficulte: "moyen", date: "2023-02-20" },
            { id: 5, cours_id: 4, titre: "Composant React", description: "Création d'un composant", enonce: "Développez un composant avec état", solution: "function Counter() {...}", difficulte: "difficile", date: "2023-03-10" },
            { id: 6, cours_id: null, titre: "Application Fullstack", description: "Projet final intégré", enonce: "Développez une application complète", solution: "// Code complet...", difficulte: "difficile", date: "2023-04-01" }
        ],
        2: [ // Designer Graphique
            { id: 7, cours_id: 6, titre: "Retouche Photo", description: "Correction couleur et contraste", enonce: "Retouchez une photo selon le brief", solution: "Utiliser les outils Photoshop", difficulte: "facile", date: "2023-01-12" },
            { id: 8, cours_id: 7, titre: "Logo Vectoriel", description: "Création d'un logo", enonce: "Dessinez un logo dans Illustrator", solution: "Utiliser les outils vectoriels", difficulte: "moyen", date: "2023-02-08" },
            { id: 9, cours_id: 8, titre: "Maquette UI", description: "Design d'interface", enonce: "Créez une maquette Figma", solution: "Prototype interactif", difficulte: "difficile", date: "2023-03-15" }
        ],
        3: [ // Comptable
            { id: 10, cours_id: 9, titre: "Bilan Comptable", description: "Établir un bilan", enonce: "Complétez un bilan à partir des données", solution: "Actif = Passif + Capitaux", difficulte: "facile", date: "2023-01-20" },
            { id: 11, cours_id: 10, titre: "Calcul TVA", description: "Calcul des taxes", enonce: "Calculez la TVA pour différents montants", solution: "TVA = 20% du HT", difficulte: "facile", date: "2023-02-10" },
            { id: 12, cours_id: 11, titre: "Analyse Financière", description: "Ratio de rentabilité", enonce: "Calculez les ratios clés", solution: "ROI = (Gain / Investissement)", difficulte: "difficile", date: "2023-03-20" }
        ],
        4: [ // Infirmier
            { id: 13, cours_id: 12, titre: "Prise de Constantes", description: "Mesure des signes vitaux", enonce: "Prenez et interprétez les constantes", solution: "Pouls, TA, Température, etc.", difficulte: "facile", date: "2023-01-18" },
            { id: 14, cours_id: 13, titre: "Calcul de Dose", description: "Administration médicamenteuse", enonce: "Calculez la dose à administrer", solution: "Dose = Poids × Dosage", difficulte: "moyen", date: "2023-02-15" },
            { id: 15, cours_id: 14, titre: "Scenario d'Urgence", description: "Gestion de cas critique", enonce: "Réagissez à un cas d'urgence", solution: "Protocole ABCDE", difficulte: "difficile", date: "2023-03-18" }
        ],
        5: [ // Chef de Projet
            { id: 16, cours_id: 15, titre: "Backlog Produit", description: "Création d'un backlog", enonce: "Rédigez des user stories", solution: "En tant que... Je veux...", difficulte: "facile", date: "2023-01-22" },
            { id: 17, cours_id: 16, titre: "Gestion de Conflit", description: "Résolution de problème", enonce: "Analysez et résolvez un conflit", solution: "Écoute active, médiation", difficulte: "moyen", date: "2023-02-18" },
            { id: 18, cours_id: 17, titre: "Plan Projet", description: "Élaboration d'un planning", enonce: "Créez un diagramme de Gantt", solution: "Jalons, dépendances, ressources", difficulte: "difficile", date: "2023-03-22" }
        ],
        6: [ // Commercial
            { id: 19, cours_id: 18, titre: "Pitch de Vente", description: "Présentation produit", enonce: "Préparez un pitch de 2 minutes", solution: "Problème-Solution-Bénéfice", difficulte: "facile", date: "2023-01-25" },
            { id: 20, cours_id: 19, titre: "Négociation", description: "Simulation de négociation", enonce: "Jeu de rôle commercial", solution: "Techniques WIN-WIN", difficulte: "moyen", date: "2023-02-20" },
            { id: 21, cours_id: 20, titre: "Stratégie CRM", description: "Plan de fidélisation", enonce: "Concevez un programme de fidélité", solution: "Segmentation, avantages", difficulte: "difficile", date: "2023-03-25" }
        ],
        7: [ // Data Scientist
            { id: 22, cours_id: 21, titre: "Nettoyage de Données", description: "Prétraitement des données", enonce: "Nettoyez un dataset désordonné", solution: "Pandas: dropna(), fillna()", difficulte: "facile", date: "2023-01-28" },
            { id: 23, cours_id: 22, titre: "Modèle de Régression", description: "Prédiction linéaire", enonce: "Implémentez une régression", solution: "from sklearn.linear_model...", difficulte: "moyen", date: "2023-02-22" },
            { id: 24, cours_id: 23, titre: "Dashboard Interactif", description: "Visualisation de données", enonce: "Créez un dashboard avec Plotly", solution: "import plotly.express...", difficulte: "difficile", date: "2023-03-28" }
        ],
        8: [ // Photographe
            { id: 25, cours_id: 24, titre: "Photo en Basse Lumière", description: "Gestion de l'exposition", enonce: "Prenez des photos en basse lumière", solution: "Ouverture, ISO, vitesse", difficulte: "facile", date: "2023-01-30" },
            { id: 26, cours_id: 25, titre: "Retouche Portrait", description: "Traitement de peau", enonce: "Retouchez un portrait professionnel", solution: "Techniques de dodging/burning", difficulte: "moyen", date: "2023-02-25" },
            { id: 27, cours_id: 26, titre: "Setup d'Éclairage", description: "Configuration studio", enonce: "Créez un setup 3-points lights", solution: "Key light, fill, backlight", difficulte: "difficile", date: "2023-03-30" }
        ]
    };

    const cours = coursData[metierId] || [];
    const exercices = exercicesData[metierId] || [];
    
    function populateCoursFilter() {
        const coursFilter = document.getElementById('coursFilter');
        coursFilter.innerHTML = '<option value="all">Tous les cours</option>';
        
        cours.forEach(c => {
            const option = document.createElement('option');
            option.value = c.id;
            option.textContent = c.titre;
            coursFilter.appendChild(option);
        });
        
        const standaloneOption = document.createElement('option');
        standaloneOption.value = "standalone";
        standaloneOption.textContent = "Exercices indépendants";
        coursFilter.appendChild(standaloneOption);
    }
    
    function displayExercices(filteredExercices = exercices) {
        const exercicesList = document.getElementById('exercicesList');
        exercicesList.innerHTML = '';
        
        if (filteredExercices.length === 0) {
            exercicesList.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-pen-fancy" style="font-size: 2rem; margin-bottom: 15px;"></i>
                    <h3>Aucun exercice disponible</h3>
                    <p>Il n'y a pas encore d'exercices pour ce métier</p>
                </div>
            `;
            return;
        }
        
        filteredExercices.forEach(exo => {
            const linkedCours = exo.cours_id ? cours.find(c => c.id == exo.cours_id) : null;
            
            const exerciseCard = document.createElement('div');
            exerciseCard.className = 'exercise-card';
            exerciseCard.innerHTML = `
                <div class="exercise-header">
                    <h3>${exo.titre}</h3>
                    <span class="difficulte-badge ${exo.difficulte}">${exo.difficulte}</span>
                </div>
                <div class="exercise-content">
                    <div class="exercise-meta">
                        <span><i class="fas ${linkedCours ? 'fa-book' : 'fa-star'}"></i> ${linkedCours ? linkedCours.titre : 'Exercice indépendant'}</span>
                        <span><i class="fas fa-calendar-alt"></i> ${new Date(exo.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div class="exercise-description">
                        <p>${exo.description}</p>
                    </div>
                    <a href="#" class="view-btn" data-exercise-id="${exo.id}">
                        <i class="fas fa-eye"></i> Voir l'exercice
                    </a>
                </div>
            `;
            exercicesList.appendChild(exerciseCard);
        });
        
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const exerciseId = this.getAttribute('data-exercise-id');
                viewExercise(exerciseId);
            });
        });
    }
    
    function viewExercise(exerciseId) {
        const selectedExercise = exercices.find(e => e.id == exerciseId);
        if (selectedExercise) {
            alert(`Exercice: ${selectedExercise.titre}\n\nDescription:\n${selectedExercise.description}\n\nDifficulté: ${selectedExercise.difficulte}\n\nÉnoncé:\n${selectedExercise.enonce}\n\nSolution:\n${selectedExercise.solution}`);
        }
    }
    
    document.getElementById('applyExoFilter').addEventListener('click', function() {
        const difficulte = document.getElementById('difficulteFilter').value;
        const coursId = document.getElementById('coursFilter').value;
        
        let filtered = exercices;
        
        if (difficulte !== 'all') {
            filtered = filtered.filter(e => e.difficulte === difficulte);
        }
        
        if (coursId !== 'all') {
            if (coursId === 'standalone') {
                filtered = filtered.filter(e => e.cours_id === null);
            } else {
                filtered = filtered.filter(e => e.cours_id == coursId);
            }
        }
        
        displayExercices(filtered);
    });
    
    populateCoursFilter();
    displayExercices();
});