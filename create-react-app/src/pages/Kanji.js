// import { useEffect, useState } from "react"
// import { Link } from 'react-router-dom'
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
// import WorkoutDetails from '../components/WorkoutDetails'
// import WorkoutForm from '../components/WorkoutForm'

const Kanji = () => {
    // const { workouts, dispatch } = useWorkoutsContext()
    // const [kanji, setKanji] = useState(false);

    // useEffect(() => {
    //     const fetchKanji = async () => {
    //         const response = await fetch('http://localhost:4000/api/kanji/'+)
    //         const json = await response.json()

    //         if (response.ok) {
    //             setAllKanji(json)
    //             console.log(response);
    //             // dispatch({ type: 'SET_WORKOUTS', payload: json })
    //         }
    //         // else {
    //         //     console.log("not ok")
    //         // }
    //     }

    //     fetchAllKanji()
    // }, [setAllKanji])

    return (
        <div className="Kanji">
            <div>
                Hello
            </div>
        </div>
    )
}

export default Kanji