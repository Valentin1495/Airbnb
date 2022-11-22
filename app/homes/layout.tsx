import "../../styles/globals.css";
import Header from "./Header";

export default function HomesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <header>
      <Header />
      {children}
    </header>
  );
}
