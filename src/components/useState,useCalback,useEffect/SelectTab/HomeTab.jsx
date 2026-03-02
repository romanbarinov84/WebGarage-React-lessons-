


const HomeTab = () => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        background: "#f4f8ff",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ color: "cornflowerblue" }}>Добро пожаловать 👋</h2>

      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        Это главная вкладка приложения. Здесь можно разместить
        основную информацию, приветствие или краткое описание проекта.
      </p>

      <div style={{ marginTop: "20px" }}>
        <h3>🚀 Возможности:</h3>
        <ul>
          <li>Переключение вкладок</li>
          <li>Использование useTransition</li>
          <li>Оптимизация производительности</li>
        </ul>
      </div>

      <button
        style={{
          marginTop: "20px",
          padding: "8px 15px",
          borderRadius: "6px",
          border: "none",
          background: "cornflowerblue",
          color: "white",
          cursor: "pointer",
        }}
      >
        Узнать больше
      </button>
    </div>
  );
  
}

export default HomeTab