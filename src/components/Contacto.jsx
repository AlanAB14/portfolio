import React from 'react'
import emailjs from 'emailjs-com'

import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {RiFacebookCircleFill} from 'react-icons/ri'



const Contacto = () => {



        function sendEmail(e) {
          e.preventDefault();
            
          const parametros = {
              name: nombre,
              from_name:email,
              message: mensaje,
              phone_number: telefono
          }
          console.log(parametros)
          emailjs.send('service_7958hq6', 'template_t78h6am', parametros, 'user_7Jzr5fvKnO1imQVkrTv1W')
            .then((result) => {
                setRespuesta(true)
            }, (error) => {
                setRespuesta(false)
            });
        }

    const[nombre, setNombre] = React.useState('')
    const[email, setEmail] = React.useState('')
    const[telefono, setTelefono] = React.useState('')
    const[mensaje, setMensaje] = React.useState('')
    const [respuesta, setRespuesta] = React.useState(null)



    
    return (
        <div id="contacto" className="contacto">
            <h1 className="heading--tertiary">Contacto</h1>
            <hr className="separator"/>
            <div className="contacto__formulario">
                <form onSubmit={sendEmail}>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} name="user_name"  placeholder="Nombre" required/>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  name="user_email"  placeholder="Email" required/>
                    <input type="phone" value={telefono} onChange={(e) => setTelefono(e.target.value)} name="contact_number"   placeholder="Teléfono" required/>
                    <input type="text"  value={mensaje} onChange={(e) => setMensaje(e.target.value)} name="message" placeholder="Mensaje" required/>
                    <div className="contacto__formulario--btn">
                        <button
                        className='btn'
                        type="submit"
                        >

                            Enviar
                        </button>
                    </div>
                    {
                        respuesta===true ? 
                        (
                            <p className="respuesta respuesta--exitosa">{'Email enviado con éxito!'}</p>
                        ) : respuesta ===false ? (
                            <p className="respuesta respuesta--erronea">{'Ocurrió un error al enviar email'}</p>
                        ) : null
                    }
                </form>
            </div>
            <div className="contacto__icons">
                <AiFillLinkedin className="contacto__icons--icon linkedin" onClick={() => window.open( 'https://www.linkedin.com/in/alan-bersia-216453204' , '_blank')} />
                <AiFillGithub className="contacto__icons--icon github" onClick={() => window.open( 'https://github.com/AlanAB14' , '_blank')} />
                <RiFacebookCircleFill className="contacto__icons--icon facebook" onClick={() => window.open( 'https://www.facebook.com/alan.bersia' , '_blank')} />
            </div>
        </div>
    )
}

export default Contacto
