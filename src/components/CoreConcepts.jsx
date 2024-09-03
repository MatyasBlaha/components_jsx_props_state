import {CORE_CONCEPTS} from "../data.js";
import CoreConcept from "./CoreConcept/CoreConcept.jsx";

export default function () {
    return (
        <section className='container'>
            {CORE_CONCEPTS.map((concept) => (
                <CoreConcept key={concept.title} {...concept}/>
            ))}
        </section>
    )
}