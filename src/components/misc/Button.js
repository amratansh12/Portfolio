import './Button.css'

export default function Button({name, handleClick}){
    return(
        <button id="btn" onClick={handleClick}>{name}</button>
    )
}