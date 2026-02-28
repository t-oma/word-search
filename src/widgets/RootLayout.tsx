import { AppFooter } from "./AppFooter";
import { AppHeader } from "./AppHeader";

type RootLayoutProps = {
  children: React.ReactNode;
};

function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col">
      <AppHeader />

      {children}

      <AppFooter />
    </div>
  );
}

export { RootLayout };
