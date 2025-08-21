import { Avatar, Tooltip } from "@mui/material";


interface NewAvatarProps {
    readonly alt: string;
    readonly src: string;
}

export default function NewAvatar({ alt, src }: NewAvatarProps) {
    return (
        <Tooltip title={alt}>
            <Avatar
                alt={alt}
                src={src}
                sx={{
                    width: 64,
                    height: 64,
                    bgcolor: "transparent",
                    boxShadow: 2,
                    mx: 1,
                    transition: "border 0.2s",
                    border: "2px solid transparent",
                    "&:hover": {
                        border: "2px solid #a259f7"
                    },
                    p: 1
                }}
            />
        </Tooltip>
    );
}
