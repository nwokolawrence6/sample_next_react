import styled from 'styled-components'

const TicketListWrapper = styled.div`
  table {
    tbody {
      tr {
        td{
          font-size: 14px;
          svg {
            visibility: hidden;
            font-size: 20px;
          }
        }
        :hover {
          svg{
          visibility: visible;


          }
        }
      }
    }
  }

`;

export {
  TicketListWrapper
}