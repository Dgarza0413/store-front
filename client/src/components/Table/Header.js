import React from 'react'

const Header = ({ data }) => {
    return (
        <thead>
            <tr>
                {data && Object.keys(data).map(e => {
                    if (
                        e === "description" ||
                        e === "__v" ||
                        e === "_id" ||
                        e === "viscosity" ||
                        e === "discountPercent" ||
                        // e === "pictureURI" ||
                        e === "flavorKeywords"
                    ) {
                        return
                    } else {
                        return (
                            <th>
                                {e}
                            </th>
                        )
                    }
                })}
            </tr>
        </thead>
    )
}

export default Header
