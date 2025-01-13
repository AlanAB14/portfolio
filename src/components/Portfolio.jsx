import React from 'react'
import Project from './Project'

const Portfolio = () => {


    return (
        <div id="portfolio" className="portfolio">
            <h1 className="heading--tertiary">Portfolio</h1>
            <hr className="separator"/>

            <div className="portfolio__projects">
                <Project title='Mutual' description="Diseñé e implementé una solución personalizada para Mutual Patronal, optimizando procesos internos y mejorando la experiencia del usuario mediante una interfaz interactiva y responsiva desarrollada en Angular, servicios y lógica de negocio implementados en Node.js, e integración con MySQL como gestor de base de datos, asegurando esquemas relacionales eficientes y escalables." link='https://www.mutualentreasoc.com.ar/' image='../img/mutual.jpg'/>
                <Project title='Primicia' description='Diseñé e implementé una solución para Primicia, una tarjeta que ofrece beneficios, desarrollando una interfaz interactiva y eficiente con Angular, servicios y lógica de negocio en Node.js, e integrando MySQL como gestor de base de datos para garantizar un manejo óptimo y seguro de la información.' link='https://www.tarjetaprimicia.com.ar/' image='../img/primicia.jpg'/>
                <Project title='Terceros Web' description='Diseñé una solución para el proyecto Terceros Web de Cooperación Seguros, permitiendo a los terceros cargar reclamos de manera eficiente mediante una interfaz desarrollada en Angular, con servicios y lógica de negocio implementados en .NET e integración con SQL como gestor de base de datos para garantizar un manejo seguro y estructurado de la información.' link='https://terceros.cooperacionseguros.com.ar/iniciar-reclamo' image='../img/terceros-web.jpg'/>
                <Project title='Cooperación Seguros' description='Desarrollé y gestioné la página web de Cooperación Seguros, utilizando WordPress para administrar el contenido de manera eficiente, garantizando una experiencia de usuario intuitiva, un diseño atractivo y una estructura optimizada para facilitar actualizaciones y mantener la información actualizada.' link='https://www.cooperacionseguros.com.ar/' image='../img/cooperacion.jpg'/>
                <Project title='Contenidos' description='Diseñé e implementé la plataforma Contenidos para Cooperación Seguros, orientada a productores para crear imágenes y videos con información proporcionada por la compañía, permitiendo compartir contenido en redes sociales. El frontend fue desarrollado en Angular, el backend en .NET Core, y se utilizó SQL como base de datos para garantizar un manejo estructurado y eficiente de la información.' link='https://contenidos.cooperacionseguros.com.ar/' image='../img/contenidos.jpg'/>

            </div>

        </div>
    )
}

export default Portfolio
