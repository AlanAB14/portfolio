import React from 'react'
import {AiOutlineZoomIn, AiOutlineLink, AiOutlineCloseCircle} from 'react-icons/ai'

const Project = (props) => {

    const [modal, setModal] = React.useState(false)

    return (
        <div className="project__container">
            <div onClick={()=> setModal(true)} className="project" >
                <div className="project__zoom">
                    <AiOutlineZoomIn className="project__zoom__icon"/>
                </div>
                <img src={props.image} alt="imagen" className="project__img"/>
                <div className="project__title">
                    <h1 className="heading--fourty"
                        dangerouslySetInnerHTML={{ __html: props.title }}>
                        
                    </h1>
                </div> 
            </div>

            {
                modal && (
                    <div className="modal">
                        <div className="modal__card">
                            <div className="modal__card--title">
                                <h1 className="heading--tertiary" 
                                 dangerouslySetInnerHTML={{ __html: props.title }}
                                >
                                </h1>
                                <AiOutlineCloseCircle onClick={()=> setModal(false)} className="close--icon" />
                            </div>
                                <p className="description">
                                    {
                                        props.description
                                    }
                                </p>
                                <hr className="separator"/>
                                <div className="modal__card--img">
                                    <img src={props.image} alt="imagen" className="modal__img"/>
                                </div>
                                <hr className="separator"/>
                                <div className="modal__card__enlace" onClick={() => window.open( props.link , '_blank')}>
                                    <AiOutlineLink className="modal__card--link" />
                                </div>
                            
                        </div>
                    </div>
                )
            }

        </div>
        
    )

}


    



export default Project
