'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Share({block}){

    const handleshare = () =>{
        window.Pi.openShareDialog('Share This Block', 'pi://'+process.env['NEXT_PUBLIC_DOMAIN']+'/explorer/block/'+block)
    }
    return(
        <>  
        <span className="ml-3 text-purple-600">
            <FontAwesomeIcon  icon={faShareFromSquare} onClick={handleshare}/>
        </span>            
        </>
    )
}