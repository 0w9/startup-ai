import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';

export function Generator() {
    const [idea, setIdea] = useState();

    async function getIdea(event) {  
        event.preventDefault();
        let keyword = document.getElementById("keyword").value;
        fetch(`https://startup-ai.vercel.app/api/idea?keyword=${keyword}`).then(response => response.json()).then(response => {
            console.log(response.idea);
            
            setIdea(response.idea)
        })   
    }

    return (
        <>
            <div>
                <div className={"box-content flex flex-row grid place-items-center h-screen bg-cyan"}>
                    <form className={""} onSubmit={getIdea} label={""}>
                        <input  type={"text"} placeholder={"Enter one or more keywords."} id={"keyword"}  required />
                        <Button type={"submit"} className={""}>Get ideas</Button>
                        <p>Sorry for the UI 😅, I am experimenting.</p>
                        <p>{idea}</p>
                    </form>
                </div>
            </div>

        </>
    )
}