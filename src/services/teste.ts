import data from "./data-passengers";

interface Passenger {
  id: number;
  passenger_name: string;
  passenger_avatar: string;
  origin: string;
  destination: string;
}

export function getAllOrigin(data: Passenger[]): string[] {
  let origins: string[] = [];

  data.forEach((passenger) => {
    if (origins.indexOf(passenger.origin) === -1) {
      origins.push(passenger.origin);
    }
  });

  return origins;
}

export  function getAllDestination(data: Passenger[]): string[] {
  let destinations: string[] = [];
  data.forEach((passenger) => {
    if (destinations.indexOf(passenger.destination) === -1) {
      destinations.push(passenger.destination);
    }
  });

  return destinations;
}

export function groupPassenger(passengers: Passenger[]): { title: string, data: Passenger[] }[] {
  let groupedPassengers: { title: string, data: Passenger[] }[] = [];

  const origins = getAllOrigin(passengers).sort();

  origins.forEach((origin) => {
    const passengerOrigin = passengers.filter((p) => p.origin === origin || p.destination === origin);
    groupedPassengers.push({
      title: origin,
      data: passengerOrigin
    });
  });
  console.log(JSON.stringify(groupedPassengers, null, 2));
  return groupedPassengers;
}

