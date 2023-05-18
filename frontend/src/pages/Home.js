import { useEffect, useState } from "react"
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
// import WorkoutDetails from '../components/WorkoutDetails'
// import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
    // const { workouts, dispatch } = useWorkoutsContext()
    const [allKanji, setAllKanji] = useState(false);

    useEffect(() => {
        const fetchAllKanji = async () => {
            const response = await fetch('http://localhost:4000/api/kanji')
            const json = await response.json()

            if (response.ok) {
                setAllKanji(json)
                console.log(response);
                // dispatch({ type: 'SET_WORKOUTS', payload: json })
            }
            // else {
            //     console.log("not ok")
            // }
        }

        fetchAllKanji()
    }, [setAllKanji])

    return (
        <div className="home">
            <div className="kanji">
                {allKanji && allKanji.map((kanji) => (
                    <p>{kanji.character}</p>
                    // <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            {/* <WorkoutForm /> */}
        </div>
    )
}

export default Home