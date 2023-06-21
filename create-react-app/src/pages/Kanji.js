import { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../App"
import { KanjiContext } from "../App"
import { fetchKanji } from "../hooks/fetchKanji"
import KanjiDetails from '../components/KanjiDetails'
import renderHTML from 'react-render-html'

const Kanji = () => {
    // user context
    const { user } = useContext(UserContext)
    // array of all kanji
    const { kanji, setKanji } = useContext(KanjiContext)
    // selected kanji
    const [selectedKanji, setSelectedKanji] = useState()
    // id of selected kanji
    const { id } = useParams()
    // mnemonic to display
    const [mnemonic, setMnemonic] = useState()

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
            // if logged in, find user's mnemonic
            let mnemonicFound;

            if (user) {
                mnemonicFound = kanjiFound.mnemonic.find(x => x.user_id.includes(user._id))
            }
            // if user's mnemonic not found, get the default mnemonic
            if (!mnemonicFound) {
                mnemonicFound = kanjiFound.mnemonic.find(x => x.user_id.length === 0)
            }
            setMnemonic(mnemonicFound)

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

        navigate("/" + nextKanjiID);
    }

    return (
        <div className="Kanji">
            <button className="backButton" onClick={() => navigate(-1)}>Back</button>
            <button className="nextButton" onClick={() => nextKanji()}>Next</button>
            <div className="character">{selectedKanji && selectedKanji.character}</div>
            {selectedKanji && <KanjiDetails kanji={selectedKanji} />}

            <div className="mnemonic">
                <p>How to remember:</p>
                <div className="mnemonicText">{selectedKanji && renderHTML(mnemonic.text)}</div>
            </div>
        </div>
    )
}

export default Kanji