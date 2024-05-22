import { Metadata } from "next";
import MyMeetingsPage from "./MyMeetingsPage";

export const metadata: Metadata = {
    title: "My meetings"
}

export default function Page(){
    return <MyMeetingsPage />
}