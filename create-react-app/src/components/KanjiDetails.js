const KanjiDetails = ({ kanji }) => {

    return (
        <div className="kanji-details">

            <div className="readings">
                <div className="meaning">{kanji.meaning}</div>
                <div className="sub-heading">Onyomi</div>
                <div className="value">{kanji.onyomi}</div>
                <div className="sub-heading">Kunyomi</div>
                <div className="value">{kanji.kunyomi}</div>
            </div>
            <div className="components">
                <div className="sub-heading">Components</div>
                <div className="value">{kanji.components}</div>
            </div>
        </div>
    )
}

export default KanjiDetails