const tracklist = document.getElementById("track-list")

axios.get("https://leonardoapi.onrender.com/songs")
    .then((res) => {
        console.log(res.data.songs)

        res.data.songs.map((song) => {

            console.log(song.path.front)

            const div = document.createElement("div")


            div.innerHTML = `
                <img src="${song.path.front}" alt="" class="h-full"> </img>
            $(song.title)
            `


            tracklist.appendChild(div)

        })


    })



const handlerclick = () => {
}


// handlerclick ()

const button = document.getElementById("handler-button")


if (button !== null) {


    button.addEventListener("click", () => {
        const cadena = "esto es una cadena de texto"
        console.log(cadena)

    }

    )
}
