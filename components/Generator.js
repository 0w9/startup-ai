import { useState, useEffect } from 'react';
import { Button, Input, Text, Card, Loading } from '@nextui-org/react';

export function Generator() {
    const [idea, setIdea] = useState("");
    const [enabled, setEnabled] = useState(false);

    function getIdea(event) {  
        setIdea("")
        setEnabled(true)
        document.getElementById("btn").setAttribute("disabled", true)
        event.preventDefault();
        let keyword = document.getElementById("keyword").value;
        fetch(`https://startup-ai.vercel.app/api/idea?keyword=${keyword}`).then(response => response.json()).then(response => {
            console.log(response.idea);
            
            setIdea(response.idea)
            setEnabled(false)
        })   
    }

    return (
        <>
            <div className={"box-content flex flex-row grid place-items-center bg-cyan"}>
                <form className={"flex flex-direction row mb-10"} onSubmit={getIdea} label={""}>
                    <Input  type={"text"}  className={"mr-10"} placeholder={"Enter one or more keywords."} id={"keyword"} required shadow />
                    <Button type={"submit"} className={"ml-10"} id={"btn"} color={"primary"} disabled={enabled} shadow>Get ideas</Button>
                </form>
                { idea !== "" ? <Card className={"max-w-10"}><Card.Body><Text className={"max-w-10"} blockquote>{idea}</Text></Card.Body></Card> : <></> }
            </div>
        </>
    )
}