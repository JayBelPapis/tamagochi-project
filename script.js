let EN=10;
let FAIM=0;
let JOIE=5;
let fin=true;

function action(){
        
        while(fin==true){
        let choix=prompt("Que voulez-vous faire? Jouer ou Nourrir ou Sortir");
        switch (choix){
            case "Jouer":
                if (FAIM <=5 && JOIE>0 && EN>0){
                    EN=EN-2,
                    FAIM=FAIM+1;
                    JOIE=JOIE+1;
                    alert ("Après ce repas, votre Tamagotchi a Energie: "+EN+", FAIM: "+FAIM+", et JOIE :"+JOIE);
                }
                    else{
                        alert("Votre Tamagotchi est mort...");
                        fin=false;
                }
            break;

            case "Nourrir":
                if (FAIM <=5 && JOIE>0 && EN>0){
                    EN=EN+2,
                    FAIM=FAIM-1;
                    JOIE=JOIE-1;
                    alert ("Après ce repas, votre Tamagotchi a Energie: "+EN+", FAIM: "+FAIM+", et JOIE :"+JOIE);
                }
                    else{
                        alert("Votre Tamagotchi est mort...");
                        fin=false;
                    }
            break;

            case "Sortir":
                fin=false;
                alert("Votre Tamagotchi vous remercie! A bientôt :) !");
                break;

            default:
                alert("Votre Tamagotchi n'a pas compris ce que vous voulez faire");
                break;
                }
        }
    return action;
}
action();