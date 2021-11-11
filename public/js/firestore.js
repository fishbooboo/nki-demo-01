function addFt(){
    firestore.collection("store").add({ 
        item: "Nendoroid",
        name: "Hatsune Miku",
        id: 34,
        available: true
    });
}
    