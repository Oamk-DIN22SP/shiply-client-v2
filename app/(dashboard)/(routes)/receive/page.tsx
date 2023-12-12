import Container from "@/components/ui/container";
import Panel from "@/components/ui/panel";
import Notifications from "@/components/notifications/notifications";

export const revalidate = 0;
const ReceivePage = async () => {
  return (
    <Container>
      <div className="items-start justify-center gap-6 rounded-lg md:grid md:grid-cols-2">
        <Panel title="Latest Notifications">
          <Notifications />
        </Panel>
        <Panel title="Details">
        test
        </Panel>
      </div>
    </Container>
  );
};

export default ReceivePage;
