function afficher_pourboire(){
    const montant = parseFloat(document.getElementById('montant_calcul').value);

    if (isNaN(montant) || montant <= 0) {
        document.getElementById('pourboire').innerHTML = "Veuillez entrer un montant valide.";
        return;
    }

    const pourcentage = 0.10;
    const pourboire = montant * pourcentage;

    document.getElementById('pourboire').innerHTML =
        "Le pourboire est de : " + pourboire.toFixed(2) + " €";
return pourboire;
}


