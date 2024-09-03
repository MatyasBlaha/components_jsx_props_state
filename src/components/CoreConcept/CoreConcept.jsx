import './CoreConcept.css'

export default function CoreConcept ({title, description}) {
    return (
        <div className='CoreConcept-container'>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}