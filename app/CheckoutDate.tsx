"use client";

import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Checkout {
  checkout: string;
  setCheckout: React.Dispatch<React.SetStateAction<string>>;
}

export default function CheckoutDate({ checkout, setCheckout }: Checkout) {
  const [value, setValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (value?.isValid()) {
      setCheckout(value?.toISOString()!);
    }
  }, [value]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check-out"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}
