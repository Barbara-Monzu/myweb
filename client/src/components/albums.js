
import React, { useEffect, useState } from "react";
import axios from 'axios'
import './albums.css'
import Footer from './footer.js'
import NavBarJeidi from './navbar.js'
import Concerts from './concerts.js'
import portada from '../images/portada.jpg'

export default function AllSongs() {


    const [songs, setSongs] = useState(undefined)

    useEffect(() => {

        getSongs()

    }, [])


    const getSongs = () => {

        axios.get("http://localhost:5005/api/songs")
            .then((response) => {
                console.log(response.data.tracks.items, "MIRANDO");
                setSongs(response.data.tracks.items)
            })
            .catch(err => console(err))

    }




    return (
        <>
            <main>
                <NavBarJeidi />


                <section id="home">

                    <iframe width="400" height="315" src="https://www.youtube.com/embed/NI71mH654lo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className="description">Jeidi Mel es un proyecto musical que nace en 2021, cuando aún tenía dinero en mi cuenta. Fui muy feliz grabando estas canciones, cada una de ellas tiene un estilo distinto, pero todas se llevan bien entre ellas. Yo digo que es un pop fresquito y callejero pero puede ser lo que tú quieras.</p>
                </section>

                <Concerts />
                <p className="songs-title">Canciones</p>

                <div className="container-songs">

                    {songs?.map((el, index) =>
                    (
                        <div key={index} className="card-t">
                            <img src={el.album.images[2].url} alt={el.album.name} />
                            <p className="name-song">{el.name}</p>
                            <audio controls src={el.preview_url}></audio>
                        </div>
                    )

                    )}

                </div>
            </main>

            <Footer />

        </>

    )

}
