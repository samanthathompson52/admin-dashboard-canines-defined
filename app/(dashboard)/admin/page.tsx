import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function AdminHomePage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Admin Home</CardTitle>
        <CardDescription>View all customers and their orders.</CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
