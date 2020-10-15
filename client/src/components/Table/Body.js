import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({ data }) => {
    return (
        <tbody>
            {data && data.map(e => {
                return (
                    <tr>
                        {Object.entries(e).map(e => {
                            if (
                                e[0] === "description" ||
                                e[0] === "__v" ||
                                e[0] === "_id" ||
                                e[0] === "viscosity" ||
                                e[0] === "discountPercent" ||
                                // e[0] === "pictureURI" ||
                                e[0] === "flavorKeywords"
                            ) {
                                return
                            } else if (e[0] === "uuid") {
                                return (
                                    <Link to={`/admin/product/${e[1]}`}>
                                        {e[1]}
                                    </Link>
                                )
                            } else if (e[0] === "pictureURI") {
                                return (
                                    <div>
                                        {
                                            e[1] === ""
                                                ? "no uri"
                                                : "uri exists"
                                        }
                                    </div>
                                )
                            } else {
                                return (
                                    <td className="text-nowrap">
                                        {e[1]}
                                    </td>
                                )
                            }
                        }
                        )}
                    </tr>
                )
            })}
        </tbody>
    )
}

export default Body
