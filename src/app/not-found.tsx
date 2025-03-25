import ErrorComponent from "@/components/error/ErrorComponent"

export default function NotFound() {
  return (
    <div>
      <ErrorComponent code={404} message="Página no encontrada."/>
    </div>
  )
}