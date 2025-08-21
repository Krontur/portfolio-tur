import { TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";

interface TimelineExperienceItemProps {
    year: string | number;
    title: string;
    company: string;
    description: string;
}

export default function NewTimelineItem({ year, title, company, description }: Readonly<TimelineExperienceItemProps>) {
    return (
        <TimelineItem>
            <TimelineOppositeContent>
                <Typography variant="body2" color="text.primary">
                    {description}
                </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="success">
                    <Typography variant="body2" color="text.primary">
                        {year}
                    </Typography>
                </TimelineDot>
                {title ? <TimelineConnector sx={{ bgcolor: "success.main", minHeight: 80 }} /> : null}
            </TimelineSeparator>
            <TimelineContent>
                <Typography variant="h6" component="span" color="text.primary">
                    {title}
                </Typography>
                <Typography color="text.primary">
                    {company}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    );
}
