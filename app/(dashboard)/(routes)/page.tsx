import Container from "@/components/ui/container";
import Locations from "@/components/location/locations";
import Cabinets from "@/components/cabinet/cabinets";
import Details from "@/components/details/details";
import Panel from "@/components/ui/panel";

export const revalidate = 0;
const HomePage = async () => {
  return (
    <Container>
      <div className="items-start justify-center gap-6 rounded-lg px-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
        <Panel title="Locations">
          <Locations />
        </Panel>
        <Cabinets />
        <Details />
      </div>
    </Container>
  );
};

export default HomePage;
