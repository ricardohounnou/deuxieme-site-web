function presser(touche){
    document.getElementById('resultat').innerHTML += touche;
    }
    function calculer(){
        var expression = document.getElementById('resultat').innerHTML;
        var resultatAafficher =math.evaluate(expression);
        document.getElementById('resultat').innerHTML=resultatAafficher;
    }
    