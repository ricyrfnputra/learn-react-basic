import { children } from "react"

function Container({children}){
    return ( 
        <div>
            <h1>Ricy Rifani Putra</h1>

            {children}
            <footer>
                <p>2026 RICY RIFANI PUTRA</p>
            </footer>
        </div>
    )
}

export default Container;