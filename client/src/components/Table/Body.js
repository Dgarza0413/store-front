import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({ data }) => {
    return (
        <tbody>
            {data && data.map(e => {
                return (
                    <tr key={e?.uuid}>
                        {Object.entries(e).map((e, i) => {
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
                                    <td key={i}>
                                        <Link to={`/admin/product/${e[1]}`}>
                                            {e[1]}
                                        </Link>
                                    </td>
                                )
                            } else if (e[0] === "pictureURI") {
                                return (
                                    <td key={i}>
                                        {
                                            e[1] === ""
                                                ? "no uri"
                                                : "uri exists"
                                        }
                                    </td>
                                )
                            } else {
                                return (
                                    <td key={i} className="text-nowrap">
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
