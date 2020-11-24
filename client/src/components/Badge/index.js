import React from 'react'
import Badge from 'react-bootstrap/Badge';

const index = (props) => {
    const renderBadge = () => {
        switch (props.profile) {
            case "Salt Nic":
                return <Badge variant='secondary' className="mr-3">{props.profile}</Badge>
            case "Vape Juice":
                return <Badge variant='primary' className="mr-3">{props.profile}</Badge>
            case "menthol":
                return <Badge variant='info' className="mr-3">{props.profile}</Badge>
            case "cream":
                return <Badge variant='warning' className="mr-3 text-light">{props.profile}</Badge>
            case 'tobacco':
                return <Badge variant='danger' className="mr-3">{props.profile}</Badge>
            default:
                break;
        }
    }
    return (
        <>
            {renderBadge()}
        </>
    )
}

export default index
