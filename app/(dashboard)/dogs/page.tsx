import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function DogPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dogs</CardTitle>
        <CardDescription>View all dogs.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
