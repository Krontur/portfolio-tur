import { Button, Card, CardActions, CardContent, CardMedia, Typography, Modal } from "@mui/material";
import { useState } from "react";

interface ProjectCardProps {
    title: string;
    description: string;
    detailed_description: string;
    imagepath: string;
    githuburl?: string | null;
    linkLabel?: string;
    button_details?: string;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90vw', sm: 400 },
  maxHeight: '80vh',
  overflow: 'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function ProjectCard({ title, description, imagepath, githuburl, linkLabel = "GitHub", detailed_description, button_details }: Readonly<ProjectCardProps>) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Card sx={{ maxWidth: 400, height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="140"
                image={imagepath}
                alt={title}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', marginTop: 'auto' }}>
                {githuburl && (
                    <Button
                        size="small"
                        color="primary"
                        href={githuburl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {linkLabel}
                    </Button>
                )}
                <>
                    <Button
                            size="small"
                            color="primary"
                            onClick={handleOpen}
                    >
                        {button_details ? button_details : "More Details"}
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <CardContent sx={style}>
                            <Typography gutterBottom variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {detailed_description}
                            </Typography>
                        </CardContent>
                    </Modal>
                </>
            </CardActions>
        </Card>
    );
}
