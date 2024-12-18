import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export default async function StudentRegistrationForm() {
  async function registerStudent(formData: FormData) {
    'use server'
    
    try {
      const name = formData.get('name') as string
      const email = formData.get('email') as string

      const { rows } = await sql`INSERT INTO student (name, email) VALUES (${name}, ${email})`;
   
      console.log('Registering student:', { name, email })

      
      redirect('/dashboard/student/list')
   
    } catch (error) {
      console.error('Error registering student:', error)
      throw error
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Cadastro de Estudante</CardTitle>
        <CardDescription>Preencha os dados do estudante para registro.</CardDescription>
      </CardHeader>
      <form action={registerStudent}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" name="name" placeholder="Digite o nome completo" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" placeholder="Digite o e-mail" required />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Registrar Estudante
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

