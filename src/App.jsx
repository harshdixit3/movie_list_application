import Search from "./components/Search.jsx";
import {useState} from "react";

const App = () => {
    const [searchTearm, setSearchTearm] = useState('')
    return (
        <main>
            <div className="pattern"/>
            <div className="wrapper">
                <img src="./hero.png" alt="Hero Banner"/>
                <header className="">
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Withouth the Hassle</h1>
                </header>
                <Search searchTearm={searchTearm} setSearchTearm={setSearchTearm}/>
            </div>
        </main>
    )
}
export default App
