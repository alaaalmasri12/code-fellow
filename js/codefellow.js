
var instrucotrdescription=' Reham Habbas is an instrctor at luminus technical university college one of her  many great things about hergreat sense of humor, postive vibes energtic and being helpful human being ';
var instrucotrdescription2='NO Data ';
document.querySelector(".main-photo").style.display='none';
document.querySelector(".description").style.display='none';
document.querySelector('.main-navbar li ul li').style.css='none';


document.querySelector(".btn-course102").addEventListener("click",function(){
    document.querySelector(".main-photo").style.display='initial';
    document.querySelector(".description").style.display='inline-block';
    document.getElementById("btn-course201").classList.remove("active");
    document.getElementById("btn-course102").classList.add("active");



document.querySelector(".main-photo").setAttribute("src",'https://ca.slack-edge.com/TNGRRLUMA-US0JMEVKM-f03fded77255-512');
document.querySelector(".description").textContent=instrucotrdescription;
});


document.querySelector(".btn-course201").addEventListener("click",function(){
    document.querySelector(".main-photo").style.display='initial';
    document.querySelector(".description").style.display='block';

document.querySelector(".main-photo").setAttribute("src",'https://ca.slack-edge.com/TNGRRLUMA-UNML3FT7A-d76e6ed031a4-512');
document.querySelector(".description").innerHTML='<h4>'+instrucotrdescription2+'</h4>';
document.getElementById("btn-course102").classList.remove("active");
document.getElementById("btn-course201").classList.add("active");

});
/*
var dropdown=btn=document.querySelector(".dropdown-btn").addEventListener("click",function(){
    document.querySelector('#inner-navbar li').style.display= 'block';
});
*/
function show_hide()
{
    var click=document.querySelector("#inner-navbar li");
    if(click.style.display === 'none')
    {
        click.style.display='block';
    }
    else
    {
        click.style.display="none";
    }
}
//testonial javascript
function onclickmenu()
{
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");


}

