import React, {useEffect, useState} from "react";

export default function SelectHabit({habit, habitInput}){
    const [selected, setSelected] = useState(
        habit?.habitName ? habit?.habitName : "-"
    );
    const [data, setData] = useState();

    return(
        <></>
    )
}