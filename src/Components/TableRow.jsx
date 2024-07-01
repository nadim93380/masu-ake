/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const TableRow = (props) => {

    const item = props.item
    const index = props.index


    return (
        <tr className="hover">
            <th className="hidden md:block">{index+1}</th>
            <td>{item.name}</td>
            <td>{item.subCategory}</td>
            <td className="hidden md:block">{item.customization}</td>
            <td>{item.stock}</td>
            <td><Link to={`/craftDetails/${item._id}`} className="btn btn-sm btn-success text-white">View Details</Link></td>
        </tr>
    );
};

export default TableRow;