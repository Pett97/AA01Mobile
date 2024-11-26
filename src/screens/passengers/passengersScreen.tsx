// src/screens/passengerScreen/passengerScreen.tsx

import React from "react";
import { SectionList, Text, View } from "react-native";
import data from "../../services/data-passengers";
import { getAllOrigin, groupPassenger } from "../../services/teste";
import styles from "./passangerScreen.style";
import Passenger from "../../passenger/passenger";
import Header from "../../components/header/header";
import ActionSheetComponent from "../../constants/actionSheet/actionSheet";
import Action from "../../components/action/action";

function PassengersScreen() {
  let teste = groupPassenger(data);
  const origins = getAllOrigin(data);

  return (
    <View>
      <View>
        <View>
          <View>
            <Header>
            <ActionSheetComponent>
              <Action optionsList={["about", "logout"]} />
            </ActionSheetComponent>
            </Header>
          </View>
        </View>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>AA01</Text>
        </View>
        <View style={styles.containerList}>
          <SectionList
            sections={teste}
            keyExtractor={(item, index) => item.id.toString() + index}
            renderItem={({ item }) => (
              <View>
                <Passenger
                  name={item.passenger_name}
                  avatar={item.passenger_avatar}
                  origin={item.origin}
                  destination={item.destination}
                />
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.containerCategory}>
                <Text style={styles.category}>{title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default PassengersScreen;
