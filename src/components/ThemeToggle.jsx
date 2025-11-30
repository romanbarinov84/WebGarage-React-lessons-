


function ThemeToggle({isDarkMode,setIsDarkMode}) {

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }
  return (
    <div style={{background:isDarkMode ? "black" : "white" , color: isDarkMode ? "white" : "black", height: 100}}>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeToggle