const images =["mousse.jpg",
    "gel de douche.jpg",
    "parfum.jpg"
];
let index=0;
const slide =document.getElementById("slide");
document.getElementById("avant").onclick=function(){
    index++;
    if (index >= images.length){
        index=0;
    }
    slide.src =images[index];
}
document.getElementById("apres").onclick=function(){
    index--;
    if (index <0){
        index =images.length - 1;
    }
    slide.src=images[index];
}