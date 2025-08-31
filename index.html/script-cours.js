document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const metierId = urlParams.get('metier');
    const metierName = urlParams.get('metierName');
    
    if (metierName) {
        document.getElementById('coursTitle').innerHTML = `<i class="fas fa-book-open"></i> Cours - ${decodeURIComponent(metierName)}`;
        document.getElementById('coursDescription').textContent = `Liste des cours disponibles pour le métier de ${decodeURIComponent(metierName)}`;
    }
    
    // Données des cours enrichies
    const coursData = {
        1: [ // MATH (8 cours)
            { id: 1, titre: "LES NOMBRES COMPLEXE", description: "Maîtrisez la structure de base ", contenu: "Balises, attributs, sémantique...", duree: 90, niveau: "débutant", date: "2023-05-10" },
            { id: 2, titre: "LES SUITES", description: "discruption 3n chapitre", contenu: "Transitions, keyframes, transforms...", duree: 120, niveau: "intermédiaire", date: "2023-05-25" },
            { id: 3, titre: "PROBABILITE", description: "discruption 3n chapitre", contenu: "Let/const, arrow functions, promises...", duree: 180, niveau: "intermédiaire", date: "2023-06-15" },
            { id: 4, titre: "LES FONCTIONS", description: "discruption 3n chapitre", contenu: "Hooks, context API, routing...", duree: 240, niveau: "avancé", date: "2023-07-05" },
            { id: 5, titre: "LOGARITHME", description: "discruption 3n chapitre", contenu: "Express, MongoDB, JWT...", duree: 210, niveau: "avancé", date: "2023-07-20" },
            { id: 6, titre: "EXPONNETIELLE", description: "discruption 3n chapitre", contenu: "XSS, CSRF, CORS, HTTPS...", duree: 150, niveau: "intermédiaire", date: "2023-08-10" },
            { id: 7, titre: "TESTE", description: "discruption 3n chapitre", contenu: "Tests unitaires et e2e", duree: 120, niveau: "intermédiaire", date: "2023-08-25" },
            { id: 8, titre: "Performance Web", description: "discruption 3n chapitre", contenu: "Lazy loading, caching, PWA...", duree: 90, niveau: "avancé", date: "2023-09-10" }
        ],
        2: [ // PHYSIQUE (7 cours)
            { id: 9, titre: "PROJECTILE", description: "discruption 3n chapitre ", contenu: "Calques, masques, retouches...", duree: 180, niveau: "débutant", date: "2023-05-12" },
            { id: 10, titre: "CHAMP ELECTRIQUE", description: "discruption 3n chapitre", contenu: "Pathfinder, typographie, logo...", duree: 150, niveau: "intermédiaire", date: "2023-06-02" },
            { id: 11, titre: "CHAMP MAGNETIQUE", description: "discruption 3n chapitre", contenu: "Wireframes, prototypes, Figma...", duree: 120, niveau: "intermédiaire", date: "2023-06-20" },
            { id: 12, titre: "RESSORT", description: "discruption 3n chapitre", contenu: "Animations, transitions...", duree: 210, niveau: "avancé", date: "2023-07-15" },
            { id: 13, titre: "DYNAMIQUE", description: "discruption 3n chapitre ", contenu: "Logo, charte graphique...", duree: 90, niveau: "intermédiaire", date: "2023-08-05" },
            { id: 14, titre: "BOBINE", description: "discruption 3n chapitre", contenu: "Interface, modélisation, rendu...", duree: 240, niveau: "avancé", date: "2023-08-20" },
            { id: 15, titre: "INGINRTG", description: "discruption 3n chapitre", contenu: "CMYK, résolution, saign...", duree: 60, niveau: "débutant", date: "2023-09-05" }
        ],
        3: [ // Comptable (6 cours)
            { id: 16, titre: "Comptabilité Générale", description: "Principes de base", contenu: "Bilan, compte de résultat...", duree: 120, niveau: "débutant", date: "2023-05-15" },
            { id: 17, titre: "Fiscalité Entreprise", description: "Optimisation fiscale", contenu: "IS, TVA, impôts...", duree: 180, niveau: "intermédiaire", date: "2023-06-10" },
            { id: 18, titre: "Paie et RH", description: "Gestion de la paie", contenu: "Bulletins, charges sociales...", duree: 150, niveau: "intermédiaire", date: "2023-06-28" },
            { id: 19, titre: "Analyse Financière", description: "Ratios et indicateurs", contenu: "BFR, ROI, rentabilité...", duree: 90, niveau: "avancé", date: "2023-07-20" },
            { id: 20, titre: "Logiciels Comptables", description: "Sage et Ciel", contenu: "Saisie, rapports, exports...", duree: 60, niveau: "débutant", date: "2023-08-15" },
            { id: 21, titre: "Audit Comptable", description: "Contrôle des comptes", contenu: "Procédures, normes...", duree: 120, niveau: "avancé", date: "2023-09-10" }
        ],
        4: [ // Infirmier (7 cours)
            { id: 22, titre: "Soins Fondamentaux", description: "Bases des soins", contenu: "Hygiène, prise de constantes...", duree: 90, niveau: "débutant", date: "2023-05-18" },
            { id: 23, titre: "Pharmacologie", description: "Médicaments essentiels", contenu: "Classes, posologies...", duree: 120, niveau: "intermédiaire", date: "2023-06-12" },
            { id: 24, titre: "Urgences", description: "Gestes d'urgence", contenu: "RCP, plaies, fractures...", duree: 180, niveau: "intermédiaire", date: "2023-07-05" },
            { id: 25, titre: "Pédiatrie", description: "Soins aux enfants", contenu: "Croissance, vaccins...", duree: 150, niveau: "avancé", date: "2023-07-25" },
            { id: 26, titre: "Gériatrie", description: "Soins aux personnes âgées", contenu: "Pathologies liées à l'âge...", duree: 90, niveau: "intermédiaire", date: "2023-08-18" },
            { id: 27, titre: "Soins Palliatifs", description: "Accompagnement", contenu: "Douleur, fin de vie...", duree: 60, niveau: "avancé", date: "2023-09-12" },
            { id: 28, titre: "Hygiène Hospitalière", description: "Lutte contre les infections", contenu: "Protocoles, désinfection...", duree: 120, niveau: "intermédiaire", date: "2023-10-05" }
        ],
        5: [ // Chef de Projet (6 cours)
            { id: 29, titre: "Gestion de Projet", description: "Méthodologies classiques", contenu: "Cycle en V, Gantt...", duree: 120, niveau: "débutant", date: "2023-05-20" },
            { id: 30, titre: "Agile/Scrum", description: "Méthodes agiles", contenu: "Sprints, user stories...", duree: 180, niveau: "intermédiaire", date: "2023-06-15" },
            { id: 31, titre: "Management d'Équipe", description: "Leadership et motivation", contenu: "Communication, conflits...", duree: 150, niveau: "intermédiaire", date: "2023-07-10" },
            { id: 32, titre: "Gestion des Risques", description: "Identification et mitigation", contenu: "Matrice des risques...", duree: 90, niveau: "avancé", date: "2023-08-05" },
            { id: 33, titre: "Outils PM", description: "Jira, Trello, MS Project", contenu: "Tableaux Kanban, rapports...", duree: 60, niveau: "débutant", date: "2023-08-25" },
            { id: 34, titre: "Budget et ROI", description: "Gestion financière de projet", contenu: "Estimation, suivi...", duree: 120, niveau: "avancé", date: "2023-09-15" }
        ],
        6: [ // Commercial (5 cours)
            { id: 35, titre: "Techniques de Vente", description: "Fondamentaux", contenu: "Processus de vente...", duree: 90, niveau: "débutant", date: "2023-05-22" },
            { id: 36, titre: "Négociation", description: "Stratégies gagnantes", contenu: "Techniques, objections...", duree: 120, niveau: "intermédiaire", date: "2023-06-18" },
            { id: 37, titre: "CRM", description: "Gestion de la relation client", contenu: "Salesforce, Hubspot...", duree: 60, niveau: "débutant", date: "2023-07-15" },
            { id: 38, titre: "Vente B2B", description: "Spécificités", contenu: "Cycle long, décideurs...", duree: 90, niveau: "intermédiaire", date: "2023-08-10" },
            { id: 39, titre: "Marketing Digital", description: "Leads generation", contenu: "SEO, réseaux sociaux...", duree: 150, niveau: "avancé", date: "2023-09-05" }
        ],
        7: [ // Data Scientist (7 cours)
            { id: 40, titre: "Python pour Data Science", description: "Numpy, Pandas", contenu: "Manipulation de données...", duree: 180, niveau: "débutant", date: "2023-05-25" },
            { id: 41, titre: "Machine Learning", description: "Algorithmes de base", contenu: "Régression, classification...", duree: 240, niveau: "intermédiaire", date: "2023-06-20" },
            { id: 42, titre: "SQL Avancé", description: "Requêtes complexes", contenu: "Joins, subqueries...", duree: 120, niveau: "intermédiaire", date: "2023-07-18" },
            { id: 43, titre: "Visualisation", description: "Matplotlib, Seaborn", contenu: "Graphiques avancés...", duree: 90, niveau: "débutant", date: "2023-08-15" },
            { id: 44, titre: "Big Data", description: "Hadoop, Spark", contenu: "Traitement distribué...", duree: 210, niveau: "avancé", date: "2023-09-10" },
            { id: 45, titre: "Deep Learning", description: "Réseaux neuronaux", contenu: "TensorFlow, Keras...", duree: 240, niveau: "avancé", date: "2023-10-05" },
            { id: 46, titre: "Analyse Business", description: "Tableaux de bord", contenu: "KPI, reporting...", duree: 150, niveau: "intermédiaire", date: "2023-10-30" }
        ],
        8: [ // Photographe (6 cours)
            { id: 47, titre: "Photographie de Base", description: "Réglages manuels", contenu: "ISO, ouverture, vitesse...", duree: 120, niveau: "débutant", date: "2023-05-28" },
            { id: 48, titre: "Lightroom", description: "Post-traitement", contenu: "Catalogues, presets...", duree: 90, niveau: "débutant", date: "2023-06-22" },
            { id: 49, titre: "Portrait", description: "Techniques avancées", contenu: "Éclairage, posing...", duree: 150, niveau: "intermédiaire", date: "2023-07-20" },
            { id: 50, titre: "Photo de Paysage", description: "Composition", contenu: "Règle des tiers, filtres...", duree: 120, niveau: "intermédiaire", date: "2023-08-18" },
            { id: 51, titre: "Photo de Mode", description: "Studio et extérieur", contenu: "Direction de modèle...", duree: 180, niveau: "avancé", date: "2023-09-15" },
            { id: 52, titre: "Retouche Pro", description: "Photoshop avancé", contenu: "Dodge & burn, masking...", duree: 210, niveau: "avancé", date: "2023-10-10" }
        ]
    };

    const cours = coursData[metierId] || [];
    
    function displayCourses(filteredCours = cours) {
        const coursList = document.getElementById('coursList');
        coursList.innerHTML = '';
        
        if (filteredCours.length === 0) {
            coursList.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-book-open" style="font-size: 2rem; margin-bottom: 15px;"></i>
                    <h3>Aucun cours disponible</h3>
                    <p>Il n'y a pas encore de cours pour ce métier</p>
                </div>
            `;
            return;
        }
        
        filteredCours.forEach(c => {
            const courseCard = document.createElement('div');
            courseCard.className = 'course-card';
            courseCard.innerHTML = `
                <div class="course-header">
                    <h3>${c.titre}</h3>
                    <span class="niveau-badge ${c.niveau}">${c.niveau}</span>
                </div>
                <div class="course-content">
                    <div class="course-meta">
                        <span><i class="fas fa-clock"></i> ${c.duree} min</span>
                        <span><i class="fas fa-calendar-alt"></i> ${new Date(c.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div class="course-description">
                        <p>${c.description}</p>
                    </div>
                    <a href="#" class="view-btn" data-course-id="${c.id}">
                        <i class="fas fa-play-circle"></i> Commencer le cours
                    </a>
                </div>
            `;
            coursList.appendChild(courseCard);
        });
        
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const courseId = this.getAttribute('data-course-id');
                viewCourse(courseId);
            });
        });
    }
    
    function viewCourse(courseId) {
        const selectedCourse = cours.find(c => c.id == courseId);
        if (selectedCourse) {
            alert(`Cours: ${selectedCourse.titre}\n\nDescription:\n${selectedCourse.description}\n\nDurée: ${selectedCourse.duree} minutes\n\nContenu:\n${selectedCourse.contenu}`);
        }
    }
    
    document.getElementById('applyFilter').addEventListener('click', function() {
        const niveau = document.getElementById('niveauFilter').value;
        const duree = document.getElementById('dureeFilter').value;
        
        let filtered = cours;
        
        if (niveau !== 'all') {
            filtered = filtered.filter(c => c.niveau === niveau);
        }
        
        if (duree !== 'all') {
            const dureeNum = parseInt(duree);
            filtered = filtered.filter(c => {
                if (dureeNum === 30) return c.duree <= 30;
                if (dureeNum === 60) return c.duree > 30 && c.duree <= 60;
                if (dureeNum === 90) return c.duree > 60 && c.duree <= 90;
                if (dureeNum === 120) return c.duree > 90;
                return true;
            });
        }
        
        displayCourses(filtered);
    });
    
    displayCourses();
});