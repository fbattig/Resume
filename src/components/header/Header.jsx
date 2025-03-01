import './Header.css';
const descriptions = ["Professional", "Experienced", "Skilled"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
  const description = descriptions[genRandomInt(2)];

  return (
    <header>
      <h1>Felix Battig</h1>
      <p>
        {description} Full Stack Developer with extensive experience in modern web technologies
      </p>
    </header>
  );
}
