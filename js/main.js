const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// Collego container post-meta
const elPostMeta = document.getElementById('container');

// Ciclo forEach per spammare post con dati relativi ad array
posts.forEach(element => {

    // Inverto formato data
    const newDate = element.created.split('-').reverse().join('-');

    // Cambio data in array principale
    element.created = newDate;


    elPostMeta.innerHTML += `<div class="post">
                            <div class="post__header">
                                <div class="post-meta">                    
                                    <div class="post-meta__icon">
                                        <img class="profile-pic" src="${element.author.image}" alt="${element.author.name}">                    
                                    </div>
                                    <div class="post-meta__data">
                                        <div class="post-meta__author">${element.author.name}</div>
                                        <div class="post-meta__time">${element.created}</div>
                                    </div>                    
                                </div>
                            </div>
                            <div class="post__text">${element.content}</div>
                            <div class="post__image">
                                <img src="${element.media}" alt="boo">
                            </div>
                            <div class="post__footer">
                                <div class="likes js-likes">
                                    <div class="likes__cta">
                                        <a class="like-button  js-like-button" data-postid="${element.id}">
                                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                            <span class="like-button__label">Mi Piace</span>
                                        </a>
                                    </div>
                                    <div class="likes__counter">
                                        Piace a <b id="like-counter-${element.likes}" class="js-likes-counter">${element.likes}</b> persone
                                    </div>
                                </div> 
                            </div>            
                            </div>`;

});


// Creo array degli elementi con classe like-button
const btnLikes = document.querySelectorAll('.like-button');

// Creo array per post selezionati
const arrayLikedPosts = [];

// Ciclo array btn like
for(let i = 0; i < btnLikes.length; i++){

    // setto posizione in array posts
    const postsIesimo = posts[i];

    // Setto posizione in array btnlikes
    const btnLikesIesimo = btnLikes[i];

    // Collego elemento con likes dal DOM
    const counters = document.querySelectorAll('.js-likes-counter');

    // Setto lo stato del bottone su false
    let clickState = false;

    // Aggiungo bottone ad ogni elemento dell'array btnlikes
    btnLikesIesimo.addEventListener('click',
        function(event){

            // Prevent default
            event.preventDefault();

        //   se stato false passa a true al click
            if(!clickState){
                // passa a true
            clickState = true;

            // Aggiungo classe per bottone verde
            btnLikesIesimo.classList.add('like-button--liked');

            // Cambio nel DOM counter likes e lo sommo di 1
            counters[i].innerHTML = ++posts[i].likes;

            // Pusho nell'array creato i post con ID
            arrayLikedPosts.push(postsIesimo.id);

            // altrimenti se stato è a true passa a false al click
            }else if (clickState) {

                // passa a false
                clickState = false;  

                // Tolgo classe per bottone verde
            btnLikesIesimo.classList.remove('like-button--liked');

            // Cambio nel DOM counter likes e lo sommo di 1
            counters[i].innerHTML = --posts[i].likes;

            // Ricavo la posizione index per poterla usare in slice
            const index = arrayLikedPosts.indexOf(postsIesimo.id);
            // console.log(index);

            // Tolgo dall'array creato i post con ID
            arrayLikedPosts.splice(index, 1);

            } 
            
            // Log per l'array dei post con like
            console.log(arrayLikedPosts);

        }
    )
}




// Opzione con forEach da rivedere

// Seleziono nel DOM il contatore likes
// const counters = document.querySelectorAll('.js-likes-counter');


// Ciclo forEach
// btnLikes.forEach((element, i) => {
//     element.addEventListener('click',
//     function(event){

//         // Dichiaro stato btn like
//         let btnstate = false;

//         // Prevengo automatismo bottone
//         event.preventDefault();

//         if(!btnstate){
//             console.log(btnstate);

//         // Stato passa a true
//         btnstate = true;
//         console.log(btnstate);

//         // Aggiungo classe btn clickato
//         element.classList.add('like-button--liked')

//         // Cambio nel DOM counter likes e lo sommo di 1
//         counters[i].innerHTML = ++posts[i].likes;

//         // Aggiungo ad array post con like
//         arrayLikedPosts.push(posts[i].id);

//         }else if(btnstate){
//             console.log(btnstate);

//         // Stato passa a false
//         btnstate = false;

//         // Aggiungo classe btn clickato
//         element.classList.remove('like-button--liked')

//         // Cambio nel DOM counter likes e lo sommo di 1
//         counters[i].innerHTML = --posts[i].likes;
        
//         let posizione = arrayLikedPosts.indexOf(posts[i].id);

//         // console.log(posizione);
//         // Tolgo ad array post con like
//         arrayLikedPosts.slice(posizione, 1);
//         }

//         console.log(arrayLikedPosts);
//     })
// });



