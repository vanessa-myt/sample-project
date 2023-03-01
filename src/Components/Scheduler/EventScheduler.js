import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "../../Helpers/testData/events";

export default function EventScheduler() {
  console.log(EVENTS);
  return <Scheduler events={EVENTS} />;
}
