import React from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import SingleProject from './SingleProject'

const List = styled.ol`
    border-left: 5px solid #ddd;
    position: relative;
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    padding-bottom: 36px;
    margin-left: 12px;
    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: -23px;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #ddd;
        border: 5px solid #ddd;
	}
`;

export default class ProjectsList extends React.Component {
    render() {
        return (
            <List>
                <SingleProject></SingleProject>
                <SingleProject></SingleProject>
                <SingleProject></SingleProject>
                <SingleProject></SingleProject>
            </List>
        )
    } 
}