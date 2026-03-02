

const ContactTab = () => {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "10px",
        background: "#f0fff4",
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        maxWidth: "400px",
      }}
    >
      <h2 style={{ color: "teal" }}>Контакты 📞</h2>

      <p>Вы можете связаться с нами следующими способами:</p>

      <ul style={{ lineHeight: "1.8" }}>
        <li><strong>Email:</strong> example@mail.com</li>
        <li><strong>Телефон:</strong> +1 (234) 567-89-00</li>
        <li><strong>Адрес:</strong> 123 React Street</li>
      </ul>

      <button
        style={{
          marginTop: "15px",
          padding: "8px 15px",
          borderRadius: "6px",
          border: "none",
          background: "lightblue",
          color: "white",
          cursor: "pointer",
        }}
      >
        Написать нам
      </button>
    </div>
  );
}

export default ContactTab