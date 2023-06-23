const KanjiDetails = ({ selectedKanji }) => {
    return (
        <div className="kanji-details">

            <div className="readings">
                <div className="meaning">{selectedKanji.meaning}</div>
                <div className="sub-heading">Onyomi</div>
                <div className="value">{selectedKanji.onyomi.join("、")}</div>
                <div className="sub-heading">Kunyomi</div>
                <div className="value">{selectedKanji.kunyomi.join("、")}</div>
            </div>
            {selectedKanji.components.length > 0 && <div className="components">
                <div className="sub-heading">Components</div>
                <div className="value">{selectedKanji.components.join("、")}</div>
            </div>}
        </div>
    )
}

export default KanjiDetails