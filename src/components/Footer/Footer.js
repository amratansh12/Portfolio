import "./Footer.css"

export default function Footer(){
    const handleClick = (target) => {
        window.open(target, "_blank")
    }
    return(
        <div className="footer">
            <h1>&lt;A<span>/S</span>&gt;</h1>
            <h3>"Chaos isn't a pit. Chaos is a ladder." - Littlefinger</h3>
            <div className="socialLinks">
                <div className="link" onClick={()=>handleClick("https://www.linkedin.com/in/amratansh-shrivastava-a1aa29238/")}>
                    <i class="fa-brands fa-linkedin-in"></i>
                </div>
                <div className="link" onClick={()=>handleClick("https://www.instagram.com/amratanx?igsh=YzVkODRmOTdmMw==")}>
                    <i class="fa-brands fa-instagram"></i>
                </div>
                <div className="link" onClick={()=>handleClick("https://github.com/amratansh12")}>
                    <i class="fa-brands fa-github"></i>
                </div>
                <div className="link" onClick={()=>handleClick("https://www.facebook.com/profile.php?id=100074514547579")}>
                    <i class="fa-brands fa-facebook-f"></i>
                </div>
            </div>
            <p>Scofield's on a break, but this code isn't. Copyright <i style={{background: "transparent"}} class="fa-regular fa-copyright"></i> 2023.</p>
            <p>Made with <i style={{color: "red", background: "transparent"}} class="fa-solid fa-heart"></i> by Amratansh</p>
        </div>
    )
}