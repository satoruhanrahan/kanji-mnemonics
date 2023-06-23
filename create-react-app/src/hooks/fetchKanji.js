import DOMPurify from 'dompurify'

export const fetchKanji = async () => {
    let api = "/api/kanji";
    if (process.env.REACT_APP_NODE_ENV === 'development') {
        api = 'http://localhost:' + process.env.REACT_APP_BACKEND_PORT + api
    }

    const response = await fetch(api)
    const json = await response.json()

    if (response.ok) {
        json.forEach((kanji, kanjiIndex) => {
            json[kanjiIndex].mnemonic.forEach((mnemonic, mnemonicIndex) => {
                json[kanjiIndex].mnemonic[mnemonicIndex].text = DOMPurify.sanitize(json[kanjiIndex].mnemonic[mnemonicIndex].text)
            })
        })

        return json
    }
    else {
        console.log(response)
    }
}