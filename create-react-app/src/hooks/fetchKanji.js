import DOMPurify from 'dompurify'

export const fetchKanji = async () => {
    let api = "/api/kanji";
    if (process.env.REACT_APP_NODE_ENV === 'development') {
        api = 'http://localhost:4000' + api
    }

    const response = await fetch(api)
    const json = await response.json()

    if (response.ok) {
        json.forEach((kanji, kanjiIndex) => {
            json[kanjiIndex].mnemonic.forEach((mnemonic, index) => {
                json[index].mnemonic[index].text = DOMPurify.sanitize(json[index].mnemonic[index].text)
            })
        })

        return json
    }
    else {
        console.log(response)
    }
}