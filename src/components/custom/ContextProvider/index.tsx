import ThemeProvider from "./ThemeProvider";
import AuthProvider from "./AuthProvider";
import ProgressBar from "./ProgressBar";

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
        {children}
      </ThemeProvider>
    </AuthProvider>
  );
}
