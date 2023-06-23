import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { UserContext } from "../App"
import { KanjiContext } from "../App"
import { fetchKanji } from "../hooks/fetchKanji"
import KanjiDetails from '../components/KanjiDetails'
import Mnemonic from '../components/Mnemonic'

const Kanji = () => {
    // user context
    const { user } = useContext(UserContext)
    // array of all kanji
    const { kanji, setKanji } = useContext(KanjiContext)
    // selected kanji
    const [selectedKanji, setSelectedKanji] = useState()
    // id of selected kanji
    const { id } = useParams()

    const navigate = useNavigate();

    useEffect(() => {
        let kanjiFound = false;
        // fetch kanji if not fetched
        if (!kanji) {
            fetchKanji().then((json) => {
                setKanji(json)
                // find selected kanji by ID
                kanjiFound = json.find(x => x._id === id)
                setSelectedKanji(kanjiFound)
            })
        }
        // if kanji exists
        else {
            // find selected kanji by ID
            kanjiFound = kanji.find(x => x._id === id)
            setSelectedKanji(kanjiFound)
        }
    }, [id, kanji, setKanji, setSelectedKanji, user])

    // next button
    function nextKanji() {
        let nextKanjiID = ""
        // get the index of selected kanji within array of all kanji
        const selectedKanjiIndex = kanji.findIndex(x => x === selectedKanji)
        // if selected kanji is the last in array
        if (selectedKanjiIndex === kanji.length - 1) {
            // get the first kanji in array
            nextKanjiID = kanji[0]._id
        }
        // get the next kanji id
        else {
            nextKanjiID = kanji[selectedKanjiIndex + 1]._id
        }
        // navigate to next kanji page
        navigate("/" + nextKanjiID);
    }

    return (
        <div className="Kanji">
            <button className="backButton" onClick={() => navigate(-1)}>Back</button>
            <button className="nextButton" onClick={() => nextKanji()}>Next</button>
            <div className="character">{selectedKanji && selectedKanji.character}</div>
            {selectedKanji && <KanjiDetails selectedKanji={selectedKanji} />}
            {selectedKanji && <Mnemonic selectedKanji={selectedKanji} />}
        </div>
    )
}

export default Kanji