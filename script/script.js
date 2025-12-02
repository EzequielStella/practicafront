function modoOscuro(){
    document.getElementById("header").style.backgroundColor = "#44403B";
    document.getElementById("nav").style.backgroundColor = "#292524";
    document.querySelector("h1").style.color = "aliceblue";
    document.getElementById("contenedor").style.backgroundColor = "#262626";
    document.body.style.backgroundColor = "#262626";
    document.getElementById("container").style.backgroundColor = "#44403B";
    document.getElementById("footer").style.backgroundColor = "#44403B";
    document.getElementById("lateral").style.backgroundColor = "#27272A";
    document.querySelectorAll("h2").forEach(h2 =>{
        h2.style.backgroundColor = "#57534D"
        h2.style.color = "aliceblue"
    })
    document.getElementById("lista").style.backgroundColor = "#57534D";
    document.querySelectorAll("li").forEach(li =>{
        li.style.color = "aliceblue"
    }) 
    document.getElementById("lista2").style.backgroundColor = "#57534D";
    
}
