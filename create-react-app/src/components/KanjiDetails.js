const KanjiDetails = ({ kanji }) => {

    return (
        <div className="kanji-details">
            <div className="meaning">{kanji.meaning}</div>
            <div className="sub-heading">Onyomi</div>
            <div className="value">{kanji.onyomi}</div>
            <div className="sub-heading">Kunyomi</div>
            <div className="value">{kanji.kunyomi}</div>
        </div>
    )
}

export default KanjiDetails