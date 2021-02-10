import * as React from 'react'
interface Modal
{
    h2: string | JSX.Element;
    text: string | JSX.Element;
    text2: string | JSX.Element;
    blake: () => any;
}
export default (props: Modal): JSX.Element => (
    <div className={`modal-simple`}>
        <div className="modal-inner">
            <div className="modal-header">
            </div>
            <div className="modal-introduction">
                <h2 className="modal-h2">{props.h2}</h2>
                <p>{props.text}</p>
                <p>{props.text2}</p>
            </div>
            <button className="modal-close-btn blake" onClick={(): void => { props.blake() }}>とじる</button>
        </div>
    </div>
)