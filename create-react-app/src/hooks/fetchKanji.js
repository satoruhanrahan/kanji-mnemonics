import DOMPurify from 'dompurify'

export const fetchKanji = async () => {
    // const response = await fetch('/api/kanji')
    const response = await fetch('http://localhost:4000/api/kanji')
    const json = await response.json()

    if (response.ok) {
        console.log(json)
        json.forEach((element, index) => {
            json[index].mnemonic = DOMPurify.sanitize(json[index].mnemonic)
        })

        return json
    }
    else {
        console.log(response)
    }
}