import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

interface ProjectCardProps {
    title: string;
    description: string;
    imagepath: string;
    githuburl?: string | null;
}

export default function ProjectCard({ title, description, imagepath, githuburl }: Readonly<ProjectCardProps>) {
    return (
        <Card sx={{ maxWidth: 400, height: '100%', width: '100%' }}>
            <CardMedia
                component="img"
                height="140"
                image={imagepath}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'left', alignItems: 'end' }}>
                {githuburl && (
                    <Button
                        size="small"
                        color="primary"
                        href={githuburl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </Button>
                )}
            </CardActions>
        </Card>
    );
}
