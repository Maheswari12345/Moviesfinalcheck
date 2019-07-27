//1. movie-list-admin

const movies = [
    {
        titlee:'Avatar',
        box:'$ 2,787,965,087',
        active:'Yes',
        date:'15/03/2017',
        genre:'Science Fiction',
        teaser:'Yes',
       // Action:'Edit'

    },
    {
        titlee:'The Avengers',
        box :'$1,518,812,988',
        active:'Yes',
        date:'23/12/2017',
        genre:'Super Hero',
        teaser:'No',
    },
    {

        titlee:'Titanic',
        box:'$2,187,463,944',
        active:'Yes',
        date:'21/08/2017',
        genre:'Romance',
        teaser:'No'

    },
    {
        titlee:'Jurasic World',
        box:'$ 1,671,713,208',
        active:'No',
        date:'02/07/2017',
        genre:'Science Fiction',
        teaser:'Yes'
    },
    {
        titlee:'Avengers End Game',
       
        box : '$ 2,750,650,348',
        active:'Yes',
        date:'02/11/2022',
        genre:'Super Hero',
        teaser:'Yes'

    }

];
let moviesfromstorage=localStorage.getItem('movies');
if(moviesfromstorage===null)
{
    localStorage.setItem("movies",JSON.stringify(movies));

}
moviesfromstorage=JSON.parse(moviesfromstorage);

const renderitems=function(moviesfromstorage)
{
    console.log("hi");
    
    moviesfromstorage.forEach(function (movie) {

        let table=document.querySelector('#tab');
        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        td1.textContent=movie.titlee;
        tr.appendChild(td1);
        let td2=document.createElement('td');
        td2.textContent=movie.box;
        let td3=document.createElement('td');
        td3.textContent=movie.active;
        let td4=document.createElement('td');
        td4.textContent=movie.date;
        let td5=document.createElement('td')
        td5.textContent=movie.genre;
        let td6=document.createElement('td')
        td6.textContent=movie.teaser;
        let td7=document.createElement('td');
        let a=document.createElement('a');
        a.textContent="Edit";
        a.href = "edit-movie.html?titlee=" + movie.titlee +
"&titlee=" + movie.titlee + 
"&box=" + movie.box+
"&active=" + movie.active+
"&date=" + movie.date+
"&genre=" + movie.genre+
"&teaser=" + movie.teaser;

        td7.appendChild(a);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        table.appendChild(tr);
    });
}



//2.edit-movie:

function EditMovie()
{  
   // console.log("hello edit");
    var url_string = window.location.href;
    var url = new URL(url_string);
    let titlee = url.searchParams.get('titlee');
    let box = url.searchParams.get('box');
    let active = url.searchParams.get('active');
    let date = url.searchParams.get('date');
    let genre= url.searchParams.get('genre');
    let teaser = url.searchParams.get('teaser');

    let Moviename = document.querySelector('#titlee');
    let Moviebox = document.querySelector('#box');
    let yes=document.querySelector('#yes');
    let no=document.querySelector('#no');
    let Moviedate=document.querySelector('#date');
    let Movieteaser= document.querySelector('#teaser');
  
    Moviename.setAttribute('value',titlee);
  
    Moviebox.setAttribute('value',box);
   
    Moviedate.setAttribute('value',date);
    let Moviegenre= document.getElementById('genre');
    Moviegenre.value=genre;

    if(active === 'Yes')
    {
     document.getElementById('yes').checked = "true";
    }
    else {
        no.setAttribute('checked', true);
    }
    
    
    
    Movieteaser.setAttribute('value',teaser);


    if(teaser ==='Yes')
    {
    let Movieteaser = document.getElementById('teaser');
    Movieteaser.checked="true";
    }
    document.querySelector('#button').addEventListener('click',function()
    {
        let titlee=Moviename.value;
        var box=Moviebox.value;
       
        let active;
        let date=Moviedate.value;
        if(yes.checked)
        {
              active=yes.value;
        }
        else if(no.checked)
        {
            active=no.value;
        }
        let teaser;
        if(Movieteaser.checked)
        {
           teaser='Yes';
        }
        else{
            teaser='No';
        }
       
      
        let genre=Moviegenre.value;
        let itemstring=localStorage.getItem('movies');
        let movies=JSON.parse(itemstring);
        console.log(movies);
        let movie=movies.find(function(movie){
            return movie.titlee===titlee;
        });
      
        console.log(box);
        console.log(movie);
       
        movie.box=box;
        movie.date=date;
        movie.active=active;
         
        movie.teaser=teaser;
        movie.genre=genre;
        localStorage.removeItem('movies');
        localStorage.setItem('movies',JSON.stringify(movies));
        window.location="file:///D:/final-check/WebContent/movie-list-admin.html";
    }
    )
    
}



