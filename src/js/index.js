console.log("It's work");

const buttonVerre = document.querySelector('.buttonVerre');
const buttonBurger = document.querySelector('.buttonBurger');

let commanderBurger = () => {
    console.log('Commande accepté, burger en cours de préparation');
    return new Promise((resolve, reject)=>{
        console.log('En cours');
        let plop = Math.random();
        setTimeout(()=> {
            if(plop < 0.5){
                // console.log('Votre burger est prêt !')
                console.log(plop)
                resolve('Votre burger est prêt !')
            } else {
                // console.log('Nous sommes désolé, un problème à eu lieu en cuisine, nous vous offrons un verre !')
                reject('Nous sommes désolé, un problème à eu lieu en cuisine, nous vous offrons un verre !')
            }
        }, 2000);
    });   
};

let commanderVerre = () => {
    console.log('Nous préparons votre verre !');
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Votre verre est prêt !')
        }, 1000);
    })
};

buttonBurger.addEventListener('click', () => {
    commanderBurger().then(response => {
        console.log(response);
    }).catch(response => {
        console.log(response);
        commanderVerre().then(response => {
            console.log(response);
        });
    });
});

buttonVerre.addEventListener('click', () => {
    console.log('Commande Verre reçu !')
    console.log('Voici votre Verre.')
});


