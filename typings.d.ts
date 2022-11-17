interface Home {
  url: string;
  name: string;
  beds: number;
  address: string;
  images: string[];
  isSuperhost: boolean;
  lat: number;
  lng: number;
  reviewsCount: number;
  rating: number;
  price: number;
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
