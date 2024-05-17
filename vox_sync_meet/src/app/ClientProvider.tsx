"use client"

import { useUser } from "@clerk/nextjs";
import { User } from "@stream-io/video-react-sdk";
import { StreamVideo, StreamVideoClient } from "@stream-io/video-react-sdk";
import { Loader2 } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

interface ClientProviderProps {
    children: React.ReactNode;
}

export default function ClientProvider({children}: ClientProviderProps) {
    const videoClient = useInitializeVideoClient();
    if(!videoClient){
        return ( <div className="flex h-screen items-center justify-center">
            <Loader2 className="mx-auto animate-spin" />
        </div>
        );
    }
    return <StreamVideo client={videoClient}> {children} </StreamVideo>
}

function useInitializeVideoClient() {
    const {user, isLoaded: userLoaded} = useUser();
    const [videoClient, setVideoClient] = useState<StreamVideoClient | null> (
        null,
    );
    useEffect(() => {
        if(!userLoaded) return;

        let streamUser: User;
        if(user?.id){
            streamUser =  {
                id: user.id,
                name: user.username || user.id,
                image: user.imageUrl
            }
        }else {
            const id = nanoid();
            streamUser = {
                id,
                type:"guest",
                name: 'Guest ${id}'
            }
        }
    },[])

    return videoClient;
}