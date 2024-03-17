import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

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
  country: string;
  bedrooms: number;
  bathrooms: number;
  createdAt: Date;
}

export default function ApartmentDetails() {
  const route = useRoute();
  // const { id } = route.params;
  const [apartmentDetails, setApartmentDetails] = useState<Apartment | null>(
    null
  );

  useEffect(() => {
    // Fetch apartment details here
    // Example: fetchApartmentDetails(details)
    //   .then((data) => setApartmentDetails(data))
    //   .catch((error) => console.error(error));

    // Mock data for testing
    const mockApartmentDetails: Apartment = {
      _id: "1",
      type: "Apartment",
      image: "image-url",
      description: "Apartment description",
      sellerFirstName: "John",
      sellerLastName: "Doe",
      sellerEmail: "john@example.com",
      price: 1000,
      sellerPhone: "123456789",
      address: "123 Main St",
      city: "New York",
      country: "USA",
      bedrooms: 2,
      bathrooms: 2,
      createdAt: new Date(),
    };
    setApartmentDetails(mockApartmentDetails);
  }, []);

  if (!apartmentDetails) {
    return null; // Render loading indicator or placeholder
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Image
          source={{ uri: apartmentDetails.image }}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          {apartmentDetails.type}
        </Text>
        <Text>
          By {apartmentDetails.sellerFirstName}{" "}
          {apartmentDetails.sellerLastName}
        </Text>
        {/* <Text>{format(apartmentDetails.createdAt, "yyyy-MM-dd HH:mm")}</Text> */}
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Overview</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white" }}>{apartmentDetails.address}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{apartmentDetails.city}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{apartmentDetails.country}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{apartmentDetails.bedrooms}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>{apartmentDetails.bathrooms}</Text>
        </View>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Price</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            backgroundColor: "#F3F3F3",
            borderRadius: 5,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", marginLeft: 5 }}>
            {apartmentDetails.price}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Apartment Description
        </Text>
        <Text>{apartmentDetails.description}</Text>
      </View>
    </ScrollView>
  );
}
