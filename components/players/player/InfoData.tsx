import { GiFootTrip } from "react-icons/gi";
import { PlayerInfo } from "./infoType";
import { FaCakeCandles } from "react-icons/fa6";import { FaRunning } from "react-icons/fa";
import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";

const infoData: PlayerInfo[] =[
    {
        icon: <FaCakeCandles />,
        key: 'Birthday Date',
        value: '17/06/2025'
    },
    {
        icon: <GiFootTrip/>,
        key: 'Dominant Foot',
        value: 'Left'
    },
    {
        icon: <GiBodyHeight />,
        key: 'Height',
        value: '182'
    },
    {
        icon: <FaRunning />,
        key: 'Player Type',
        value: 'LB'
    },
    {
        icon: <GiWeight />,
        key: 'Weight',
        value: '74kg'
    },
]

export default infoData