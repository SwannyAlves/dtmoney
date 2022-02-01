import { Container } from './styles'

export function Transation() {
  return (
    <>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Salario</td>
              <td className='deposito'>R$ 4000,00</td>
              <td>Deposito</td>
              <td>10/06/2020</td>
            </tr>
            <tr>
              <td>Almoço</td>
              <td className='saque'>- R$ 50,00</td>
              <td>Alimentação</td>
              <td>10/06/2020</td>
            </tr>
            <tr>
              <td>Almoço</td>
              <td className='saque'>- R$ 50,00</td>
              <td>Alimentação</td>
              <td>10/06/2020</td>
            </tr>
            <tr>
              <td>Almoço</td>
              <td className='saque'>- R$ 50,00</td>
              <td>Alimentação</td>
              <td>10/06/2020</td>
            </tr>
          </tbody>
        </table>
      </Container>
    </>
  )
}
