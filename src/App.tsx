import './App.css'
import { theme } from './theme/theme'
import Skills from './components/skills'
import Projects from './components/projects'
import Education from './components/education'
import Experience from './components/experience'
import Contact from './components/contact'
import Start from './components/start'
import About from './components/about'
import BasicMenu from './components/basicmenu'
import Footer from './components/footer'

import { AppBar, Box, ThemeProvider, Toolbar, Typography } from '@mui/material'
import ElectroTechBackground from './components/electrotechbackground'
import LanguageSelector from './components/languageselector'
import './i18n'

export default function App() {

  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1, minWidth: '100vw', minHeight: '100vh', backgroundColor: 'black' }}>
        <ElectroTechBackground  />
      </div>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none', backdropFilter: 'blur(30px)', flexDirection: 'row', alignItems: 'center', padding: 0 }}>
          <Toolbar>
            <BasicMenu />
            <Typography variant="h6" color="text.primary" component="a" href="https://portfolio-tur.vercel.app/" sx={{ textDecoration: 'none' }}>Oscar González Tur</Typography>
        </Toolbar>
        {/* Use MUI Box for sx prop support */}
        <Box sx={{ justifyContent: 'right', alignContent: 'right', display: 'flex', flex: 1, margin: 1 }}>
          <LanguageSelector />
        </Box>
        </AppBar>

        <div>
          <Start />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
