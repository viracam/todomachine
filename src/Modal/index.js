import ReactDOM from 'react-dom';
import './Modal.css'

/// Permite la reutilización de cualquier cosa
function Modal({children}){
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        //Enviar al hijo del componente modal
        document.getElementById('modal'),

    );
}

export {Modal};