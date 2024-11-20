import { useState, useRef } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard";
export const ShorterUrl = () => {
    const [url, setUrl] = useState();
    const [ShorterUrl, setShorterUrl] = useState("");
    const inputRef = useRef(null);
   const shorterUrlFun = async (e) => {
    //setUrl(inputRef.current.value);
    console.log("0", url);
       // if(inputRef.current.value.trim() !== "") {
            console.log(e);
            e.preventDefault();
            try {
                fetch(
                    `https://tinyurl.com/api-create.php?url=${url}`,
                    {
                        method: "GET",
                    },
                )
                .then((response) => response.text())
                .then((responseJson) => {
                    console.log(responseJson);
                    setShorterUrl(responseJson);
                })
            }catch(e){
                alert(e);
            }
       //}
        
    }
    return (
        <div>
            <div className="Title" style={{backgroundColor: "black", height: "90px", textAlign: "center", alignItems: "center", width:"100%", position:"absolute"}}>
                <h1 style={{color: "white", fontWeight: "bold"}}>Shorter URL</h1>
            </div>
            <div className="body" style={{backgroundColor: "grey", width: "100%", height: "100vh", display: "flex",flexDirection: "column", flexWrap: "wrap",gap: "10px", justifyContent: "center", alignItems: "center"}}>
                <label for="exampleInputEmail1" class="form-label">Paste your long link here</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type a url..." style={{width: "40%", height: "3%"}} onChange={(e) => setUrl(e.target.value)}/>
                <button type="submit" class="btn btn-primary" style={{width: "10%"}} onClick={shorterUrlFun}>Submit</button>
                {ShorterUrl &&
                    <div className='shortener__viewShot'>
                    {ShorterUrl}
                    <CopyToClipboard text={ShorterUrl}>
                        <button onClick={() => alert("The URL has been copied")}>copy</button>
                    </CopyToClipboard>
                </div>
                }
            </div>
        </div>
    )
}