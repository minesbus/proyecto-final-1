function getcharacters(done) {

    const results = fetch("https://rickandmortyapi.com/api/character");
   
    results
    .then(response => response.json())
    .then(data => {
        done(data)
        
    });


}

getcharacters(data => {
    data.results.forEach(personaje => {
       
        const article = document.createRange().createContextualFragment(`
        
        <article>

             <div class="image-container1">
              <img src="${personaje.image}  " alt="personaje">
            
           <h2>${personaje.name}  </h2>
          <p>${personaje.status}  </p>
          <p>${personaje.gender} </p>
          <p>${personaje.species} </p>
          </div>
          </article>

        
         `);

const main =document.querySelector("main");
main.append(article);


        
    });
});

bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search")

document.getElementById(inputsearch).addEventListener("keyup",buscador_interno);

function buscador_interno() {

filter = inputsearch.value.touppercase;
li = box_search.getElementBytagname("li");
for (i = 0; 1 < li .length; i++){
    a = li[i].getElementBytagname("a")[0];
    textvalue = a.textcontent || a.innertex;
    if(textvalue.touppercase (). indexof(filter) > -1 ) {
        li[i].style.display = "" ;

    }else{
        li[i].style.display = "nome";
    }
}





}