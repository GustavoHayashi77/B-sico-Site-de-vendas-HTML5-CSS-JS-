window.addEventListener("load", function(){

            let nome = "Gustavo Hayashi";
            let cidadeCurso = "São Paulo - ADS-MACK";
            
            let agora = new Date();
            let hora = agora.getHours();
            let diaSemana = agora.getDay();

            let saudacao = "";

            if(hora >= 6 && hora < 12){
                saudacao = "Bom Dia!";
            }
            else if(hora >= 12 && hora < 18){
                saudacao = "Boa Tarde!";
            }
            else{
                saudacao = "Boa Noite!";
            }

            let dias = [
                "Domingo",
                "Segunda-feira",
                "Terça-feira",
                "Quarta-feira",
                "Quinta-feira",
                "Sexta-feira",
                "Sábado"
            ];

            alert(
                nome + "\n" +
                cidadeCurso + "\n" +
                saudacao + " Hoje é " + dias[diaSemana]
            );

        });