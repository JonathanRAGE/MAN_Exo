const p = document.getElementById('paragraphe');
        const btn = document.getElementById('boutoncliquer');

        const couleurs = ['blue', 'red'];
        let i = 0;

        btn.addEventListener('click', () => {
            i = 1 - i;          
            p.style.color = couleurs[i];
        });
