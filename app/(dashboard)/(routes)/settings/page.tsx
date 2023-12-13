import Container from "@/components/ui/container";
import Panel from "@/components/ui/panel";
import Notifications from "@/components/notifications/notifications";
import Settings from "@/components/settings";

export const revalidate = 0;
const SettingsPage = async () => {
  return (
    <Container>
      <div className="items-start justify-center gap-6 rounded-lg md:grid md:grid-cols-2 grid-cols-1">
        <Panel title="Latest Notifications">
          <Notifications />
        </Panel>
        <Panel title="Settings">
          <Settings />
        </Panel>
      </div>
    </Container>
  );
};

export default SettingsPage;
