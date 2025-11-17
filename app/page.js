import Text from "@/components/Text";
import { getCourses } from "@/queries/courses";

export default async function Home() {

  const coureses = await getCourses();
  console.log(coureses);

  return (
    <Text />
  );
}
