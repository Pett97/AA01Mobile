import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./passenger.style";

type PassengerProps = {
  name: string;
  avatar: string;
  origin: string;
  destination: string;
};
function Passenger({ name, avatar, origin, destination }: PassengerProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.data}>{name}</Text>
        <Image source={{ uri: avatar }} />
      </View>
      <View>
        <Text>Origin: {origin}</Text>
        <Text>Destiny: {destination}</Text>
      </View>
    </View>
  );
}

export default Passenger;
