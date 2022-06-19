
export function Generator() {

    async function getIdea(event) {  
        event.preventDefault();
        fetch("http://localhost:3003/api/idea?keyword=food").then(response => response.json()).then(response => console.log(response.idea))

    }

    return (
        <>
            <div className={"grid place-items-center"}>
                <form className={"flex flex-row"} onSubmit={getIdea}>
                    <input type={"text"} placeholder={"Enter one or more keywords."} id={"keyword"}/>
                    <button type={"submit"}>Get ideas</button>
                </form>
            </div>
        </>
    )
}