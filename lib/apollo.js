import { withData } from "next-apollo";
import { HttpLink } from "apollo-boost";
import { serverConfig } from "./config";


const config = {
  link: new HttpLink( {
    uri : serverConfig , // Server URL (must be absolute)
    opts : {
      credentials : true , // Additional fetch() options like `credentials` or `headers`
    }
  })
};

export default withData(config);
