import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
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
            <div>
                <h1>Welcome to Kanji Mnemonics!</h1>
                <p>Kanji are the characters used in Japanese derived from Chinese characters. There are over 2000 of them, which
                    makes it difficult to master...but no fear, all you need are Kanji Mnemonics! Simple stories or images to help you
                    remember them. The brain is much better at remembering visual information than simple text or sound, and we can
                    use this to master all the kanji!</p>
            </div>
            <div className="kanji">
                <h2>First Grade Kanji</h2>
                {allKanji && allKanji.map((kanji) => (
                    <Link to={"/" + kanji._id} className="kanji-list-item" key={kanji.meaning}>{kanji.character}</Link>
                    // <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            {/* <WorkoutForm /> */}
        </div>
    )
}

export default Home