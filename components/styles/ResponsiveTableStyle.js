import styled from 'styled-components';
const ResponsiveTableStyle = styled.table `
  width: 100%;
  margin: 0;
  padding: 0;
  border-collapse: ${props => props.separate ? 'separate' : null};
  border-spacing: 0 ${props => props.separate};
thead {
  visibility: hidden;
  background: #fafafa;
  tr {
  background: ${props => props.theme.primaryColorLight};
  color: #fff;
  }
}

tbody {
  tr{ 
    transition: 0.2s ease-in-out;
    td {
      padding-top: ${props => props.padded && props.padded};
      padding-bottom: ${props => props.padded && props.padded};
    }
  }
  tr:hover {
    background: #eaeaea;
    //box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.14);
    cursor: pointer;
  }
}

@media screen and (min-width: 600px) {
  thead {
    visibility: visible;
  }
}
tr {
  //box-shadow: 1px 2px 5px 0px #aaa;
  background-color: #fff;
  border: ${props => props.bordered && "1px solid #ddd"};
  border-bottom: ${props => props.bordered && "2px solid #ddd"};
  padding: 5px;
  margin-bottom: 10px;
  display: block;
}
@media screen and (min-width: 600px) {
  tr {
    display: table-row;
    border-bottom-width: 1px;
    margin-bottom: 0;
  }
  tr:nth-child(even) {
    background: ${props => props.stripes && '#fafafa'};
  }
}
th,
td {
  padding: 10px;
  text-align: left;
}
th {
  text-transform: capitalize;
  font-size: 11px;
}
td {
  display: block;
  text-align: right;
  font-size: 13px;
  border-bottom: 1px dotted #ddd;
}
td:last-child {
  border-bottom: none;
}
@media screen and (min-width: 600px) {
  td {
    display: table-cell;
    text-align: left;
    font-size: 14px;
    border-bottom: none;
  }
}
td:before {
  content: attr(data-label);
  float: left;
  text-transform: capitalize;
  font-weight: bold;
}
@media screen and (min-width: 600px) {
  td:before {
    content: "";
    display: none;
  }
}
`;

export {
  ResponsiveTableStyle
}
