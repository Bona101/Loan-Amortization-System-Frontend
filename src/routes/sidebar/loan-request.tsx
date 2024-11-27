import { createFileRoute } from '@tanstack/react-router'


const LoanRequest = () => {
  return (
    <div>
      Loan Request
    </div>
  )
}


export const Route = createFileRoute('/sidebar/loan-request')({
  component: LoanRequest,
})