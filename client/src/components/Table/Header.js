import React from 'react'

const Header = ({ data }) => {
    return (
        <thead>
            <tr>
                {data && Object.keys(data).map((e, i) => {
                    if (
                        e === "description" ||
                        e === "__v" ||
                        e === "_id" ||
                        e === "viscosity" ||
                        e === "discountPercent" ||
                        e === "flavorKeywords"
                    ) {
                        return
                    } else {
                        return (
                            <th key={i}>
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
