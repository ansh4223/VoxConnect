import useStreamCall from "@/hooks/useStreamCall";
import { PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import { BetweenHorizonalEnd, BetweenVerticalEnd, LayoutGrid } from "lucide-react";
import { useState } from "react";

type CallLayout = "speaker-vert" | "speaker-horiz" | "grid";

export default function FlexibleCallLayout(){
    const [layout, setLayout] = useState<CallLayout>("speaker-vert");

    const call = useStreamCall();

    return <div className="space-y-3">
        <CallLayoutButton layout={layout} setLayout={setLayout} />
        <CallLayoutView layout={layout} />
    </div>
}

interface CallLayoutButtonProps{
    layout: CallLayout,
    setLayout: (layout: CallLayout) => void,
}

function CallLayoutButton({layout, setLayout}: CallLayoutButtonProps){
    return <div className="mx-auto w-fit space-x-6" >
        <button onClick={() => setLayout("speaker-vert")}>
            <BetweenVerticalEnd />
        </button>
        <button onClick={() => setLayout("speaker-horiz")}>
            <BetweenHorizonalEnd />
        </button>
        <button onClick={() => setLayout("grid")}>
            <LayoutGrid />
        </button>
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