import Footer from "@/components/footer";
import Header from "@/components/header";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-skin min-h-screen">
            <Header />
                {children}
            <Footer />
        </div>
    );
}

