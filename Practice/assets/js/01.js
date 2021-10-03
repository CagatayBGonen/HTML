document.querySelector("#input").addEventListener("keydown",(olay)=>{
    if (olay.key==="enter") {
        const input=document.querySelector("#input");
        itemEkle(input.value);
    }
})

document.querySelector("#add_item").addEventListener("click",function(olaylar){
    const input=document.querySelector("#input");
})

itemEkle=(input)=>{
    const item=document.createElement("div");
    const div=document.createElement("div");
    const checkIcon=document.createElement("i");
    const silmeIcon=document.createElement("i");
    const text=document.createElement("t");
    text.textContent=input;
    
    item.className="item";
    checkIcon.className="i fas fa-check-square";
    checkIcon.style.color="ligthgray";

    checkIcon.addEventListener("click",function(){
        checkIcon.style.color="limegreen";
    })
    div.appendChild(checkIcon);
    silmeIcon.className="i fas fa-trash";
    silmeIcon.style.color="darkgray";

    silmeIcon.addEventListener("click",function(){
        silmeIcon.remove(); /*div*/
    })
    div.appendChild(silmeIcon);

    div.appendChild(text); /*uyarı !!! */

    item.appendChild(div);
    document.querySelector(".to_do_list").appendChild(item);
    document.querySelector("#input").value="";
}
