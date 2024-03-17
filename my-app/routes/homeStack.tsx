import { createStackNavigator } from "@react-navigation/stack";
import ApartmentDetails from "@/components/apartment-details";

const stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="ApartmentDetails" component={ApartmentDetails} />
    </stack.Navigator>
  );
};
