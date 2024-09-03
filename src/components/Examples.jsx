import {useState} from "react";

import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
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
        <Section title={'Examples'} className='section'>
            <ul>
                <Tabs buttons={
                    <>
                        <TabButton isActive={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isActive={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>jsx</TabButton>
                        <TabButton isActive={selectedTopic === 'props'} onClick={() => handleSelect('props')}>props</TabButton>
                        <TabButton isActive={selectedTopic === 'state'} onClick={() => handleSelect('state')}>state</TabButton>
                    </>
                    }
                >
                    {content}
                </Tabs>
                <menu>

                </menu>
            </ul>
        </Section>
    )
}