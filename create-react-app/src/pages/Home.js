import { useEffect, useContext } from "react"
import { Link } from 'react-router-dom'
import { KanjiContext } from "../App"
import { fetchKanji } from "../hooks/fetchKanji"

const Home = () => {
    const { kanji, setKanji } = useContext(KanjiContext)

    useEffect(() => {
        fetchKanji().then((json) => {
            setKanji(json)
        })

    }, [setKanji])

    return (
        <div className="home">
            <div>
                <h1>Welcome to Kanji Mnemonics!</h1>
                <p>Kanji are the characters used in Japanese derived from Chinese characters. There are over 2000 of them, which
                    makes it difficult to master...but no fear, all you need are Kanji Mnemonics! Simple stories or images to help you
                    remember them. The brain is much better at remembering visual information than simple text or sound, and we can
                    use this to master all the kanji!</p>
            </div>
            <div className="kanji">
                <h2>First Grade Kanji</h2>
                {kanji && kanji.map((kanji) => (
                    <Link to={"/" + kanji._id} className="kanji-list-item" key={kanji.meaning}>{kanji.character}</Link>
                ))}
            </div>
        </div>
    )
}

export default Home