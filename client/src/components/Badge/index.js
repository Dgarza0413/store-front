import React from 'react'
import Badge from 'react-bootstrap/Badge';

const index = (props) => {
    const renderBadge = () => {
        switch (props.profile) {
            case "salt nic":
                return <Badge variant='secondary' className="mr-3 mb-2">{props.profile}</Badge>
            case "vape juice":
                return <Badge variant='primary' className="mr-3 mb-2">{props.profile}</Badge>
            case "menthol":
                return <Badge variant='info' className="mr-3 mb-2">{props.profile}</Badge>
            case "cream":
                return <Badge variant='warning' className="mr-3 mb-2 text-light">{props.profile}</Badge>
            case 'tobacco':
                return <Badge variant='danger' className="mr-3 mb-2">{props.profile}</Badge>
            case 'fruity':
                return <Badge variant='success' className="mr-3 mb-2">{props.profile}</Badge>
            case 'original':
                return <Badge variant='info' className="mr-3 mb-2">{props.profile}</Badge>
            default:
                return <Badge variant='primary' className="mr-3 mb-2">{props.profile}</Badge>
        }
    }
    return (
        <>
            {renderBadge()}
        </>
    )
}

export default index
