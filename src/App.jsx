import './App.css'
import {useState} from "react";

const Card = ({title}) => {
    const [hasLiked, setHasLiked] = useState(false);
    return (
        <div>
            <h2>{title}</h2>
            <button onClick={() => setHasLiked(true)
            }> Like
            </button>
        </div>
    )
};
const App = () => {

    return (

        <div><Card title="Star Wars"/>
            <Card title="Avtar"/>
            <Card title="The Lion King"/>
        </div>
    )
}

export default App
