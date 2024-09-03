import {useState} from "react";

import TabButton from "./TabButton.jsx";
import {EXAMPLES} from "../data.js";

export default function Examples () {

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
        <section>
            <ul>
                <TabButton isActive={selectedTopic === 'components'}
                           onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton isActive={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>jsx</TabButton>
                <TabButton isActive={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>props</TabButton>
                <TabButton isActive={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>state</TabButton>
            </ul>
            {content}
        </section>
    )
}