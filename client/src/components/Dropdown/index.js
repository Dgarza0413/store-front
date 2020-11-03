import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const Index = (props) => {

    const handleFilterClick = async (e) => {
        const res = await fetch(`/api/v1/profile/${e}`)
        const data = await res.json();
        await props.setData(data);
    }
    return (
        <DropdownButton
            as={ButtonGroup}
            className="mr-3 bg-dark text-white"
            variant="dark"
            id={`dropdown-variants-dark`}
            title={'select product'}
        >
            {
                props.settingFilters.map((e, i) => {
                    return (
                        <Dropdown.Item
                            onClick={() => handleFilterClick(e)}
                            eventKey={i}
                        >
                            {e}
                        </Dropdown.Item>
                    )
                })
            }
        </DropdownButton>
    )
}

export default Index
