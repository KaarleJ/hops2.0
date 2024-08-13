import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import ProgressBar from "./ProgressBar";
import { Toaster } from "@/components/ui/toaster";
import DndContext from "./DndContext";

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ProgressBar
          height="4px"
          color="#7c3aed"
          options={{ showSpinner: false }}
          shallowRouting
        />
        <DndContext>{children}</DndContext>
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
}
