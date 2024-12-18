import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { sql } from "@vercel/postgres";

export default async function Cart(){

    const { rows } = await sql`SELECT * from student`;

  return (
    <Table>
    <TableCaption>A list of registered students.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Email</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {rows.map((student) => (
        <TableRow key={student.id}>
          <TableCell>{student.name}</TableCell>
          <TableCell>{student.email}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  );
}