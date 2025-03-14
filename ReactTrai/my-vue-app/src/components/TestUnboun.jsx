import { useState , useEffect } from "react"
function TextUnboun() {
    const [dataTime, setDataTime] = useState(new Date())

    useEffect(() => {
        console.log("Вмонтовано")
        
        const interval = setInterval(() => {
            const credetTimeDate = new Date()
            console.log(credetTimeDate)
            setDataTime(credetTimeDate)
        }, 1000)
        return () => {
            console.log("Демонтовано")
            clearInterval(interval)
            
        }
    }, [])



    return (
        <div>ТТестуєм Unmount. {dataTime.toISOString()}</div>
    )
      
    
}
export default TextUnboun