import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLocation } from "react-router-dom";
import './DisplayPage.css';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);


function DisplayPage() {
    const [place, setPlace] = useState(null);
    const location = useLocation();
    const tags = location.state?.tags;

    useEffect(() => {
        getPlaces();
    }, []);

    async function getPlaces() {
        const { data, error } = await supabase.from("restaurant").select("id, name, tags").overlaps("tags", tags);

        console.log(data)
        console.log(error)

        const ranked = data.map(post => {
            const matchCount = post.tags.filter(tag => tags.includes(tag)).length;
            return { ...post, matchCount };
        });

        ranked.sort((a, b) => b.matchCount - a.matchCount);
        setPlace(ranked[0]);

    }

    return (
        <>
            <h1>
                Your best coice is...
            </h1>
            {place ? (
                <div>
                    <h1>{place.name}</h1>
                    <p>{place.location}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </>
    )

}

export default DisplayPage;