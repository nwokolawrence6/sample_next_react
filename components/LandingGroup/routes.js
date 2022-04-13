// import { IoMdHome, IoIosPeople } from 'react-icons/io';
// import { MdContactPhone } from 'react-icons/md';

import { authRoute } from "../../lib/config";

const Routes = [
	{
		name : 'Home' ,
		path : '/' ,
		// icon: <IoMdHome />
	} ,
	{
		name : 'About Us' ,
		path : '/about' ,
		// icon: <IoIosPeople />
	},
	{
		name: 'Contact',
		path: '/contact',
		// icon: <MdContactPhone />
	},
	{
		name : 'Sell Now' ,
		path : authRoute
	}
];
export default Routes;
