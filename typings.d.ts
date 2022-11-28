interface Items {
  title: string;
  amount: number;
}

interface Price {
  priceItems: Items[];
}

interface Home {
  id: number;
  url: string;
  name: string;
  beds: number;
  address: string;
  images: string[];
  isSuperhost: boolean;
  rareFind: boolean;
  lat: number;
  lng: number;
  reviewsCount: number;
  rating: number;
  price: Price;
}

interface Checkin {
  setCheckin: React.Dispatch<React.SetStateAction<string>>;
}

interface Checkout {
  setCheckout: React.Dispatch<React.SetStateAction<string>>;
}

interface Guests {
  guests: number;
  setGuests: React.Dispatch<React.SetStateAction<number>>;
}

interface Destination {
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
}

interface Coords {
  lat: number;
  lng: number;
}