//3.customer-movie-list


const moviescustomer = [
    {
        titlee:'Avatar',
        box:'$2,787,965,087',
        genre:'Science Fiction',
        teaser:'Yes',
       // Action:'Edit'

    },
    {
        titlee:'The Avengers',
        box :'$1,518,812,988',
        genre:'Super Hero',
        teaser:'No',
    },
    {

        titlee:'Titanic',
        box:'$2,187,463,944',
        genre:'Romance',
        teaser:'No'

    }
];
const rendermovies=function(moviescustomer)
{
    console.log("hi");
    moviescustomer.forEach(function (moviee) {

        let table=document.querySelector('#table');
        let tr=document.createElement('tr');
        let td1=document.createElement('td');
        td1.textContent=moviee.titlee;
       
        let td2=document.createElement('td');
        td2.textContent=moviee.box;
      
       
        let td3=document.createElement('td')
        td3.textContent=moviee.genre;
        let td4=document.createElement('td')
        td4.textContent=moviee.teaser;
        let td5=document.createElement('td');
        let a=document.createElement('a');
        a.textContent="Add to Favourite";
        a.href="movie-list-customer-notification.html";
     
        td5.appendChild(a);
        tr.appendChild(td1);
        tr.appendChild(td2);
        
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    });
}

//4.favorites display

const favorites = [

    {
        name:'Avatar',
        box:'$2,787,965,087',
        genre:'Science Fiction',
      
       // Action:'Edit'

    },
    {
        name:'The Avengers',
        box :'$1,518,812,988',
        genre:'Super Hero',
     
    },
    {

        name:'Titanic',
        box:'$2,187,463,944',
        genre:'Romance',
      

    }

];

const renderfavorites=function(favorites)
{
    let sum=0;
    favorites.forEach(function (favorite) {

    let table=document.querySelector('#table');
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    td1.textContent=favorite.name;

    let td2=document.createElement('td');
    td2.textContent=favorite.box;

    let td3=document.createElement('td');
    td3.textContent=favorite.genre;

    let td4=document.createElement('td');
    let a=document.createElement('a');
    a.textContent="Delete";
    a.href="favorites-notification.html";
    td4.appendChild(a);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    sum++;
    

}
);

}

//5.delete display

const deletefavorites = [

    {
        name:'Avatar',
        box:'$2,787,965,087',
        genre:'Science Fiction',
      
       // Action:'Edit'

    },
    {
        name:'The Avengers',
        box :'$1,518,812,988',
        genre:'Super Hero',
     
    },
];

const renderdeletefavorites=function(deletefavorites)
{
    let sum=0;
    deletefavorites.forEach(function (favorite) {

    let table=document.querySelector('#table');
    let tr=document.createElement('tr');
    let td1=document.createElement('td');
    td1.textContent=favorite.name;

    let td2=document.createElement('td');
    td2.textContent=favorite.box;

    let td3=document.createElement('td');
    td3.textContent=favorite.genre;

    let td4=document.createElement('td');
    let a=document.createElement('a');
    a.textContent="Delete";
    a.href="#";
    td4.appendChild(a);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
    sum++;
    

}
);

}




var title=document.title;
if(title=== 'movie-list-admin')
{
    renderitems(moviesfromstorage);
}
else if(title=== 'edit-movie')
{
    EditMovie();
}
else if((title=== 'movie-list-customer')||(title=== 'movie-list-customer-notification'))
{
    rendermovies(moviescustomer);
}
else if(title==='customer-favorites')
{
   // renderitems(moviesfromstorage);
    renderfavorites(favorites)
}
else if(title==='delete-favorites')
{
    renderdeletefavorites(deletefavorites);
}

