"use client";

import useLoadCall from "@/hooks/useLoadCall";
import { useUser } from "@clerk/nextjs";
import { Call, CallControls, SpeakerLayout, StreamCall, StreamTheme, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { Loader2 } from "lucide-react";
import { useState } from "react";

interface MeetingPageProps {
  id: string;
}

export default function MeetingPage({ id }: MeetingPageProps) {
  const {user, isLoaded: userLoaded} = useUser();

  const {call, callLoading} = useLoadCall(id);
  
  if (!userLoaded || callLoading) {
    return <Loader2 className="mx-auto animate-spin" />;
  }
  if (!call) {
    return <p className="text-center font-bold">Call not found</p>
  }
  return (
    <StreamCall call={call}>
        <StreamTheme className="space-y-3">
            <SpeakerLayout />
            <CallControls />
        </StreamTheme>
    </StreamCall>
  )
}
