function Feedback ({data : {good, neutral, bad}, total, percentage}){

    return(
        <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {percentage}%</p>
        </>
    )
}

export default Feedback