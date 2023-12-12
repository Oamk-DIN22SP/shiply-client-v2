
import Container from "@/components/ui/container";
import Panel from "@/components/ui/panel";
import Notifications from "@/components/notifications/notifications";
import Tracking from "./components/tracking";

const TrackPage = async () => {
  return (
    <Container>
      <div className="items-start justify-center gap-6 rounded-lg md:grid md:grid-cols-2">
        <Panel title="Latest Notifications">
          <Notifications />
        </Panel>
        <Panel title="Track your parcel">
          <Tracking />
        </Panel>
      </div>
    </Container>
  );
};

export default TrackPage;
