/*function UI()
{

}
UI.prototype.addFilmToUI= function(newFilm)
{
    const FilmList=document.getElementById("films");
    FilmList.innerHTML += `
      <tr>
       <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
       <td>${newFilm.title}</td>
       <td>${newFilm.director}</td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
    `;
    
}
UI.prototype.clearInput=function(element1,element2,element3)
{
    element1.value="";
    element2.value="";
    element3.value="";

}
UI.prototype.displayMessages=function(message,type)
{
    const cardbody=document.querySelector(".card-body");
    //ALERT DİVİNİ OLUŞTURMA
     
    const div=document.createElement("div");
    div.className=` alert alert-${type}`;
    div.textContent=message;
    cardbody.appendChild(div);

    setTimeout(function()
    {
     div.remove();
    },1000);
}
UI.prototype.loadAllFilms = function(films)
{
    const filmlist = document.getElementById("films");

    films.forEach(function(film)
    {
        filmlist.innerHTML +=`
        <tr>
         <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
         <td>${film.title}</td>
         <td>${film.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
      `;
    })
}
UI.prototype.deleteFilmFromUI =function(element)
{
    element.parentElement.parentElement.remove();
}
UI.prototype.clearAllFilmsFromUI = function()
{
    const filmList = document.getElementById("films");
    while(filmlist.firsElementChild !== null)
    {
        filmList.firstElementChild.remove();
    }
}*/

class UI
{
   static addFilmToUI(newFilm)
{
    const FilmList=document.getElementById("films");
    FilmList.innerHTML += `
      <tr>
       <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
       <td>${newFilm.title}</td>
       <td>${newFilm.director}</td>
       <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>
    `;
    
}
static clearInput(element1,element2,element3)
{
    element1.value="";
    element2.value="";
    element3.value="";

}
static displayMessages(message,type)
{
    const cardbody=document.querySelector(".card-body");
    //ALERT DİVİNİ OLUŞTURMA
     
    const div=document.createElement("div");
    div.className=` alert alert-${type}`;
    div.textContent=message;
    cardbody.appendChild(div);

    setTimeout(function()
    {
     div.remove();
    },1000);
}
static loadAllFilms(films)
{
    const filmlist = document.getElementById("films");

    films.forEach(function(film)
    {
        filmlist.innerHTML +=`
        <tr>
         <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
         <td>${film.title}</td>
         <td>${film.director}</td>
         <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
      `;
    })
}
static deleteFilmFromUI(element)
{
    element.parentElement.parentElement.remove();
}
static clearAllFilmsFromUI()
{
    const filmList = document.getElementById("films");
    while(filmlist.firsElementChild !== null)
    {
        filmList.firstElementChild.remove();
    }
}
}