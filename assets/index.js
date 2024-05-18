window.addEventListener("DOMContentLoaded", getMelumatlariGetir)


async function getMelumatlariGetir() {
    const unvan = "https://jsonplaceholder.typicode.com/posts"


const bloqlarinYerlesdiyiDiv = document.querySelector(".blog-right-side")


    try {
        const gelenCavab = await fetch(unvan)
        // console.log(gelenCavab)
        const postlar = await gelenCavab.json()
        console.table(postlar)


        // console.log(postlar[0].title)
        // console.log(postlar[postlar.length-1].body)


        // increment i++
        for(let i=0; i<postlar.length; i++) {
        bloqlarinYerlesdiyiDiv.innerHTML += ` <div class="blog py-3">
        <span id="metadata">May 4 , 2024 , <span id="time">6 mins</span></span>
        <h2>${postlar[i].title}</h2>
        <a href="">Read the article</a>
    </div>
    `
            
        }






}

catch (err) {
    console.log("Serverde xeta yarandi. Bir az sonra cehd edin ." + err.message)
}

//reggardless

finally {

}

}






