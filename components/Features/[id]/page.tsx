import { Feature } from "@/types/feature";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import featuresData from "../featuresData";
import Player from "@/components/players/player";

export default function page(){
    const router = useRouter();
    const { id } = router.query; // Get the id from the URL
    const [feature, setFeature] = useState<Feature | null>(null);
  

    useEffect(() => {
        if (id) {
        // Find the feature by ID from the featuresData array
        const selectedFeature = featuresData.find((feature) => feature.id.toString() === id);
        setFeature(selectedFeature || null);
        }
    }, [id]); // Re-run the effect when the `id` changes

    if (!feature) {
        return <div>Loading...</div>; // Show loading state until the feature is found
    }

    return (
        <div>

            <Player />
        </div>
    )
}