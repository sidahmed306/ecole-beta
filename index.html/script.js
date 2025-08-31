document.addEventListener('DOMContentLoaded', function() {
    const metiersList = document.getElementById('metiersList');
    const optionsModal = document.getElementById('optionsModal');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const viewCoursBtn = document.getElementById('viewCours');
    const viewExercicesBtn = document.getElementById('viewExercices');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    const metiers = [
        { 
            id: 1, 
            nom: "Mathematique", 
            description: "tgd dir une discription 3n math.", 
            image: "images/math.jpeg"
        },
        { 
            id: 2, 
            nom: "Physique", 
            description: "etude de physique .", 
            image: "images/physique.jpg"
        },
        { 
            id: 3, 
            nom: "Science-Naturelle", 
            description: "etude de la nature.", 
            image: "images/science.jpeg"
        },
        { 
            id: 4, 
            nom: "Francais", 
            description: "parler en francais .", 
            image: "images/francais.jpg"
        },
        { 
            id: 5, 
            nom: "Anglais", 
            description: "speak english.", 
            image: "images/anglais.jpg"
        },
        { 
            id: 6, 
            nom: "Trbiye-islamique", 
            description: "education islamique.", 
            image: "images/islamique.jpeg"
        },
        { 
            id: 7, 
            nom: "Arabe", 
            description: "language arabic.", 
            image: "images/arabe.jpg"
        },
        { 
            id: 8, 
            nom: "Chimie", 
            description: "etude des solution.", 
            image: "images/chimie.jpeg"
        }
    ];

    let selectedMetierId = null;
    let selectedMetierName = null;
    let filteredMetiers = [...metiers];

    function displayMetiers(metiersToDisplay = filteredMetiers) {
        metiersList.innerHTML = '';
        
        if (metiersToDisplay.length === 0) {
            metiersList.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 15px;"></i>
                    <h3>Aucun métier trouvé</h3>
                    <p>Essayez avec d'autres termes de recherche</p>
                </div>
            `;
            return;
        }
        
        metiersToDisplay.forEach((metier, index) => {
            const metierCard = document.createElement('div');
            metierCard.className = 'metier-card';
            metierCard.style.animationDelay = `${index * 0.1}s`;
            metierCard.innerHTML = `
                <img src="${metier.image}" alt="${metier.nom}" class="metier-img" onerror="this.src='https://via.placeholder.com/600x400?text=${encodeURIComponent(metier.nom)}'">
                <div class="metier-info">
                    <h3>${metier.nom}</h3>
                    <p>${metier.description}</p>
                </div>
            `;
            
            metierCard.addEventListener('click', () => {
                selectedMetierId = metier.id;
                selectedMetierName = metier.nom;
                openOptionsModal(metier);
            });
            
            metiersList.appendChild(metierCard);
        });
    }

    function openOptionsModal(metier) {
        modalTitle.innerHTML = `<i class="fas fa-chevron-right"></i> ${metier.nom}`;
        optionsModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeOptionsModal() {
        optionsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function redirectToCours() {
        if (selectedMetierId) {
            window.location.href = `cours.html?metier=${selectedMetierId}&metierName=${encodeURIComponent(selectedMetierName)}`;
        }
    }

    function redirectToExercices() {
        if (selectedMetierId) {
            window.location.href = `exercices.html?metier=${selectedMetierId}&metierName=${encodeURIComponent(selectedMetierName)}`;
        }
    }

    function filterMetiers(searchTerm) {
        if (!searchTerm) {
            filteredMetiers = [...metiers];
        } else {
            filteredMetiers = metiers.filter(metier => 
                metier.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
                metier.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        displayMetiers(filteredMetiers);
    }

    closeModal.addEventListener('click', closeOptionsModal);
    viewCoursBtn.addEventListener('click', redirectToCours);
    viewExercicesBtn.addEventListener('click', redirectToExercices);
    searchBtn.addEventListener('click', () => filterMetiers(searchInput.value));
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') filterMetiers(searchInput.value);
    });
    window.addEventListener('click', (e) => {
        if (e.target === optionsModal) closeOptionsModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && optionsModal.style.display === 'flex') {
            closeOptionsModal();
        }
    });

    displayMetiers();
});