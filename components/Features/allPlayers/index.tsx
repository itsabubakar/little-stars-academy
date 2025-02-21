import featuresData from "../featuresData";
import SingleFeature from "../SingleFeature";

export default function PlayerDiscover(){
    return (
        <div>
            
        {featuresData.map((feature, key) => (
            <SingleFeature feature={feature} key={feature.id} />
          ))}
        </div>
    )
}