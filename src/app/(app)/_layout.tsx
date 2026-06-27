// app/(app)/_layout.tsx
import { Stack, Redirect } from "expo-router";
// import { useSession } from "@/lib/auth";

export default function AppLayout() {
  // TODO: add back in with auth
  
  // const { session, loading } = useSession();

  // if (loading) return null;

  // if (!session) {
  //   return <Redirect href="/sign-in" />;
  // }

  return (
    <Stack>
      <Stack.Screen name="chat" options={{ headerShown: false }} />
      <Stack.Screen name="history" options={{ headerShown: false }} />
      <Stack.Screen name="loading" options={{ headerShown: false }} /> // TODO: remove
    </Stack>
  );
}