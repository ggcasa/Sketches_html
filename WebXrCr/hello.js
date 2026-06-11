const go = new Go();
    
    WebAssembly.instantiateStreaming(fetch("./hello.wasm"), go.importObject)
        .then((result) => {
            go.run(result.instance);
            
            console.log("--- TEST FUNCȚII NOI ---");
            
            // 1. Test funcție care returnează obiect (Map)
            let analiza = ValideazaCod("12345678901234567"); // 17 caractere
            console.log("Rezultat analiză:", analiza);
            console.log("Este valid?:", analiza.valid); // Poți accesa proprietățile direct!

            // 2. Test funcție asincronă (Promise)
            console.log("Strigăm funcția asincronă...");
            ProceseazaGreuAsincron().then((mesaj) => {
                console.log("Răspuns primit din Promise-ul Go:", mesaj);
            });
            console.log("Consola JS merge mai departe, nu așteaptă după Go!");
        });