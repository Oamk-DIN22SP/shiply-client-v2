import Container from "@/components/ui/container";
import Panel from "@/components/ui/panel";
import SendForm from "./send/components/send-form";
import Notifications from "@/components/notifications/notifications";
// import Details from "@/components/details/send-parcel-details";

export const revalidate = 0;
const HomePage = async () => {
  return (
    <Container>
      <div className="items-start justify-center gap-6 rounded-lg md:grid md:grid-cols-2">
        <Panel title="Latest Notifications">
          <Notifications />
        </Panel>
        <Panel title="Details">
        {/* <div className="flex items-center justify-center">
        <iframe src="https://shiply-touchscreen.vercel.app/" width="500" height="1000" loading="lazy"></iframe>
        </div> */}
        test
        </Panel>
      </div>
    </Container>
  );
};

export default HomePage;
