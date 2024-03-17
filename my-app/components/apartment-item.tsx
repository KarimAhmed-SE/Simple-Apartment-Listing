import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";

interface ApartmentItemProps {
  type: string;
  id: string;
  image: string;
  description: string;
  sellerFirstName: string;
  sellerLastName: string;
  sellerEmail: string;
  price: number;
  address: string;
  city: string;
  phone: string;
}

const ApartmentItem: React.FC<ApartmentItemProps> = ({
  type,
  id,
  image,
  description,
  sellerFirstName,
  sellerLastName,
  sellerEmail,
  price,
  address,
  city,
  phone,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../public/images/Seller@gmail.comGarden Apartment.png")}
          style={styles.image}
        />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.type}>{type}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {sellerFirstName} {sellerLastName}
          </Text>
          <Text style={styles.address}>{address}</Text>
          <Text style={styles.address}>{city}</Text>
        </View>

        <Text style={styles.price}>${price}</Text>

        <Link href={`/details/${id}`} style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 200,
    gap: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#374151",
    opacity: 0.8,
    marginVertical: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 2,
    padding: 10,
  },
  type: {
    color: "white",
    backgroundColor: "#f97316",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  infoContainer: {
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  address: {
    fontSize: 14,
    color: "white",
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#f97316",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ApartmentItem;
