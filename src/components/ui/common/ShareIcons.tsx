import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import Link from "next/link";
import React from "react";

type Props = {
    shareLink: string;
    shareTitle: string
};

const ShareIcons = ({ shareLink, shareTitle }: Props) => {
    //console.log(JSON.stringify(shareLink))
    //console.log(shareLink)
const shareMessage = `Checkout this project: ${shareTitle} - ${shareLink}`
    return (
        <div>
            <div className="flex flex-wrap gap-4">
                <a
                    href={`https://twitter.com/intent/tweet?text=${shareTitle}%20\nhttps://idighekere-udo.brimble.app/projects/${shareLink}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {" "}
                    <Icon icon="logos:twitter" width="26" height="26" />
                </a>
                <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://idighekere-udo.brimble.app/projects/${shareLink}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="logos:facebook" width="26" height="26" />
                </a>
                <a   href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
          shareMessage
        )}`}
        target="_blank"
        rel="noopener noreferrer">
                    <Icon icon="logos:whatsapp-icon" width="26" height="26" />
                </a>
                <a
                    href={`https://www.linkedin.com/shareArticle?url=https://idighekere-udo.brimble.app/projects/${shareLink}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="devicon:linkedin" width="26" height="26" />
                </a>
            </div>
        </div>
    );
};

export default ShareIcons;
