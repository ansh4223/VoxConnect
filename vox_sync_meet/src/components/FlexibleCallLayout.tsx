import useStreamCall from "@/hooks/useStreamCall";
import { CallControls, PaginatedGridLayout, SpeakerLayout } from "@stream-io/video-react-sdk";
import { BetweenHorizonalEnd, BetweenVerticalEnd, LayoutGrid } from "lucide-react";
import { useState } from "react";
import EndCallButton from "./EndCallButton";

type CallLayout = "speaker-vert" | "speaker-horiz" | "grid";

export default function FlexibleCallLayout(){
    const [layout, setLayout] = useState<CallLayout>("speaker-vert");

    const call = useStreamCall();

    return <div className="space-y-3">
        <CallLayoutButton layout={layout} setLayout={setLayout} />
        <CallLayoutView layout={layout} />
        <CallControls />
        <EndCallButton />
    </div>
}

interface CallLayoutButtonProps{
    layout: CallLayout,
    setLayout: (layout: CallLayout) => void,
}

function CallLayoutButton({layout, setLayout}: CallLayoutButtonProps){
    return <div className="mx-auto w-fit space-x-6" >
        <button onClick={() => setLayout("speaker-vert")}>
            <BetweenVerticalEnd 
            className={layout !== "speaker-vert" ? "text-gray-400" : ""}
            />
        </button>
        <button onClick={() => setLayout("speaker-horiz")}>
            <BetweenHorizonalEnd 
            className={layout !== "speaker-horiz" ? "text-gray-400" : ""}
            />
        </button>
        <button onClick={() => setLayout("grid")}>
            <LayoutGrid 
            className={layout !== "grid" ? "text-gray-400" : ""}
            />
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