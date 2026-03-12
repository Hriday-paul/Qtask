import Navbar from "@/shared/Navbar/Navbar";
import Footer from "@/shared/Navbar/Footer/Footer";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <div className="">
                {children}
            </div>
            <Footer />
        </>

    );
}
