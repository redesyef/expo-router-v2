import { Tabs } from "expo-router";

export default function TabRoutesLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="tarjetas" options={{ title: "tarjetas" }} />
      <Tabs.Screen name="billetera" options={{ title: "billetera" }} />
      <Tabs.Screen name="perfil" options={{ title: "perfil" }} />
    </Tabs>
  );
}
