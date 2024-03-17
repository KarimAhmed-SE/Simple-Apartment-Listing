import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";

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
  const { id } = useLocalSearchParams();
  const [apartments, setApartments] = useState<Apartment | null>(null);

  useEffect(() => {
    try {
      axios
        .get(`http://192.168.1.12:3001/apartments/${id}`)
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
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <Image
          source={require("../../../public/images/Seller@gmail.comGarden Apartment.png")}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
          {apartments?.type}
        </Text>
        <Text style={{ color: "white" }}>
          By {apartments?.sellerFirstName} {apartments?.sellerLastName} -{" "}
          {apartments?.sellerEmail} - {apartments?.sellerPhone}
        </Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Overview
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white" }}>{apartments?.address}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white" }}>{apartments?.city}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white" }}>{apartments?.country}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white" }}>{apartments?.bedrooms}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ color: "white" }}>{apartments?.bathrooms}</Text>
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
            {apartments?.price}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Apartment Description
        </Text>
        <Text style={{ color: "white" }}>{apartments?.description}</Text>
      </View>
    </ScrollView>
  );
}
