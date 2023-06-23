import { useState, useRef, useContext, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import renderHTML from 'react-render-html'
import { updateKanji } from '../hooks/updateKanji';
import { UserContext } from '../App';
import { Tooltip } from 'react-tooltip'


const Mnemonic = ({ selectedKanji }) => {
    const [editing, setEditing] = useState(false)
    const [icon, setIcon] = useState(faEdit)
    const [iconClass, setIconClass] = useState("")
    const [mnemonic, setmnemonic] = useState("")
    const [tooltipContent, setTooltipContent] = useState("")
    const { user } = useContext(UserContext)
    const textDiv = useRef(null)

    // get the mnemonic to display
    useEffect(() => {
        let mnemonicFound = false;
        // if logged in, get user's mnemonic
        if (user) {
            mnemonicFound = selectedKanji.mnemonic.find(x => x.username === user.username)

            // set tooltip content
            setTooltipContent("Edit")
        }
        else {
            // set tooltip content
            setTooltipContent("Login to edit")
        }

        // if mnemonic not found, get default mnemonic
        if (!mnemonicFound || mnemonicFound === -1 || mnemonicFound === undefined) {
            mnemonicFound = selectedKanji.mnemonic.find(x => x.username === "" || !x.hasOwnProperty('username'))
        }

        setmnemonic(mnemonicFound)
    }, [selectedKanji, user, setmnemonic])

    // toggle between editing mode
    const toggleEditing = () => {
        // return if not logged in
        if (!user) {
            return
        }

        // switch to edit mode
        if (!editing) {
            // animation class
            setIconClass("fa-beat-fade")
            // change to save icon
            setIcon(faFloppyDisk)
            // focus on textarea
            textDiv.current.focus()
            // set tooltip content
            setTooltipContent("Save")
        }
        // save updated mnemonic and switch to normal mode
        else {
            // remove animation class
            setIconClass("")
            // switch to edit icon
            setIcon(faEdit)
            // remove focus 
            textDiv.current.blur()
            // update the mnemonic and kanji data
            const updatedText = textDiv.current.innerHTML.substring(0, textDiv.current.innerHTML.indexOf("<svg"))
            const foundIndex = selectedKanji.mnemonic.findIndex(x => x.username === user.username)
            const mnemonic = {
                text: updatedText,
                username: user.username
            }

            if (foundIndex !== -1) {
                selectedKanji.mnemonic[foundIndex] = mnemonic
            }
            else {
                selectedKanji.mnemonic.push(mnemonic)
            }
            // send post request to database
            updateKanji({ selectedKanji })

            // set tooltip content
            setTooltipContent("Edit")
        }

        setEditing(!editing)
    }

    return (
        <div className="mnemonic">
            <p>How to remember:</p>
            <div className="textDiv" contentEditable={editing} suppressContentEditableWarning={true} ref={textDiv} tabIndex={0}>
                {mnemonic && renderHTML(mnemonic.text)}
                <Tooltip id="edit-tooltip" />
                <FontAwesomeIcon icon={icon} className={iconClass} onClick={() => toggleEditing()} data-tooltip-id="edit-tooltip" data-tooltip-content={tooltipContent} />
            </div>
        </div>
    )
}

export default Mnemonic