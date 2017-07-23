import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components'

const ListItem = styled.li`
    padding-left: 24px;
    margin-bottom: 36px;
    position: relative;
    box-sizing: border-box;
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: -17px;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        background: #fff;
        border: 5px solid #ddd;
        box-sizing: content-box;
	}
`;

const Stamp = styled.div`
    font-size: 10px;
    color: gray;
`;

export default class SingleProject extends React.Component {
    render() {
        return (
            <ListItem>
                <Stamp>data</Stamp>
                <div className="timeline-name">nazwa</div>
                <div className="timeline-content">desc</div>
                <div className="timeline-links">
                    <a href="attachment.href">link</a>
                </div>
            </ListItem>
        )
    } 
}