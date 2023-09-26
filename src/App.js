import React from "react";
import { useState, useEffect } from "react"

import './App.css'

const App = () => {

    const observer = new IntersectionObserver ((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting){
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')
            }
        })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

    return(
        <>
        <div className="headFix">
        <header>
            <nav>
                <img id="logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/37a2bb12966751.5626f7cb871e8.png" />
                <div className="centered-links">
                    <a href="#home">Home</a>
                    <a href="#galeria">Galeria</a>
                    <a href="#servicos">Serviços</a>
                    <a href="#marcacao">Marcação</a>
                    <a href="#contactos">Contactos</a>
                </div>
            </nav>
        </header>
        </div>
        <section id="home">
            <div className="overlay">
                <h1 id="homeTitle">Barber Shop</h1>
                <button id="homeButton">Marque já</button>
            </div>
        </section>
        <section id="galeria">
            <div className="slider-wrapper">
                <div className="slider">
                    <img className="galImg" src="https://blindbarber.com/cdn/shop/files/HP-SHOP_1920x.jpg?v=1613751227" />
                    <img className="galImg" src="https://www.mtlblog.com/media-library/image.png?id=26903363&width=1245&height=700&coordinates=77%2C0%2C77%2C0" />
                    <img className="galImg" src="https://images.squarespace-cdn.com/content/v1/5cf41f6174ca0000010089b6/1611434365214-8UCZ59ML8W82LI0DPW28/IMG_9938.jpg"/>
                    <img className="galImg" src="https://trafft.com/wp-content/uploads/2021/04/Uppercut-Barbershop.jpg"/>
                    <img className="galImg" src="https://images.squarespace-cdn.com/content/v1/5cf41f6174ca0000010089b6/1611434365214-8UCZ59ML8W82LI0DPW28/IMG_9938.jpg"/>
            </div>
            </div>
        </section>
        <section id="servicos">
            <h1>Serviços</h1>
            <div id="serImg">
            <figure>
            <img src="https://bks-prd-5-global-wp-new-blog.storage.googleapis.com/wp-content/uploads/2023/03/15085347/fade-cover-1.jpg" />
            <figcaption>Corte de Cabelo</figcaption>
        </figure>
        <figure>
            <img src="https://marcopolosbarbershop.com/wp-content/uploads/2019/06/hot-lather-shave.jpg" />
            <figcaption>Barbaterapia</figcaption>
        </figure>
        <figure>
            <img src="https://whiskersmensgrooming.com/wp-content/uploads/2018/11/beard-trim-from-barber.jpg"/>
            <figcaption>Corte de Barba</figcaption>
        </figure>
            </div>
        </section>
        <section id="marcacao">
            <div className="dateContainer">
                <div className="date">
                <h3>Setembro, 2023</h3>
                <div className="days">
                    <div className="day">D</div>
                    <div className="day">S</div>
                    <div className="day">T</div>
                    <div className="day">Q</div>
                    <div className="day">Q</div>
                    <div className="day">S</div>
                    <div className="day">S</div>


                    <div className="number-pre">27</div>
                    <div className="number-pre">28</div>
                    <div className="number-pre">29</div>
                    <div className="number-pre">30</div>
                    <div className="number-pre">31</div>
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                    <div className="number">6</div>
                    <div className="number">7</div>
                    <div className="number">8</div>
                    <div className="number">9</div>
                    <div className="number">10</div>
                    <div className="number">11</div>
                    <div className="number">12</div>
                    <div className="number">13</div>
                    <div className="number">14</div>
                    <div className="number">15</div>
                    <div className="number">16</div>
                    <div className="number">17</div>
                    <div className="number">18</div>
                    <div className="number">19</div>
                    <div className="number">20</div>
                    <div className="number">21</div>
                    <div className="number">22</div>
                    <div className="number">23</div>
                    <div className="number">24</div>
                    <div className="number">25</div>
                    <div className="number active">26</div>
                    <div className="number">27</div>
                    <div className="number">28</div>
                    <div className="number">29</div>
                    <div className="number">30</div>
                    <div className="number-pre">1</div>
                    <div className="number-pre">2</div>
                    <div className="number-pre">3</div>
                    <div className="number-pre">4</div>
                    <div className="number-pre">5</div>
                    <div className="number-pre">6</div>
                    <div className="number-pre">7</div>
                </div>
                </div>
                <div className="inputMarcacao">
                    <h3>Nome</h3>
                    <input type="text" placeholder="nome" />
                    <h3>Data</h3>
                    <div>
                    <input type="date"/>
                    <button>Marcar</button>
                    </div>
                </div>
            </div>
        </section>
        <section id="contactos">
            <div className="contactDiv">
                <div className="infoText">
                    <h1>Contactos</h1>
                    <h3><strong>Email:</strong>contacto@barbershop.pt</h3>
                    <h3><strong>Telemóvel:</strong>969999999</h3>
                    <h3><strong>Telefone:</strong>211111111</h3>
                </div>
                <div src="mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d35210.1627611109!2d-9.185720893316505!3d38.73042961166267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2spt!4v1695686991194!5m2!1spt-PT!2spt" width="300" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
                </div>
            </div>
        </section>
        </>
    )
}

export default App