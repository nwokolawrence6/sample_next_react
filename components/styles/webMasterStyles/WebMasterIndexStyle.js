import styled from 'styled-components'

const WebMasterIndexWrapper = styled.section`
  .cards, .yearly_income {
    display: flex;
    justify-content: space-around; 
    align-items: center;
  .box {
      padding: 5px 1em;
      color: rgba(0, 0, 0, 0.87);
      width: 100%;
      border: 0;
      display: flex;
      position: relative;
      min-width: 0;
      word-wrap: break-word;
      font-size: .875rem;
      background: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
      margin: 20px 15px;
      border-radius: 6px;
      flex-direction: column; 
      p {
        border-top: 1px solid #80808033;
        padding-top: 1em;
        margin-top: 2em;
        color: #999999;
        display: inline-flex;
        font-size: 12px;
        line-height: 22px;
      }
      .icon--text { 
        display: flex;
        cursor: pointer;
        .icon{
          transition: 0.5s ease;
          padding: 15px;
          top: -30px;
          position: relative;
          border-radius: 3px; 
          background-color: #999;
          background: linear-gradient(60deg, #66bb6a, #43a047);
          background-color: rgba(0, 0, 0, 0);
          box-shadow: 0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2);
        }
        .icon img{
          width: 65px;
          height: 65px;
          overflow: unset;
          font-size: 36px;
          text-align: center;
          line-height: 56px;
          padding: 12px;
        }
        h1{
          margin-left: auto;
          text-align: right;
          font-weight: 100;
          line-height: 1.5em;
          color: #56687a;
          margin-top: 0px;
          min-height: auto;
          span{
          color: #999999;
          margin: 0;
          font-size: 14px;
          padding-top: 10px;
          text-align: right;
  
          }
        }
      }
       :hover .icon--text{
       cursor: pointer;
          .icon{border-radius: 100px;}
        }
    }
  };
  .yearly_income {
    margin-top: 3em;
    .box{
      .icon {
        background: linear-gradient(60deg, #6fc7d3, #18a999) !important;
        border-radius: 100px !important;
      };
      .expenses {
       background: linear-gradient(60deg, rgba(255,93,113,0.87), #f53b51) !important;
      };
      .icon--text{
        h1{
          margin: 0 auto !important;
          text-align: center;
          font-size: 30px;
          color: #18a999;
          span{
            color: #444;
            font-size: 14px;
          }

        }
        .exph1{
          color: #F53B51;
        }
      }
    }
  };
  
  .cash__cards {
    display: flex;
    margin-top: 3em;
    justify-content: space-around;
    .amount-sold, .cashed-out{
      color: rgba(0, 0, 0, 0.87);
      width: 100%;
      padding: 5px 1em;
      border: 0;
      display: flex;
      position: relative;
      min-width: 0;
      word-wrap: break-word;
      font-size: .875rem;
      margin: 20px 15px;
      background: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
      border-radius: 6px;
      flex-direction: column;
      transition: 300ms ease-in-out;
      .updated{
        margin-top: 2em;
        border-top: 1px solid #88888847;
        p{
          margin: 0px;
          padding: 10px 0;
        }
      }
      .refresh {
        position: absolute;
        align-self: center;
        top: 22em;
        cursor: pointer;
        opacity: 0.7;
        .tooltip{
            visibility: hidden;
            width: 120px;
            background-color: rgba(58,58,58,0.87);
            color: #fff;
            font-weight: 500;
            text-align: center;
            border-radius: 3px;
            padding: 12px 12px;
            position: absolute;
            z-index: 1;
            top: 2em;
            left: -3em;
            transition: 0.3s ease-in-out;
            opacity: 0;
        };
      }
      .refresh:hover .tooltip{
        visibility: visible;
        opacity: 1 ;
        };
      
      .bar-charts {
        transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
        color: white;
        padding: 15px;
        z-index: 10;
        margin-top: -20px;
        border-radius: 3px;
        background: linear-gradient(60deg, #2adac2, #00c198);
        box-shadow: 0 12px 20px -10px rgba(0,193,152,0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(42,218,194,0.29);
        h3{
          font-weight: 400;
          font-size: 25px;
          margin: 0px;
          padding: 8px;
        }
      }
      .total_income, .cash-out{
        margin: 2em 0;
        min-height: auto;
        text-decoration: none;
        border-bottom: 1px solid rgba(255,255,255,0.31);
        color: white;
        font-weight: 100;
        font-size: 20px !important;
        padding-bottom: 10px !important;

        .total_income_v, .cash-out_v{
          float: right;
          font-weight: 500 !important;
          font-size: 25px;
          color: #ffffff;
        }
      }
      .percent{
        color: rgba(19,162,72,0.8);
        bold{
              color: #000;
              opacity: 0.7;
            }
        .MuiSvgIcon-root-145 {
            fill: currentColor;
            width: 1em;
            height: 1em;
            display: inline-block;
            top: 5px;
            font-size: 24px;
            transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            user-select: none;
            flex-shrink: 0;
        }
      }
 }
     
     .amount-sold:hover .bar-charts {
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      transform: translate3d(0, -50px, 0);
     };
     
     .cashed-out:hover .bar-charts {
      transition: all 300ms cubic-bezier(0.34, 1.61, 0.7, 1);
      transform: translate3d(0, -50px, 0);
      
     }
}


@media (max-width: 860px){
       .cards {flex-wrap: wrap;}
       .yearly_income {flex-wrap: wrap;}
       .cash__cards {
        flex-wrap: wrap;
       .cashed-out, .amount-sold {
        .refresh{
        top: 15em;
        }
       } 
      }
        
    }
`;

export {
WebMasterIndexWrapper
}