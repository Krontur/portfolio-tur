import { FormControl, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const flags: Record<string, string> = {
    es: '🇪🇸',
    en: '🇬🇧',
    de: '🇩🇪',
};

export default function LanguageSelector() {
    const [language, setLanguage] = useState('es');
    const [open, setOpen] = useState(false);
    const { i18n } = useTranslation();

    const handleLanguageChange = (event: SelectChangeEvent<string>) => {
        handleClose();
        setLanguage(event.target.value);
        i18n.changeLanguage(event.target.value);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <FormControl sx={{ width: 58, minWidth: 58 }}>
            <Select
                size="small"
                labelId='language-selector'
                value={language}
                renderValue={(selected) => flags[selected]}
                onChange={handleLanguageChange}
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
                MenuProps={{
                    PaperProps: {
                        sx: { minWidth: 76 },
                    },
                }}
                sx={{
                    width: 58,
                    height: 42,
                    borderRadius: 999,
                    bgcolor: 'rgba(255, 255, 255, 0.04)',
                    '& .MuiSelect-select': {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 0,
                        pr: '24px !important',
                        pl: '10px !important',
                        fontSize: '1.1rem',
                    },
                    '& .MuiSelect-icon': {
                        right: 5,
                    },
                }}
            >
                <MenuItem value="es">🇪🇸 ES</MenuItem>
                <MenuItem value="en">🇬🇧 EN</MenuItem>
                <MenuItem value="de">🇩🇪 DE</MenuItem>
            </Select>
        </FormControl>
    );
}
