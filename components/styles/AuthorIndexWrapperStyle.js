import styled from "styled-components";

// language=LESS
const AuthorIndexWrapperStyle = styled.div`

  .main {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 2em;
    border-bottom: 1px solid rgba(34, 34, 34, 0.15);
    .num__of__books, .amount__sold, .amount__earned {
      padding: 10px 1em;
      color: rgba(0, 0, 0, 0.87);
      width: 100%;
      border: 0;
      display: flex;
      position: relative;
      min-width: 0;
      word-wrap: break-word;
      font-size: .875rem;
      color: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.23);
      margin: 20px 15px;
      border-radius: 6px;
      flex-direction: column;
      .icon_text {
        display: flex;
        justify-content: space-between;
        img {
          height: 30px;
        }
      }
      p {
        font-size: 18px;
        margin: 0;
        padding: 10px 0;
        font-weight: 600;
        border-bottom: 1px solid rgba(255, 255, 255, 0.44);
      }
      bold {
        font-size: 10px;
        padding-top: 15px;
        margin-left: auto;
        font-weight: 500;
      }
      div {

        align-items: flex-start;
        position: absolute;
        margin-left: 17.3%;
        top: 9.8em;
        i {
          border: solid #fff;
          border-width: 0 3px 3px 0;
          display: inline-block;
          padding: 5px;
          position: relative;
          transform: rotate(45deg);
          left: 5em;
        }

      }

      h1 {
        font-size: 35px;
        position: relative;
        font-weight: 400;
        z-index: 20;
      }
    }

    .num__of__books {
      background: linear-gradient(60deg,#132540,#192859cc)
    }
    .amount__sold {
      background: linear-gradient(60deg,rgb(204, 41, 54) ,rgba(224, 87, 98))
    }
    .amount__earned {
      background: linear-gradient(60deg, rgba(31, 162, 132, 0.93), rgba(19, 162, 72, 0.93));
    }
  }

  @media (max-width: 820px) {
    .main {
      flex-wrap: wrap;
    }
  }

`;

const BooksWrapper = styled.div`
 .all_books {
 	width: 100%;
 }
 button.search-btn, input.p-autocomplete-input {
 border: none !important;
 background: #f5f3f3 !important;
 border-bottom: 2px solid #cc2936 !important;
 }

 .search-header-holder { 
 	display: flex;
	justify-content: space-between;
	align-items: first baseline;
	width: 100%;
	flex-wrap: wrap;
	margin-bottom: 2em;
	}
    min-height: 80vh;
    margin-top: 2em;
    margin-left: 0.5em;
    border-radius: 6px;
    padding: 1em 1em;
    display: flex;
		justify-content: space-around;
		flex-direction: column;
		align-items: center;
		//h1 {
		//  margin-bottom: 2em;
		//}
		
		@media (max-width: 820px){
			.main {
				flex-wrap: wrap;
			}
		}

`;

const GetHelpIconWrapper = styled.div`
  h1 {
    float: right;
    position: fixed;
    background: red;
  }
`;

export {
	AuthorIndexWrapperStyle,
	BooksWrapper,
  GetHelpIconWrapper
};
