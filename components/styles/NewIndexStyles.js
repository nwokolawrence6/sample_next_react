import styled from 'styled-components';
import Book_On from "../../assets/v2/book_on.jpg";
import Book_Two from "../../assets/v2/book_no2.jpg";
import Person from "../../assets/v2/person.jpg";

const NewIndexWrapper = styled.div`

	 .more_info {
	 .content {
	 flex-wrap: wrap;
	 display: flex;
	 font-size: 17px;
    letter-spacing: 1px;
    font-weight: normal;
    line-height: 31px;
    .same {
      min-width: 287px;
    }
	   .right {
	   flex: 1;
	   margin-right: 82px;
	   p {
	    margin-top: 20px;
	    letter-spacing: 1px;
      font-weight: normal;
      line-height: 31px;
	   }
	 }
	 .left {
	   flex: 1;
	 }
	 }
	
	 h1 {
	 text-transform: capitalize;
	   color: #081027e6;
      font-weight: bold;
      max-width: 17em;
      font-size: 28px;
	 }
	   margin: 10%;
	   @media (max-width: 1176px) { 
	  	margin: 5% !important;
	  	}
	 }
	.home_new {
	  .section_2 {
	  margin-bottom: 60px;
	    h1 {
	     color: #404447;
	     left: 12px;
        position: relative;
        margin: 49px 10px 10px 20px;
	   }
	   .content {
	     span {
	      position: relative;
        top: 21px;
        font-size: 18px;
        color: #f0f0f0;
	     }
	       background: linear-gradient(to right,#293660d6,#293660d6,#293660cc,#782c46,#cc0227d6,#cc0227 ),url('${ Person }') no-repeat;
	      padding: 3em;
        background-position: 17% 53%;
        min-height: 13em;
        line-height: 23px;
        background-size: cover;
//background-attachment: fixed;
	    }
	   }
	
	   margin: 0 10%;
	   h1 {
	   text-transform: none !important;
	   }
	   @media (max-width: 1176px) { 
	  	margin: 0 5% !important;
	  	}
	  .section_1 {
	   display: flex;
	   flex-wrap: wrap-reverse;
	   .right_section {
	   flex: 1;
	   justify-content: center;
	   align-items: center;
	    .sideImage {
	      background: url(${ Book_Two }) #fff no-repeat;

	     	@media (max-width: 1176px) {
	          		 margin-top: 35px;
	          		  min-width: 309px;
	          	   width: 100% !important;
	          	   background: url(${ Book_On }) #fff no-repeat !important;
	          	   background-size: cover !important;
	          	   height: 25em;
	          	    bottom: auto !important;
	          	}
	           //width: 40em;
	           height: 560px;
             max-height: 40em;
             bottom: 91px;
             background-size: cover;
             position: relative;
	         }
	   }
	    
	    }
	   .left_section {
        flex: 1;
        min-width: 309px;
        padding: 30px;
        .content_new {
          font-size: 18px;
          p {
           color: #63676a;
           span {
             color: #f80207;
           }
          }
	        }
	        h1 {
	          color: #0b132a;
	          p {
	           font-weight: bolder;
              font-size: 30px;  
	          }
	        }
	     }
	  }
	  .last_row {
	  h3 {
	  margin-bottom: 25px;
	  color: #0c112e;
    font-weight: normal;
	    span {
	      color: #cc0227;
	      font-weight: normal;
	    }
	    p {
	      font-size: 29px;
	      text-transform: uppercase;
	      color: #0c112ed1;
	    }
	 
	  }
	  flex-wrap: wrap;
	  display: flex;
	   img {
	     width: 100%;
	   }
	   margin: 10%;
	   @media (max-width: 1176px) { 
	  	margin: 5% !important;
	  	} 
	  
	  	
	  	.right {
	  	  flex: 1;
	  	  min-width: 323px;
	  	  display: flex;
	  	  margin-right: 80px;
         @media (max-width: 717px) { 
          margin-right: auto !important;
         }
	  	     .sideBorder {
            background-color: #400daa;
            width: 11px;
            max-height: 15em;
            margin-top: 9%;
           }
          }
        .left {
         flex: 1;
         min-width: 323px;
           p {
             a {
	        background-color: #cc0227;
          padding: 12px 33px 12px 33px;
          color: #ffffff;
	     }
      }
     .action_join {
        @media (max-width: 807px) { 
          margin-top: auto !important;
      }
        margin-top: 100px;
       }
      p.join_us {
	     font-size: 20px;
	     color: #171a2d;
	    }
         }
      }
`;
export {
  NewIndexWrapper
};
