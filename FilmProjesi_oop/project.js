const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//tÜM EVENTLERİ YÜKLEME
eventListeners();

function eventListeners()
{
    form.addEventListener("submit",addfilm);
    document.addEventListener("DOMContentLoaded",function()
    {
      let films=Storage.getFilmsFromStorage();
      UI.loadAllFilms(films);
    });
    cardbody.addEventListener("click",deletefilm);
    clear.addEventListener("click",clearAllFilms);
}
function addfilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;
    if(title === " " || director === " " || url === " ")
    {
        //hata
        UI.displayMessages("Tüm Alanları Doldurun","danger");
    }
    else
    {
        //Yeni Film
        const newfilm=new Film(title,director,url);
        UI.addfilmToUİ(newfilm);//Arayüze Film Ekleme
        Storage.addfilmToStorage(newfilm);
        UI.displayMessages("Film Başarıyla Eklendi","success");

    }

    UI.clearInput(titleElement,urlElement,directorElement);
    e.preventDefault();
}
function deletefilm(e)
{
    if(e.target.id === "delete-film")
    {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Silme işlemi başarılı","success")
    }
}
function clearAllFilms()
{
   if(confirm("Emin misiniz?")){
   UI.clearAllFilmsFromUI();
   Storage.clearAllFilmsFromStorage();
   }
}