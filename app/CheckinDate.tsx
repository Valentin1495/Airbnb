"use client";

import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function CheckinDate({ setCheckin }: Checkin) {
  const [value, setValue] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (value?.isValid()) {
      setCheckin(value?.toISOString()!);
    }
  }, [value]);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check-in"
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
