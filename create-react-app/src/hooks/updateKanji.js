export const updateKanji = async ({ selectedKanji }) => {

    let api = '/api/kanji/' + selectedKanji._id;
    if (process.env.REACT_APP_NODE_ENV === 'development') {
        api = 'http://localhost:' + process.env.REACT_APP_BACKEND_PORT + api
    }

    const response = await fetch(api, {
        method: 'POST',
        body: JSON.stringify({ ...selectedKanji }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    // console.log(json)
    return json
}