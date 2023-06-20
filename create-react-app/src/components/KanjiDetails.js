const KanjiDetails = ({ kanji }) => {
    console.log(kanji)
    return (
        <div className="kanji-details">

            <div className="readings">
                <div className="meaning">{kanji.meaning}</div>
                <div className="sub-heading">Onyomi</div>
                <div className="value">{kanji.onyomi.join("、")}</div>
                <div className="sub-heading">Kunyomi</div>
                <div className="value">{kanji.kunyomi.join("、")}</div>
            </div>
            {kanji.components.length > 0 && <div className="components">
                <div className="sub-heading">Components</div>
                <div className="value">{kanji.components.join("、")}</div>
            </div>}
        </div>
    )
}

export default KanjiDetails