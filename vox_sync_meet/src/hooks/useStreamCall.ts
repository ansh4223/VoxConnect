import { useCall } from "@stream-io/video-react-sdk";

export default function useStreamCall(){
    const call = useCall();

    if(!call){
        throw new Error(
            "useStreamCall must be used within a StreamCall components with a valid call props.",
        );
    }
    return call;
}