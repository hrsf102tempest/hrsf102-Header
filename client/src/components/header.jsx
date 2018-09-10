import { relative } from "path";

class Header extends React.Component {
  constructor(props){
    super (props)

    this.state = {
      businessData: {}
    }
  }

  componentDidMount(){
    // function that gets all search params
    let parseQueryString = () => {
      let str = window.location.search;
      let objURL = {};
      str.replace(
          new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
          ( $0, $1, $2, $3 ) => {
              objURL[ $1 ] = $3;
          }
      );
      return objURL;
    };
    let params = parseQueryString();
    let idParam = params.id;
    $.ajax({
      url: `http://127.0.0.1:3004/business/${idParam}`,
      success: (data) => {
        let businessData = JSON.parse(data);
        console.log("Data for this business", businessData);
        this.setState({businessData: businessData})
      }
    })
  }

  render() {
    const bizDetails = {
      width: "960px",
      margin: "0 auto",
      padding: "0 15px",
      display: "block",
      fontfamily: "Helvetica Neue"
    }
    const bizPageHeader = {
      position: "relative",
      display: "flex",
      alignitems: "center",
      width: "100%",
      marginbottom: "13px",
      fontsize: "16px",
      lineheight: "1.3125em",
    }
    console.log("inital state", this.state);
    return (
      <div style={bizDetails}>
        <div style={bizPageHeader}>Hello! {this.state.businessData.name}</div>
      </div>
    )
  }
}

export default Header;