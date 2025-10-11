import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { useLocation } from "react-router-dom";

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY);

function DisplayPage() {
    const [places, setPlaces] = useState([]);
    const location = useLocation();
    const tags = location.state?.message;

    useEffect(() => {    
        getPlaces();  
    }, []);

    async function getPlaces() {
        const { data } = await supabase.from("restaurant").select('*').overlaps("tags", tags);

        const ranked = data.map(post => {
            const matchCount = post.tags.filter(tag => queryTags.includes(tag)).length;
            return { ...post, matchCount };
        });
    }

    ranked.sort((a, b) => b.matchCount - a.matchCount);

    const best = ranked[0];
    const second = ranked[1];

    return (
        <>
            <h1>
                Your best coice is...
            </h1>
            <div>
                <h1>{best.name}</h1>
                <p>{best.location}</p>
            </div>
        </>
    )

}