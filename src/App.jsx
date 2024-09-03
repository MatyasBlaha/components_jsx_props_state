import { useState } from 'react'

import { CORE_CONCEPTS } from "./data.js";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import Header from './components/Header/Header.jsx'
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from './data.js'

function App() {
    const [selectedTopic, setSelectedTopic] = useState()

    function handleSelect(value){
        setSelectedTopic(value)
    }

    let content = <p>Please select a topic</p>

    if(selectedTopic) {
        content = (
            <menu>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </menu>
        )
    }


    return (
        <>
            <Header/>
            <main>
                <section className='container'>
                    {CORE_CONCEPTS.map((concept) => (
                        <CoreConcept key={concept.title} {...concept}/>
                    ))}
                </section>
                <section>
                    <ul>
                        <TabButton isActive={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isActive={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>jsx</TabButton>
                        <TabButton isActive={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>props</TabButton>;
                        <TabButton isActive={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>state</TabButton>
                    </ul>
                    {content}
                </section>
            </main>
        </>
    )
}

export default App
