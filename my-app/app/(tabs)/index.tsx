import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import axios from "axios";
import ApartmentItem from "@/components/apartment-item";
import { NavigationContainer } from "@react-navigation/native";

interface Apartment {
  _id: string;
  type: string;
  image: string;
  description: string;
  sellerFirstName: string;
  sellerLastName: string;
  sellerEmail: string;
  price: number;
  sellerPhone: string;
  address: string;
  city: string;
}

export default function TabTwoScreen() {
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    try {
      axios
        .get("http://192.168.1.12:3001/apartments")
        .then((response) => {
          setApartments(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.heading}>
          Browse our extensive collection of houses for sale procured just for,{" "}
          <Text style={styles.highlight}>you</Text>
        </Text>
        <Text style={styles.description}>
          Looking for your dream apartment? Look no further than{" "}
          <Text style={styles.bold}></Text>! Our user-friendly platform connects
          renters with a wide range of listings, from cozy studios to spacious
          family homes. Find the perfect fit with detailed descriptions,
          high-quality photos, and easy-to-use contact forms, finding your new
          place is a breeze.
        </Text>
        {/* <View style={styles.buttonContainer}>
          <Text style={styles.button}>List an apartment!</Text>
        </View> */}
      </View>
      <View style={styles.apartmentsContainer}>
        {apartments.map((apartment) => (
          <ApartmentItem
            key={apartment._id}
            type={apartment.type}
            id={apartment._id}
            image={apartment.image}
            description={apartment.description}
            sellerFirstName={apartment.sellerFirstName}
            sellerLastName={apartment.sellerLastName}
            sellerEmail={apartment.sellerEmail}
            price={apartment.price}
            phone={apartment.sellerPhone}
            address={apartment.address}
            city={apartment.city}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  content: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    color: "orange",
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    fontSize: 18,
    color: "black",
    backgroundColor: "orange",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  apartmentsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20,
  },
});
