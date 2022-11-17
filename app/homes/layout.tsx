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
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_API_KEY}&libraries=places&language=en`}
      />
    </header>
  );
}
