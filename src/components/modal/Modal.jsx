import cub from '../../images/cub.jpeg';
import './Modal.css';

export function Modal(props) {
    return(
        <article id="modal">
            <div className="modal-wrap">
                <h2>You got this!!!~</h2>
                <h3>We celebrate your dreams!</h3>
                <img src={cub} alt="cub" />
                <button className="btn-close" type="button" onClick={() => props.modalOpen(false)}>Go start training NOW</button>
                <p>It's just the close button ;)</p>
            </div>
        </article>

    )
}