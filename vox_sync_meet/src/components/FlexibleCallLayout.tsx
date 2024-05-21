import useStreamCall from "@/hooks/useStreamCall";
import { PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import { useState } from "react";

type CallLayout = "speaker-vert" | "speaker-horiz" | "grid";

export default function FlexibleCallLayout(){
    const [layout, setLayout] = useState<CallLayout>("speaker-vert");

    const call = useStreamCall();

    return <div className="space-y-3">
        <CallLayoutView layout={layout} />
    </div>
}



interface CallLayoutViewProps{
    layout: CallLayout
}

function CallLayoutView({layout}: CallLayoutViewProps){
    if(layout === "speaker-vert"){
        return <SpeakerLayout />
    }

    if(layout === "speaker-horiz"){
        return <SpeakerLayout participantsBarPosition="right" />
    }

    if(layout === "grid"){
        return <PaginatedGridLayout />
    }

    return null;
}