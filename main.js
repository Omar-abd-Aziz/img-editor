let saturate = document.querySelector("#saturate")
let contrast = document.querySelector("#contrast")
let brightness = document.querySelector("#brightness")
let speia = document.querySelector("#speia")
let grayscale = document.querySelector("#grayscale")
let blur = document.querySelector("#blur")
let huoRotate = document.querySelector("#huo-rotate")

let upload = document.querySelector("#upload")
let download = document.querySelector("#download")
let img = document.querySelector("#img")
let reset = document.querySelector("span")
let imgBox = document.querySelector(".img-box")

let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
//////////////////////////////////////////////////////////////////////////////////////

function resetValue()
{
    ctx.filter="none"
    ctx.drawImage(img,0,0,canvas.width,canvas.height)

    saturate.value="100"
    contrast.value="100"
    brightness.value="100"
    sepia.value="0"
    grayscale.value="0"
    blur.value="0"
    huoRotate.value="0"
}



window.onload =()=>
{
    download.style.display="none"
    reset.style.display="none"
    imgBox.style.display="none"
}

upload.onchange = ()=>
{
    resetValue()
    download.style.display="block"
    reset.style.display="block"
    imgBox.style.display="block"

    // read img file
    let file = new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload=()=>
    {
        img.src = file.result
    }

    img.onload=()=>
    {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img,0,0,canvas.width,canvas.height);
        img.style.display='none';
    }
}



let filters = document.querySelectorAll("ul li input")

filters.forEach(filter=>{
    filter.addEventListener("input", ()=>{

        ctx.filter=`
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huoRotate.value}deg)
        `

        ctx.drawImage(img,0,0,canvas.width,canvas.height)
    })
})



download.addEventListener("click", ()=>
{
    download.href = canvas.toDataURL()
})