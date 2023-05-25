import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom";
import KanjiDetails from '../components/KanjiDetails'
// import { Link } from 'react-router-dom'

const Kanji = () => {
    const [kanji, setKanji] = useState(false)
    const { id } = useParams()
    const api = 'http://localhost:4000/api/kanji/' + id;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchKanji = async () => {
            const response = await fetch(api)
            const json = await response.json()

            if (response.ok) {
                setKanji(json)
            }
        }

        fetchKanji()
    }, [setKanji, api])

    return (
        <div className="Kanji">
            <button className="backButton" onClick={() => navigate(-1)}>Back</button>
            <button className="nextButton">Next</button>
            <div className="character">{kanji.character}</div>
            <KanjiDetails kanji={kanji} />

            <div className="mnemonic">
                <p>How to remember:</p>
                <div className="mnemonicText">{kanji.mnemonic}</div>
            </div>
        </div>
    )
}

export default Kanji