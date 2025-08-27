import { FormControl, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";


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
        <FormControl>
            <Select
                size="small"
                labelId='language-selector'
                value={language}
                onChange={handleLanguageChange}
                open={open}
                onOpen={handleOpen}
                onClose={handleClose}
            >
                <MenuItem value="es">🇪🇸</MenuItem>
                <MenuItem value="en">🇬🇧</MenuItem>
                <MenuItem value="de">🇩🇪</MenuItem>
            </Select>
        </FormControl>
    );
}
