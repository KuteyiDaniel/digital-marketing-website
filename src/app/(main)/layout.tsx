// import NavigationBar from "../components/navigation-bar/navigation-bar";
// import Footer from "../components/footer/footer";
// import "globals.css";

type propsType = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: propsType) {
  return (
    <section>
      {/* <NavigationBar /> */}
      {children}
      {/* <Footer/> */}
    </section>
  );
}
