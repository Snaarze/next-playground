'use client'

interface Props {
    // this automatically passed the Props for error and reset function
    error: Error
    reset: () => void
}

export default function Error({ error, reset }: Props) {

    console.log(error)
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={() => reset()} className="btn btn-primary">Retry</button>
        </div>
    )
}